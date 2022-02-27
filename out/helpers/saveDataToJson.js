"use strict";
//const fs = require('fs')
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveDataToJson = function (data) {
    var finished = function (error) {
        if (error) {
            //console.log("error", error)
            return;
        }
    };
    var jsonData = JSON.stringify(data, null, 2);
    //TODO to save data = needs live server
    //fs.writeFile('image.json', jsonData, finished)
};
