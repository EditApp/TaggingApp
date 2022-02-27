"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//conversione en base 64
exports.convertBase64 = function (file) {
    return new Promise(function (resolve, reject) {
        //Filereader objet permettant de lire le contenu des fichiers
        var fileReader = new FileReader();
        //lecture de contenu :
        fileReader.readAsDataURL(file);
        //console.log("fileReader", fileReader)
        //operation de lecture ok
        fileReader.onload = function () {
            resolve(fileReader.result);
        };
        fileReader.onerror = function (error) {
            reject(error);
        };
    });
};
