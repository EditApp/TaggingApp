const fs = require('fs')

export const saveDataToJson = (data: any) => {
  const finished = (error: any) => {
    if(error){
      return 
    }
  }
  const jsonData = JSON.stringify(data, null, 2)
  //TODO needs node and server ()
  //fs.writeFile('image.json', jsonData, finished)
}