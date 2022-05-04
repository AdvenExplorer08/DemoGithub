class User{
    static count = 0;
    constructor (username, email,password){
        this.username = username;
        this.email= email;
        this.password = password;
        User.count++;
        
    }

    NumberOfUsers(){
        console.log('Number of users is '+ User.count);
    }
    register(){
        console.log(this.username+' is now registered');

    }
}

const Shubham = new User ('Shubham',' shubh23@email.com','23445');
const Yash = new User ('Yash',' yash3323@email.com','2ggg3445');
const Parth = new User ('Parth',' Parth3323@email.com','gjgg3445');

 Shubham.register();
 Parth.NumberOfUsers();