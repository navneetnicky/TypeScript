"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'Navneet',
    email: 'navneet@gmail.com',
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser({ name: 'navneet', isPaid: true , email:"Nav@gmail"}); this is giving me arror bcz i am sending email
var values = { name: 'navneet', isPaid: true, email: 'Nav@gmail' };
createUser(values); //this not giving any error , its a bad behaviour of object in TS
function createCourse() {
    return { name: 'react', price: 999 };
}
var myUser = {
    _id: "1234",
    name: 'navneet',
    email: 'n@gmail.com',
    isActive: true,
};
myUser.email = "np@gmail.com";
