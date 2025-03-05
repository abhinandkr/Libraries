// @ts-nocheck
const p = 1;
export default function Main() {
	var x = 7;
	let p = 13;
	a();

	console.log(x);
	function a() {
		var x = 9;
		var y = 10;
		console.log(x);

		function b() {
			console.log(x);
			console.log(p);
		}
		b();
	}
}
