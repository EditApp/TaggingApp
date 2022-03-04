//conversione en base 64
export const convertBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    //Filereader objet permettant de lire le contenu des fichiers
    const fileReader = new FileReader()
    //lecture de contenu :
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      const { result } = fileReader;
      resolve(result)
    }
    fileReader.onerror = (error: any) => {
      reject(error)
    }
  })
}

