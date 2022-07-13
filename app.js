import * as user from './user.js';
let request = new Request('./nftList.json');
let init = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};
let userData = [];
fetch(request, init).then(res => res.json()).then(async (data) => {
    Object.keys(data).forEach(el => {
        console.log(data[el]);
    });
    userData = [...data.person];
    let list = userData.map(el => {
        let user_ = new user.User(el);
        return user_.render();
    }).join("");
    document.getElementById("userList").innerHTML = list;
});

