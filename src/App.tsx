import React, { useState, useEffect, createContext } from "react"
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
// style
import GlobalStyle from './appSettings/globalStyle'
import ResetCss from './appSettings/resetCss'

import { Box, Upload, Image, Input, InputStyled, SvgPlaygroundStyled, Fieldset, ComputeRect } from './shared'
import AppLayout from './ClientApp/AppLayout/AppLayout'
import { convertBase64 } from './helpers/convertBase64'
import {
  downloadObjectToJSONFile,
  convertJsonFileToObjectLiteral
} from './helpers/manupulateDataJson'
import { colors } from './appSettings/stylesSettings'
import { shadows } from './appSettings/cssVariables'

import useSvg from './shared/SvgPlayground/useSvg'

const CenteredButton = styled.div`
  ${InputStyled} {
    display: block;
    width: 100%;
    max-width: 450px;
    margin: 10px auto;
  }
`
const SvgStyled = styled.svg`
  position: relative;
  z-index: 2;
  cursor: crosshair;
  width: 100%;
  height: 100%;
  max-height: 450px;
`

interface ITagsData {
  id: string
  name: string
  xPos: string
  yPos: string
  width: string
  height: string
  fill: string
  stroke: string
  strWidth: string
}

interface IJsonFormat {
  date: Date
  base64: any
  tags: ITagsData[]

}


interface ITagItemData {
  id: string
  textLabel: string
  rectX: string
  rectY: string
  width: string
  height: string
  fill: string
  stroke: string
  strokeWidth: string
}



export function App() {
  const [baseImg, setBaseImg] = useState<string | undefined>()
  const [jsonFormat, setJsonFormat] = useState<IJsonFormat>()
  //localstorage
  const [storedJsonFormat, setStoredJsonFormat] = useState<IJsonFormat>()
  //from uploaded file Json format
  const [fileJsonFormat, setFileJsonFormat] = useState<IJsonFormat>()
  const [fromFileJsonFormat, setFromFileJsonFormat] = useState<IJsonFormat>()


  const [date, setDate] = useState(new Date())
  const { svgPlayground, tags } = useSvg()

  useEffect(() => {
    setJsonFormat({})
    //console.log("reload")
    //console.log('baseImg', baseImg)

  }, [baseImg]);

  //uplad image file
  const uploadImage = async (e: any) => {
    const file = e.target.files[0]
    const base64: any = await convertBase64(file)
    //console.log('type : base64', typeof base64)
    setBaseImg(base64)
  }
  function convertToJson(base64format: string) {
    //console.log("base64format", base64format)
    //console.log('type : base64format', typeof base64format)
    const tagsData: ITagsData = tags.map((item: any) => {
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

    if (base64format) {
      setJsonFormat({
        date: date,
        base64: baseImg,
        tags: tagsData
      })
      //local storage
      localStorage.setItem('format', JSON.stringify(jsonFormat))
      setStoredJsonFormat(JSON.parse(localStorage.getItem('format')))
      // console.log("GET storedFormat", storedJsonFormat)
    }
    return
  }

  //uplad json file
  const uploadJsonFile = async (e: any) => {
    const file = e.target.files[0]
   // console.log(" e.target.files", e.target.files)
    //console.log(" file", file)
    const result: any = await convertJsonFileToObjectLiteral(file)
    //console.log(" result", result)
  }


  return <ThemeProvider theme={{ mode: 'dark' }}>
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
            <Upload minHeight="570px" label="Téléchargez le fichier" type="file" onChange={(e) => {
              uploadImage(e)
            }}>
              {baseImg && <Image withBorder src={`${baseImg}`} opacity={baseImg ? "1" : "0"} />}
            </Upload>
          </Box>
        </Box>

        <CenteredButton>
          <Input display="block" type="button" value="Convertir avec localstorage"
            onClick={() => {
            //  console.log("clic")
            //  console.log("baseImg", baseImg)
              convertToJson(baseImg)
            }}
          />
        </CenteredButton>
        <CenteredButton>
          <Input display="block" type="button" value="Convertir avec file download"
            onClick={() => {
              ///console.log("JSON", storedJsonFormat)
              ///console.log("baseImg", baseImg)
              downloadObjectToJSONFile(storedJsonFormat, 'generatedFile')
            }}
          />
        </CenteredButton>

        <Box
          className="input"
          width="100%"
          margin="0 auto"
          borderRadius="15px"
        >
          <Box
            width="100%"
            maxWidth="600px"
            bgColor={colors.white}
            margin="20px auto"
            borderRadius="10px"
            injectedStyles={shadows.shadowBig}
          >
            <Upload label="Téléchargez le fichier" type="file" onChange={(e) => {
              const format =  uploadJsonFile(e)
              setFileJsonFormat(format)

              console.log("format", format)
              console.log("fileJsonFormat", fileJsonFormat)
            }}>
            </Upload>
          </Box>
        </Box>

        {storedJsonFormat && <Box
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
            {/* {console.log("JSON", storedJsonFormat)} */}
            <SvgPlaygroundStyled>
              <SvgStyled>
                {storedJsonFormat?.tags?.map((item: any) => {
                  const { id, xPos, yPos, width, height, fill, stroke, strokeWidth, textLabel } = item
                  return <>
                    <ComputeRect
                      id={uuidv4()}
                      key={id}
                      rectX={xPos}
                      rectY={yPos}
                      width={width}
                      height={height}
                      fill={fill}
                      stroke={stroke}
                      strokeWidth={strokeWidth}
                      textLabel={textLabel}
                    /></>
                })}
              </SvgStyled>
            </SvgPlaygroundStyled>
            <Image
              withBorder
              src={storedJsonFormat?.base64}
              opacity={baseImg ? "1" : "0"}
              maxWidth="520px"
            >
            </Image>
          </Box>
        </Box>}
      </AppLayout>
    </Router>
  </ThemeProvider>
}