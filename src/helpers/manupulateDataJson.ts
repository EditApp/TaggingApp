export const convertJsonFileToObjectLiteral = (file: any) => {
  return new Promise((resolve, reject) => {
    //Filereader objet permettant de lire le contenu des fichiers
    const fileReader = new FileReader();
    //lecture de contenu :
    fileReader.readAsDataURL(file);
    //console.log("fileReader", fileReader)
    //operation de lecture ok
    fileReader.onload = () => {
      const { result } = fileReader;
      const jsonString = atob(String(result).substring(29));
      const resultPromise = JSON.parse(jsonString);
      resolve(resultPromise);

    };
    fileReader.onerror = (error: any) => {
      reject(error);
    };
  });

};

export const downloadObjectToJSONFile = (
  objectToSave: any,
  fileName: string
) => {
  const objectToString: string = JSON.stringify(objectToSave);
  const URIEncodedData: string = encodeURIComponent(objectToString);
  const data: string = `data:text/json;charset=utf-8,${URIEncodedData}`;
  //const data: string = ""

  let downloadLinkElement = document?.createElement("a");
  downloadLinkElement?.setAttribute("href", data);
  downloadLinkElement?.setAttribute("download", `${fileName}.json`);
  document?.body?.appendChild(downloadLinkElement);
  downloadLinkElement.click();
  downloadLinkElement.remove();
};