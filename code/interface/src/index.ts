namespace Main {

    interface IData {
        id: string
        email: string
        name: string
    }

    interface IMailAccount {
        email: string
        name: string
    }

    function dump1(data: IData): void {
        console.log("[TRACE]", JSON.stringify(data));
    }

    function dump2(data: IMailAccount): void {
        console.log("[TRACE]", JSON.stringify(data));
    }

    export function main() {
        const data = {
            id: "8781239124-21398023-231-123987142",
            email: "randy.rhodes@docomo.ne.jp",
            name: "Randy Rhoads"
        }
        dump1(data);
        dump2(data);
    }
}

Main.main();
