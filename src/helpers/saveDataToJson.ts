//const fs = require('fs')

export const saveDataToJson = (data: any) => {
  const finished = (error) => {
    if(error){
      //console.log("error", error)
      return 
    }
  }
  const jsonData = JSON.stringify(data, null, 2)
  //TODO to save data = needs live server
  //fs.writeFile('image.json', jsonData, finished)
}