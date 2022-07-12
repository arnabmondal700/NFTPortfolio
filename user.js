export class User {
    fname;
    lname;
    age;
    email;
    address;
    state;
    pin;
    country;
    constructor(fname, lname, age, email, address, state, pin, country) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.email = email;
        this.address = address;
        this.state = state;
        this.pin = pin;
        this.country = country;
    }
    render = () => {
        return `
        <div class="d-flex flex-column w-100 border m-2"> 
            <span>User : ` + this.fname + ` ` + this.lname + `</span>
            <span> he is `+ this.age + ` years age. and he lives in ` + this.country + `</span>
        </div>`
    }
}
