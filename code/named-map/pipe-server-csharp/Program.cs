using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.IO.Pipes;
using Newtonsoft.Json;

namespace MMapServer3
{
    internal sealed class Program
    {
        private static void Main(string[] args)
        {
            // サーバーの作成
            while (true)
            {
                using (var server = new NamedPipeServerStream("tmp-pipeserver3-app.world1", PipeDirection.InOut))
                {
                    // クライアント接続待ち
                    Console.WriteLine("[TRACE] (waiting for client connection...)");
                    server.WaitForConnection();
                    // 接続
                    OnNewSession(server);
                }
            }
        }

        /// <summary>
        /// 新しいセッション
        /// </summary>
        /// <param name="server"></param>
        private static void OnNewSession(NamedPipeServerStream server)
        {
            Console.WriteLine("[TRACE] (accept)");

            // ========== 受信 ==========
            char c;
            string message = string.Empty;
            while ((c = (char)server.ReadByte()) != '\f')
            {
                message += c;
            }
            OnMessage(server, message);
        }

        /// <summary>
        /// 着信あり
        /// </summary>
        /// <param name="server"></param>
        /// <param name="message"></param>
        private static void OnMessage(NamedPipeServerStream server, string message)
        {
            // ========== deserialize json ==========
            Newtonsoft.Json.Linq.JObject unknown = (Newtonsoft.Json.Linq.JObject)Newtonsoft.Json.JsonConvert.DeserializeObject(message);
            string type1 = "" + unknown["type"];
            string data1 = "" + unknown["data"];

            // type と data が設定された JSON 文字列が送信されてくる
            Console.WriteLine("[TRACE] message: [" + message + "], unknown: [" + unknown + "]");

            // ========== 返信 ==========
            var writer = new StreamWriter(server);
            var data = "pong";
            // node-ipc が解釈できる形のJSON文字列 + \fを返す。
            writer.Write("{ \"type\": \"pipeserver3-app.message\", \"data\": \"" + data + "\" }" + "\f");
            writer.Flush();
            // クライアント側が送信メッセージを読み終わるまで待つ
            server.WaitForPipeDrain();
        }
    }
}
