class AbstractObject {
	public describe(): string {
		return '';
	}
}

class Animal {
	public type: string = '';
	public constructor(type: string) {
		this.type = type;
	}
}

class Human {
	public name: string = '';
}


function explainUnknownObject<T>(unknown: T): void {
	console.log(`[TRACE] Animal: `, unknown)
}

function main(): void {

	explainUnknownObject(new Animal('ライオン'));
	// console.log(extractObject(''));
}

main();
