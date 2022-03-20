/**
 * クエリーAパラメータ
 */
type QueryParamA = {
    environmentType: string,
    userId: string,
    organizationId: string,
}

/**
 * クエリーBパラメータ
 */
type QueryParamB = {
    environmentType?: string,
    userId?: string,
    organizationId?: string,
}

/**
 * 
 * @param param0 オブジェクトパラメータ (QueryParamA)
 */
const exeruteA = ({ environmentType, userId, organizationId }: QueryParamA): void => {
    console.log(`[DEBUG] environmentType: [${environmentType}], userId: [${userId}], organizationId: [${organizationId}]`);
}

/**
 * 
 * @param param0 オブジェクトパラメータ (QueryParamB) 
 */
const exeruteB = ({ environmentType = '', userId = '', organizationId = '' }: QueryParamB): void => {
    console.log(`[DEBUG] environmentType: [${environmentType}], userId: [${userId}], organizationId: [${organizationId}]`);
}

/**
 * アプリケーションのエントリーポイント
 */
function main(): void {

    // 現在の利用者ID
    const userId = 'Xu7S1Lk0Sm';
    // 現在の組織ID
    const organizationId = '78fd6abc-bf1e-4977-b85e-e667bae88a9a';

    // 厳格なオブジェクトを引数に取る関数
    // ・すべての属性が確実に与えられることを保証する。
    exeruteA({
        environmentType: 'development',
        organizationId: '78fd6abc-bf1e-4977-b85e-e667bae88a9a',
        userId: 'Xu7S1Lk0Sm',
    });

    // 不安定な型を引数に取る関数
    // ・すべての属性が確実に与えられることを保証しない。
    exeruteB({
        userId: 'Xu7S1Lk0Sm',
    });
}

main();
