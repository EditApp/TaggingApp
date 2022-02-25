import React, {useState, useEffect} from "react"
import {Box, Upload, Image,Input, Canvas, SvgPlayground} from './shared'
import AppLayout from './ClientApp/AppLayout/AppLayout'
import { convertBase64 } from './helpers/convertBase64'
import { saveDataToJson } from './helpers/saveDataToJson'

export function App() {
  const [baseImg, setBaseImg] = useState(null)
  const [jsonFormat, setJsonFormat] = useState(null)
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setJsonFormat({})
    console.log("reload")
  }, [baseImg]);


   //uplad file
  const uploadImage = async (e : any)=>{
    //console.log("ev", e.target.files)
    const file = e.target.files[0]
    const base64 = await convertBase64(file)
    //console.log("base64", base64)

     
    //set format base 64 dans state du composant
    setBaseImg(base64)
  }
  const convertToJson = (base64format)=>{
    console.log("convertToJson jsonFormat state", jsonFormat)
    if(base64format) {
      setJsonFormat({
        date: date,
        base64: baseImg
      })
      saveDataToJson(jsonFormat)
    }
    return
  }

  return <AppLayout>
    <Box className="input" borderRadius="15px" minHeight="300px">
      {/*baseImg && <SvgPlayground></SvgPlayground>*/}
      {<SvgPlayground></SvgPlayground>}
      <Upload type="file" onChange={(e)=>{
        uploadImage(e)
      }}>
        <Image src={baseImg} height="350px"/>
      </Upload>
    </Box>
      <Input type="submit" value="Convertir" 
        onClick={()=>{
          convertToJson(baseImg)
        }}
      />
    <Box className="result" borderRadius="0px" minHeight="300px">
      <Image 
        src={jsonFormat?.base64} 
        height="350px">
      </Image>
    </Box>
  </AppLayout>

}