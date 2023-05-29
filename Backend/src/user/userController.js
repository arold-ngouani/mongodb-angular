// const res = require('express/lib/response');
// const req = require('express/lib/request');

var userService = require('./userService');


var getDataConntrollerfn = async (req, res) =>
{
    var employee = await userService.getDataFromDBService();
    res.send({"status": true, "data": employee});
}

var createUserControllerFn = async (req, res) =>
{
    // console.log(req.body);
    var status = await userService.createUserDBService(req.body);
    // console.log("********************");
    // console.log(status);
    // console.log("********************");

    if(status){
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}


var updateUserController = async (req, res) =>
{
    console.log(req.params.id);
    console.log(req.body);

    var result = await userService.updateUserDBService(req.params.id, req.body);

    if(result) {
        res.send({"status": true, "message": "User updated"});
    } else {
        res.send({"status": false, "message": "User updated Failed"});
    }
}


var deleteUserController = async (req, res) =>
{
    console.log(req.params.id)

    var result = await userService.removeUserDBService(req.params.id);

    if(result) {
        res.send({"status": true, "message": "User deleted"});
    } else {
        res.send({"status": false, "message": "User deleted Failed"});
    }

}

module.exports = { getDataConntrollerfn, createUserControllerFn, updateUserController, deleteUserController};