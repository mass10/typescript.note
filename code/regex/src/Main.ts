namespace Main {

    function isPostCode(s: String): boolean {
        if (s.match(/^\d{3}-?\d{4}$/)) {
            return true;
        }
        return false;
    }

    function validatePostCode(s: String): void {
        const result = isPostCode(s);
        console.log(`[TRACE] ${s} is postcode ? -> ${result}`);
    }

    export function main(): void {
        validatePostCode("");
        validatePostCode("9");
        validatePostCode("92");
        validatePostCode("123");
        validatePostCode("4567");
        validatePostCode("123-");
        validatePostCode("-4567");
        validatePostCode("123-4567");
        validatePostCode("123--4567");
        validatePostCode("090-1234-5678");
    }
}

Main.main();
