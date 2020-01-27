type APIResponse = [number, string];

function Call1(request: string): APIResponse {
	return [200, request];
}

function Call2(request: string): [number, string] {
	return [404, request];
}

function main() {
	console.log(Call1("Hello"));
	console.log(Call2("Hello"));
}

main();
