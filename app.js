import * as user from './user.js';
let request = new Request('./example.json');
let init = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};
let userData = [];
fetch(request, init).then(res => res.json()).then(async(data) => {
    userData = [...data.person];
    let list = userData.map(el => {
        let user_ = new user.User(el.First_name, el.Last_name, el.age, "", el.address, "", "", el.country);
        return user_.render();
    }).join();
    document.getElementById("userList").innerHTML = list;
});

