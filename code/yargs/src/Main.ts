 import yargs from "yargs"

async function main(): Promise<void> {

    console.log("### start ###");

    const argv = await yargs
        .option("request", { description: "Specifies requested operation id.", type: "string" })
        .option("help", { description: "Usage.", type: "boolean" })
        .help()
        .alias("help", "h")
        .argv

    if (argv["request"]) {
        const value = argv["request"]
        console.log(`リクエスト: [${value}]`);
    }

    console.log("--- end ---");
}

main();
