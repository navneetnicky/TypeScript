function addTwo(num: number): number {
	//return only number
	return num + 2;

	// return "hello"
}

const getHello = (s: string): string => {
	// arrow function return
	return '';
};

function getUpper(val: string) {
	return val.toUpperCase();
}

function signupUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myvalue = addTwo(5);
getUpper('navneet');
signupUser('navneet', 'navnt@gmail.com', true);
loginUser('N', 'N@gmail.com');

// function getValue ( myVal: number )
// {
//   if ( myVal > 5 )
//   {
//     return true
//   }
//   return "200 OK"
// }

const heros = ['thor', 'spiderman', 'ironman'];

heros.map((hero) => {
	return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
	// void use for which function is return nothing
	console.log(errmsg);
}

function handleError(errmsg: string): never {
	//if we are use never its similar like void but its mainly use for the function throws an exception or terminates execution of the program

	throw new Error(errmsg);
}

export {};
