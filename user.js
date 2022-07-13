export class User {
    fname;
    lname;
    age;
    email;
    address;
    state;
    pin;
    country;
    constructor(el) {
        this.fname = el.First_name;
        this.lname = el.Last_name;
        this.age = el.age;
        this.email = el.email;
        this.address = el.address;
        this.state = el.state;
        this.pin = el.pin;
        this.country = el.country;
    }
    render = () => {
        return `
        <div class="d-flex flex-column col-12 border my-2"> 
            <div>User : ` + this.fname + ` ` + this.lname + `</div>
            <div> he is `+ this.age + ` years age. and he lives in ` + this.country + `</div>
        </div>`
    }
}
