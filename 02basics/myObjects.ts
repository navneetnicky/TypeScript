const User = {
	name: 'Navneet',
	email: 'navneet@gmail.com',
	isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: 'navneet', isPaid: true , email:"Nav@gmail"}); this is giving me arror bcz i am sending email
const values = { name: 'navneet', isPaid: true, email: 'Nav@gmail' };
createUser(values); //this not giving any error , its a bad behaviour of object in TS

function createCourse(): { name: string; price: number } {
	return { name: 'react', price: 999 };
}

// Type Aliases

// type User = {
//   name: string;
//   email: string;
//   isActive:boolean
// }

// function createUsers ( User: User ): User
// {
//   return {name:"", email:"", isActive:true}
// }
// createUsers( { name: "", email: "", isActive: true } )

type User = {
	readonly _id: string;
	name: string;
	email: string;
  isActive: boolean;
  credCardDeatils?: number
};

type cardNumber = {
  cardnumber: string
}

type cardDate = {
  cardDate : string
}

type cardDetails = cardNumber & cardDate & {   //combine types
  cvv: number
}

let myUser: User = {
  _id: "1234",
  name: 'navneet',
  email: 'n@gmail.com',
  isActive: true,
}

myUser.email = "np@gmail.com";
// myUser._id = 'ss'      // not allowed bcz of read only

export {};
