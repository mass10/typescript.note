namespace BatchFramework {

	export abstract class AbstractTask {

		private readonly _name: string;

		public constructor(name: string) {
			this._name = name;
		}

		public getName(): string {
			return this._name;
		}

		protected abstract execute(): void;

		public readonly run = (): void => {
			console.log("$$$ RUN %s $$$", this.getName());
			this.execute();
		}
	}
}

namespace UserBatch1 {

	export class Batch1 extends BatchFramework.AbstractTask {

		protected execute(): void {
			throw new Error("Method not implemented.");
		}

		/**
		 * getName() の override を防ぐことはできない。
		 */
		public getName(): string {
			return "嘘の名前";
		}

		public run = (): void => {

		}
	}
}

function main() {

	console.log("### start ###");

	const batch = new UserBatch1.Batch1("バッチ(1)");
}

main();
