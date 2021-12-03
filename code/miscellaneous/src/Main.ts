/**
 * とあるオブジェクトの型
 */
type ResultType1 = {
    id: string,
    name: string,
    note: string,
};

/**
 * とあるオブジェクト(連想配列)を返します。
 *
 * @returns とあるオブジェクト
 */
function get1(): ResultType1 {
    return {
        id: 'c03754c7-fe5f-492d-a05f-7403c56d090d',
        name: 'Aretha Franklin',
        note: 'めも',
    };
}

/**
 * エントリーポイント
 */
function main(): void {

    // 普通に受け取る
    {
        const instance = get1();
        console.log(instance);
    }

    // バラして受け取る
    {
        const { id, name, note } = get1();
        console.log({ id, name, note });
    }
}

main();
