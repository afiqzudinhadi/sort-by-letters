import { input } from "@inquirer/prompts";

const answer = await input({
	message:
		"Enter an array of string numbers containing only one letter separated by commas: (e.g. 932c, 832u32, 2344b)",
});

const array = answer.split(",");

if (check_empty_array(array)) {
	console.log([]);
} else {
	if (check_only_one_letter(array)) console.log(sort_by_letter(array));
}

function check_empty_array(array) {
	if (array[0] === "") {
		return true;
	}
}

function check_only_one_letter(array) {
	return array.every((element) => {
		const letters = element.match(/[a-zA-Z]/g);

		if (letters.length !== 1) {
			return console.log("Each string must contain exactly one letter.");
		}

		return true;
	});
}

function sort_by_letter(array) {
	return array.sort((a, b) => {
		const lettersA = a.match(/[a-zA-Z]/g);
		const lettersB = b.match(/[a-zA-Z]/g);
		return lettersA[0].localeCompare(lettersB[0]);
	});
}
