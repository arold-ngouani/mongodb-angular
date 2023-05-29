var userModel = require('./userModel');

module.exports.getDataFromDBService = () => {
    return new Promise(function(resolve, reject) {
        userModel.find({})
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                reject(false);
            });
    });
};


module.exports.createUserDBService = (userDetails) => {
    return new Promise(function(resolve, reject) {
        var userModelData = new userModel();
        userModelData.name = userDetails.name;
        userModelData.adresse = userDetails.adresse;
        userModelData.phone = userDetails.phone;

        userModelData.save()
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                reject(false);
            });
    });
};


module.exports.updateUserDBService = (id, userDetails) => {
    console.log(userDetails);
    return new Promise(function(resolve, reject) {
        userModel.findByIdAndUpdate(id, userDetails)
            .then(() => {
                resolve(true);
            })
            .catch((error) => {
                reject(false);
            });
    });
};

module.exports.removeUserDBService = (id) => {
    return new Promise(function(resolve, reject) {
        userModel.findByIdAndDelete(id)
            .then(() => {
                resolve(true);
            })
            .catch((error) => {
                reject(false);
            });
    });
};


