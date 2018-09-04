const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// curl -v -X POST -H "Content-type: application/json" -d "{\"UserName\":\"YHAIZLER\",\"password\":\"0548541419\" }" http://localhost:3500/api/login
// curl -v -X POST -H "Content-type: application/json" -d "{\"UserName\":\"fgf\",\"password\":\"0548541419\" }" http://localhost:3500/api/login
// curl -v -X POST -H "Content-type: application/json" -d "{\"FirstName\":\"Yehudit\",\"LastName\":\"Haizler\",\"UserName\":\"YHAIZLER\",\"password\":\"0548541419\" }" http://localhost:3500/api/register
// curl -v -X POST -H "Content-type: application/json" -d "{\"FirstName\":\"Yehu3dit\",\"LastName\":\"Haizler\",\"UserName\":\"YHAIZLER\",\"password\":\"0548541419\" }" http://localhost:3500/api/register
// curl -v -X POST -H "Content-type: application/json" -d "{\"FirstName\":\"Yehudit\",\"LastName\":\"Haizler\",\"UserName\":\"YHAIZLER\",\"password\":\"12\" }" http://localhost:3500/api/register

app.get(`/api/users`, (req, res) => {
    let currentList = require("./users.json");
    res.send(currentList);
});

function validName(name) {
    console.log(name.length);
    return name.length >= 3 && name.length <= 15 && name.match(/^[ a-zA-Z]*$/);
}

function validPassword(password) {
    console.log(password.length);
    return password.length >= 5 && password.length <= 10;
}

function isValidLoginner(user) {
    if (!(validName(user["UserName"]) && validPassword(user["Password"])))
        return false;
    return true;
}

function isValidRegister(user) {
    if (!(validName(user["FirstName"]) && validName(user["LastName"]) && validName(user["UserName"]) && validPassword(user["Password"])))
        return false;
    return true;
}
app.post("/api/login", (req, res) => {
    console.log(req.body);
    if (isValidLoginner(req.body)) {
        let currentList = require("./users.json");
        let user = currentList.find(user => {return req.body["UserName"] == user.UserName && req.body["Password"] == user.Password})
        console.log(user);
        if (user != null) {
            console.log("added" + JSON.stringify(user));
            res.status(201).send(JSON.stringify(user));
        }
        else {
            console.log("not added");
            res.status(400).send();
        }
    }
    else res.status(400).send();
})
app.post("/api/register", (req, res) => {
    console.log("post");
    console.log(req.body);
    if (isValidRegister(req.body)) {
        let currentList = require("./users.json");
        currentList.push(req.body);
        fs.writeFileSync("users.json", JSON.stringify(currentList));
        console.log("good!!!");
        res.status(201).send(JSON.stringify(currentList));
    }
    else {
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