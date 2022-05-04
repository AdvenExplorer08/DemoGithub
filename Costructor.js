function Student (firstName, lastName , rollNumber, Sex, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNumber = rollNumber;
    this.Sex = Sex;
    this.dob = dob;
     this.getBirthYear = function(){
         return this.dob.getFullYear();
     }

     this.getFullName = function(){
        return `${s2.firstName} ${s2.lastName}`;
    }
}

function eligibility(age ){
 let message = (age> 18)? ("Go ahead"): (" Not allowed");
 return message;

}



const s1 = new Student( 'Shubham','Kumar', ' 01', ' Male',' 22-06-1997');
const s2 = new Student( 'Yash','Singh', ' 05', ' Male',' 02-08-1995');
 
console.log( eligibility(25));
console.log (`${s2.firstName} ${s2.lastName}`);