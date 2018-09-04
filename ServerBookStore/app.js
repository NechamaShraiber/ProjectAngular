const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// curl -v -X POST -H "Content-type: application/json" -d "{\"name\":\"test\", \"pass\":\"1234\" }" http://localhost:3500/api/user

app.get(`/api/users`, (req, res) => {
    let currentList = require("./users.json");
    res.send(currentList);
});

function validName(name) {
    return name.length >= 3 && name.length <= 15 && name.match(/[a-z]/i);
}

function validPassword(password) {
    return password.length <= 5 && password.length >= 10;
}

function isValidLoginner(user) {
    if (!(validName(user["UserName"]) && validPassword(user["password"])))
        return false;
    return true;
}

function isValidRegister(user) {
    if (!(validName(user["FirstName"]) && validName(user["LastName"]) && validName(user["UserName"]) && validPassword(user["password"])))
        return false;
    return true;
}
app.post("/api/login", (req, res) => {
    console.log(req.body);
    if (isValidLoginner(req.body)) {
        let currentList = require("./users.json");
        let user = currentList.find(user => { req.body["UserName"] == user.UserName && req.body["password"] == user.password })
        if (user != null)
            res.status(201).send(user);
        else
            res.status(201).send(null);
    }
    else res.status(400).send();
})
app.post("/api/register", (req, res) => {
    console.log(req.body);
    if (isValidRegister(req.body)) {
        let currentList = require("./users.json");
        currentList.push(req.body);
        fs.writeFileSync("users.json", JSON.stringify(currentList));
        console.log("good!!!");
        res.status(201).send(JSON.stringify(currentList));
    }
    else{
        console.log("bad...");
        res.status(400);
    }
});

const port = process.env.PORT || 3500;
app.listen(port, () => { console.log(`OK`); });
///////////////////////////////////////////////////////
// app.post("/api/login", (req, res) => {
//     console.log('aaa');
//     let userName = req.body.userName;
//     let password = req.body.password;
//     console.log(userName);
//     console.log(password);
//     if (isValidLogin(userName, password)) {
//         console.log('valid');
//         let currentList = require("./user.json");
//         console.log(currentList);
//         let user = currentList.find(user =>
//             user.userName.toLowerCase() == userName.toLowerCase() &&
//             user.password.toLowerCase() == password.toLowerCase());
//         if (user != null)
//             res.status(201).send(user);
//         else
//             res.status(201).send(null);
//     }
//     else {
//         console.log("bad");
//         res.status(400);
//     }

// })