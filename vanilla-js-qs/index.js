/**
Write a function that takes two numbers and returns
the sum of those numbers
*/
function add(a, b) {
	return a + b;
}

console.log('add', add(2, 3)); // Expects 5

/**
Write a function that takes any number of arguments
of type number and returns the sum of all the arguments
*/
function sum(...args) {
	let res = args.reduce((sum, item) => sum + item, 0);
	return res;
}

console.log('sum', sum(2, 3, 4, 5)); // Expects 14

/**
Write a function that takes two strings, A and B,
and returns whether B is in A in a case-insensitive way
*/
function stringIncludes(sen, word) {
	// console.log(sen.toLowerCase().includes('van'));
	return sen.toLowerCase().includes(word.toLowerCase());
}

console.log(
	'stringIncludes',
	stringIncludes('I drove to New York in a van with my friend', 'new')
); // Expects true

/**
Write a function that takes an array of objects, and returns an array
of the objects' "name" property, only if that property exists
*/
function getNames(array) {
	const res = array
		.filter((obj) => Object.hasOwn(obj, 'name'))
		.map((obj) => obj.name);

	// const res = tempArray.map((el) => el.name);
	return res;
	// if (Object.hasOwn(array[1], 'name')) {
	// 	return array[1].name;
	// }
	// console.log(Object.hasOwn(array[1], 'name'));
}

console.log(
	'getNames',
	getNames([
		{ a: 1 },
		{ name: 'Jane' },
		{},
		{ name: 'Mark' },
		{ name: 'Sophia' },
		{ b: 2 },
	])
); // Expects ['Jane', 'Mark', 'Sophia']

/**
Write a function that takes an array of numbers and returns the
index of the largest number
*/
function getLargestNumberIndex(array) {
	// const lasgestNum = array.toSorted().at(-1); wrong as I changed the order

	const largestNum = array.reduce(
		(largest, currentVal) => (largest > currentVal ? largest : currentVal),
		0
	);
	return array.indexOf(largestNum);
}

console.log('getLargestNumberIndex', getLargestNumberIndex([7, 1, 4, 12, 9])); // Expects 3

/**
Write a function that returns a promise that resolves
after n number of milliseconds
*/
function delay(n) {
	return new Promise((resolve) =>
		// setTimeout(() => {
		// 	resolve();
		// }, n)
		setTimeout(resolve, n)
	);
}

(async () => {
	console.time('Testing delay');
	await delay(1000);
	console.timeEnd('Testing delay');
})();
