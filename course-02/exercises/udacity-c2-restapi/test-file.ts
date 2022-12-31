const bcrypt = require('bcrypt');

let plainTextPassword = 'SirCatFace';

async function getAndCompare() {
	const saltRounds = 10;
	const salt = await bcrypt.genSalt (saltRounds);
	const hash = await bcrypt.hash (plainTextPassword, salt);
	
	const compare = await bcrypt.compare (plainTextPassword, hash);

	if (compare) {
		console.log("Login successful")
	}
}

getAndCompare();