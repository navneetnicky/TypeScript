// class User {
// 	public email: string;
// 	name: string;
// 	private readonly city: string = 'Jodhpur'; // private allow only in same class
// 	constructor(email: string, name: string) {
// 		this.email = email;
// 		this.name = name;
// 	}
// }

class User {
	protected _courseCount = 1;
	private readonly city: string = 'Jodhpur'; // private allow only in same class
	constructor(
		public email: string,
		public name: string // private userId: string
	) {}

  private deleteToken ()
  {
    console.log("Token")
  }

	get getAppleEmail(): string {
		return `apple${this.email}`;
	}

	get courseCount(): number {
		return this._courseCount;
	}

	set courseCount(courseNum) {
		if (courseNum <= 1) {
			throw new Error('Course count should be more than 1');
		}

		this._courseCount = courseNum;
	}
}

class SubUser extends User
{
  isFamily: boolean = true
  changeCourseCount ()
  {
    this._courseCount = 4
  }
}

const hitesh = new User('n@.com', 'navneet');
// hitesh.city = "Pune" Not allowed
