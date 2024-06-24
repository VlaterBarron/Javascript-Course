const userAuth = {
    Employee: "You are authorized to have access to Dietary Service",
    Enrolled_Member: "You are authorized to have access fo facilitate 'Ditary Services' and one-on-one interaction with a dietician ",
    Subscriber: "You are authorized to have partial access to facilitate 'Dietary Services' only",
    Non_suscriber: "You need to enroll or at least subscribe to avail this facility"
}

class User {
    constructor(userType) {
        this.userType = userType
    }
}

const U1 = new User("Employee");
const U2 = new User("Enrolled_Member");
const U3 = new User("Subscriber");
const U4 = new User("Non_suscriber");
const U5 = new User("");

const validateUser = (userType) => {
    const validate_message = userAuth[userType] ? userAuth[userType] : "Not valid user";
    console.log(validate_message);
}

validateUser(U1.userType);
validateUser(U2.userType);
validateUser(U3.userType);
validateUser(U4.userType);
validateUser(U5.userType);