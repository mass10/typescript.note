import { Task0 } from './task/Task0';
import { Task1 } from './task/Task1';

function task0() {
	// タスクを実行
	const task = new Task0();
	task.run();
	// 終了ステータスを表示
	console.log(task.getStatus());
}

function task1() {
	// タスクを実行
	const task = new Task1();
	task.run();
	// 終了ステータスを表示
	console.log(task.getStatus());
}

function main() {
	// タスクを実行
	task0();
	// タスクを実行
	task1();
}

main();
