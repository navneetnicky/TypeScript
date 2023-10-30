let score: number | string = 33;

score = 44;
score = '55';

type User = {
	name: string;
	id: number;
};

type Admin = {
	username: string;
	id: number;
};

let navneet: User | Admin = {
	name: 'navneet',
	id: 10,
};

navneet = { username: 'nv', id: 111 };

// function getDbId ( id: number | string )
// {
//   console.log(`DB id is ${id}`)
// }

function getDbId(id: number | string) {
	//  id.toLowerCase()   // error

	if (typeof id === 'string') {
		id.toLocaleLowerCase();
	}
}

getDbId(3);
getDbId( '3' );


// Array

const data: number[] = [1, 2, 3];
const data2: string[] = ['1', '2', '3'];
const data3: string[] | number[] = ['1', '2', '3']; // it can either be all numbers or strings
const data4: ( string | number )[] = [ '1', '2', 3 ];

let setAllotment: "aisle" | "middle" | "window"

setAllotment = "aisle"
// setAllotment = 'crew' error