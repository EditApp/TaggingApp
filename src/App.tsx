import React, {useState, useEffect, createContext } from "react"
import styled from 'styled-components'

import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
// style
import GlobalStyle from './appSettings/globalStyle'
import ResetCss from './appSettings/resetCss'

import {Box, Upload, Image, Input, InputStyled, Canvas, SvgPlayground, SvgPlaygroundStyled, SvgTags, Fieldset, ComputeRect} from './shared'
import AppLayout from './ClientApp/AppLayout/AppLayout'
import { convertBase64 } from './helpers/convertBase64'
import { saveDataToJson } from './helpers/saveDataToJson'
import { colors } from './appSettings/stylesSettings'
import { shadows } from './appSettings/cssVariables'


//context for tags
import useSvg from './shared/SvgPlayground/useSvg'

const CenteredButton = styled.div`
  ${InputStyled} {
    display: block;
    width: 100%;
    max-width: 450px;
    margin: 10px auto;
  }
`
const SvgStyled = styled.svg<SvgPlaygroundStyles>`
  //border: 3px solid red;
  position: relative;
  z-index: 2;
  cursor: crosshair;
  width: 100%;
  height: 100%;
  max-height: 450px;
  
`

export function App() {
  const [baseImg, setBaseImg] = useState(null)
  const [jsonFormat, setJsonFormat] = useState(null)
  const [date, setDate] = useState(new Date())
  const {svgPlayground, tags} = useSvg()


  useEffect(() => {
    setJsonFormat({})
    console.log("reload")
  }, [baseImg]);

   //uplad file
  const uploadImage = async (e : any)=>{
    //console.log("ev", e.target.files)
    const file = e.target.files[0]
    const base64 = await convertBase64(file)
    console.log("base64", base64)

     
    //set format base 64 dans state du composant
    setBaseImg(base64)
  }
  const convertToJson = (base64format)=>{
    const tagsData = tags.map(item => {
      return {
          id: item.id,
          name: item.textLabel,
          xPos: item.rectX, 
          yPos: item.rectY, 
          width: item.width, 
          height: item.height, 
          fill: item.fill, 
          stroke: item.stroke, 
          strWidth: item.strokeWidth
        }
    })
    if(base64format) {
      setJsonFormat({
        date: date,
        base64: baseImg,
        tags: tagsData
      })
          //console.log("convertToJson jsonFormat state", jsonFormat)

      saveDataToJson(jsonFormat)
    }
    return
  }

  

  return   <ThemeProvider theme={{ mode: 'dark' }}>
      <ResetCss />
      <GlobalStyle />
      <Router>      
        <AppLayout>
          <Box 
            className="input" 
            width="100%"
            margin="0 auto"
            borderRadius="15px" 
            minHeight="300px"
          >

            {baseImg && svgPlayground}
            
            <Box 
              width="100%"
              maxWidth="600px"
              bgColor={colors.white}
              margin="20px auto"
              borderRadius="10px" 
              injectedStyles={shadows.shadowBig}
              minHeight="450px">
              <Upload label="Téléchargez le fichier" type="file" onChange={(e)=>{
                uploadImage(e)
              }}>
                {baseImg && <Image withBorder src={baseImg} opacity={baseImg ? "1" : "0"}/>}
              </Upload>
            </Box>
          </Box>

          <CenteredButton>
            <Input display="block" type="submit" value="Convertir" 
              onClick={()=>{
                convertToJson(baseImg)
              }}
            />
          </CenteredButton>
           
          {jsonFormat &&    <Box 
            className="input" 
            width="100%"
            margin="0 auto"
            borderRadius="15px" 
            minHeight="300px"
          >
         <Box 
              width="100%"
              margin="20px auto"
              minHeight="450px">

            {console.log("TAGS:", {...{tags}})}
            {console.log("JSON FOSM", jsonFormat?.tags)}
            <SvgPlaygroundStyled>
              <SvgStyled>
                {jsonFormat?.tags?.map((item:any) => {
                  console.log("ITEM", item)
                  const {id, xPos, yPos, width, height, fill, stroke, strokeWidth, textLabel} = item
                  return <ComputeRect 
                    key={id}
                    rectX={xPos}
                    rectY={yPos}
                    width={width} 
                    height={height}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    textLabel={textLabel}
                  />
                })}
              </SvgStyled>
            </SvgPlaygroundStyled>
            <Image 
              withBorder
              src={jsonFormat?.base64} 
              opacity={baseImg ? "1" : "0"}
              maxWidth="520px"
              >
            </Image>
          </Box>
          </Box>
}

        </AppLayout>
      </Router>
    </ThemeProvider>

}