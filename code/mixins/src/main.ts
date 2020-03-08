/**
 * Disposable Mixin
 */
class Disposable {

	isDisposed: boolean = false;

	public dispose() {
		console.log("[TRACE] <Disposable.dispose()> DISPOSED!");
		this.isDisposed = true;
	}
}

/**
 * Activatable Mixin
 */
class Activatable {

	isActive: boolean = false;

	activate() {
		console.log("[TRACE] <Activatable.activate()> ACTIVATED!");
		this.isActive = true;
	}

	deactivate() {
		console.log("[TRACE] <Activatable.deactivate()> DE-ACTIVATED!");
		this.isActive = false;
	}
}

/**
 * とあるオブジェクトの定義
 */
class MySomeObject {

	public constructor() {
		console.log("[TRACE] <MySomeObject.constructor()>");
		setInterval(() => {
			// diagnose
			console.log(`[TRACE] <MySomeObject.anonymous()> active: ${this.isActive}, disposed: ${this.isDisposed}`);
		}, 500);
	}

	public interact() {
		console.log("[TRACE] <MySomeObject.interact()>");
		this.activate();
	}
}

/**
 * プロパティやメソッドを移植する操作
 * @param derivedCtor
 * @param baseCtors 
 */
function applyMixins(derivedCtor: any, baseCtors: any[]) {
	baseCtors.forEach(baseCtor => {
		Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
			const param3: PropertyDescriptor | undefined = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
			if (!param3) {
				console.log("[ERROR] <applyMixins()> param3 is null!");
				return;
			}
			console.log("[TRACE] <applyMixins()> name: [%s], param3: [%s]", name, typeof param3.value);
			Object.defineProperty(derivedCtor.prototype, name, param3);
		});
	});
}

interface MySomeObject extends Disposable, Activatable {
}

function init() {

	applyMixins(MySomeObject, [Disposable, Activatable]);
}

export function main() {

	console.log("[TRACE] <main()> ### start ###");

	init();

	let count = 0;

	for (;;) {
		let smartObj = new MySomeObject();
		setTimeout(() => smartObj.interact(), 3000);
	}

	console.log("[TRACE] <main()> --- end ---");
}

main();
