// const user: ( string | number )[] = [ 1, "nv" ];
let tUser: [string, number, boolean];

tUser = ['hc', 121, true];
// tUser = ["hc",true, 121] // error

let rgb: [number, number, number] = [255, 123, 112];

type User = [ number, string ];

const newUser: User = [ 112, "exmple@google.com" ];


//bad behaviour TS
newUser[ 1 ] = "Navneet"; 
