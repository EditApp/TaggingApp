//conversione en base 64
export const convertBase64=(file:any)=>{
  return new Promise((resolve, reject)=>{
    //Filereader objet permettant de lire le contenu des fichiers
    const fileReader = new FileReader()
    //lecture de contenu :
    fileReader.readAsDataURL(file)
    //console.log("fileReader", fileReader)
    //operation de lecture ok
    fileReader.onload = ()=>{
      resolve(fileReader.result)
    }
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}