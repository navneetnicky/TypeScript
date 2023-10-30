interface User {
	readonly dbId: number;
	email: string;
	userId: number;
	googleId?: string;
	// startTrail: () => string;
	startTrail(): string;
	getCoupon(couponname: string,value: number): number;
}

interface User
{
  githubToken : string
}

interface Admin extends User
{
  role : "admin" | "ta" | "learner"
}

const hitesh: Admin = {
  role:'admin',
  dbId: 111,
  githubToken:'github',
	email: 'n@.com',
	userId: 111,
	startTrail: () => {
		return 'trail';
	},
	getCoupon: (couponname: '10',myvalue:10) => {
		return 10;
	},
};
