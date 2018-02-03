import axios from 'axios';

// Make a request for a user with a given ID
const getUsers = () => {
	return axios.get('api/users')
		.then(function (response) {
			console.log("response", response);
			return response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
}

const newUser = () => {
	const firstNames = [
	    'Fatima',
	    'Padma',
	    'Sofia',
	    'Miriam',
	    'Victoria',
	    'Jana',
	    'Sarah',
	    'Ananya',
	    'ZhangMin',
	    'Minh'
	];
	const lastNames = [
		'Li',
		'Zhang',
		'Chang',
		'Nguyen',
		'Garcia',
		'Gonzalez',
		'Hernandez',
		'Smith',
		'Smirnov',
		'Ahmed',
		'Khan',
		'Chatterji',
		'Reddy'
	];
	const randomWord = (array) => {
		const number = Math.floor(Math.random()*array.length);
		return array[number];
	}

	let fName = randomWord(firstNames);
	console.log(fName);
	return axios.post('api/users/new', {
			firstName: fName,
			lastName: randomWord(lastNames),
			email: fName.toLowerCase() + '@sample.com',
			createdAt : new Date(),
			updatedAt : new Date(),
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}

export {getUsers, newUser};
