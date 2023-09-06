let userData = {
    firstName: "Ivan",
    sayHi() {
        let arrow = () => {
            console.log(this.firstName);
        };
        arrow();
    },
};

// userData.sayHi();

let userData1 = {
    firstName: "Ivan",
    sayHi() {
        function nested() {
            console.log(this.firstName);
        };
        nested();
    },
};

// userData1.sayHi();


