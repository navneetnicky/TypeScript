const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
	return val;
}

function identityTwo(val: any): any {
	return val;
}

function identityThree<Type>(val: Type): Type {
	return val;
}

//Sortcut of this

function identityFour<T>(val: T): T {
	return val;
}

identityThree('Navneet');

// exmple

interface Bootle {
	brand: string;
	type: number;
}

// identityFour<Bootle> ({})

function getSearchProduct<T>(products: T[]): T {
	// do some database operation
	const myIndex = 3;
	return products[3];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
	// do some database operation
	const myIndex = 4;
	return products[myIndex];
};

interface Database {
	connection: string;
	userName: string;
	password: string;
}

function anotherFun<T, U extends Database>(val: T, valone: U): object {
	return {
		valone,
		val,
	};
}

// anotherFun("3", {})

interface Quiz {
	name: string;
	type: string;
}

interface Course {
	name: string;
	author: string;
	suject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  
  addToCart ( product: T )
  {
    this.cart.push(product)
  }
}
