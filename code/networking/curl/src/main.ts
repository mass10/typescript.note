import fetch from "node-fetch";

async function curl2(url: string): Promise<string> {
	const response = await fetch(url);
	return await response.text();
}

async function main(): Promise<void> {
	const response = await curl2("http://www.matsunoyama.com");
	console.log(response);
}

main();
