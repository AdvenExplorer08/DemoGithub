class Student{
    constructor(firstName, lastName , rollNumber, Sex, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNumber = rollNumber;
    this.Sex = Sex;
    this.dob = dob;
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${s2.firstName} ${s2.lastName}`;
    }
}
const s1 = new Student( 'Shubham','Kumar', ' 01', ' Male',' 22-06-1997');
const s2 = new Student( 'Yash','Singh', ' 05', ' Male',' 02-08-1995');

console.log(s1.firstName);