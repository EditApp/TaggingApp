import React, { FC, ReactNode, useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'
import { colors } from '../../appSettings/stylesSettings'
import { Box, BoxStyled, Input, InputStyled, ComputeRect, Fieldset } from '../'

interface SvgPlaygroundStyles { }

export const SvgPlaygroundStyled = styled.div<SvgPlaygroundStyles>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 25px;
  right: 0;
  ${InputStyled} {
    z-index: 3;
  }
  ${BoxStyled} {
    position: absolute;
    bottom: 25px;
  }
`

const SvgStyled = styled.svg<SvgPlaygroundStyles>`
  position: relative;
  z-index: 2;
  cursor: crosshair;
  width: 100%;
  height: 100%;
  max-height: 450px;
`

interface ISvgPlayground {
}

// ca deviens un hook
function useSvg() {
  const svgRef = useRef(null);
  const svg = svgRef
  //console.log("svg", svg)
  let [rectWidth, setRectWidth] = useState(0)
  let [rectHeight, setRectHeight] = useState(0)
  let [lastMousex, setLastMousex] = useState(0)
  let [lastMousey, setLastMousey] = useState(0)
  let [mousex, setMousex] = useState(0)
  let [mousey, setMousey] = useState(0)
  let [mouseDown, setMouseDown] = useState(false)
  let [rectText, setRectText] = useState("")
  const [tags, setTags] = useState([{}])

  //Mousedown
  svg?.current?.onmousedown = ({ x, y }) => {
    //console.log("onmousedown")
    //console.log("x", x)
    //console.log("y", y)
    setLastMousex(x)
    setLastMousey(y)
    //console.log("lastMousex", lastMousex)
    //console.log("lastMousey", lastMousey)
    setMouseDown(true)

  }

  //Mouseup
  svg?.current?.onmouseup = () => {
    //console.log("onmouseup")
    setMouseDown(false)
  }
  //Mousemove
  svg?.current?.onmousemove = ({ x, y }) => {
    if (mouseDown) {
      setMousex(parseInt(x))
      setMousey(parseInt(y))
      //console.log("onmousemove")
      setRectWidth(Math.abs(mousex - lastMousex))
      setRectHeight(Math.abs(mousex - lastMousex))
    }
  };

  const tagText = (e: any) => {
    setRectText(e.target.value)
  })
  const changeHeight = (e: any) => {
    setRectHeight(`${e.target.value}px`)
  })
  const changeWidth = (e: any) => {
    setRectWidth(`${e.target.value}px`)
  })
  
  const setTagObjects = () => {
    //console.log('set object')
    const newTagElement = {
      id: uuidv4(),
      rectX: `${lastMousex}`,
      rectY: `${lastMousey}`,
      width: `${rectWidth}`,
      height: `${rectHeight}`,
      fill: "none",
      stroke: `${colors.gray}`,
      strokeWidth: 8,
      textLabel: rectText
    }
    setTags([...tags, newTagElement])
    //console.log("tags", tags)
    setRectText("")
  })


  return {
    tags,
    svgPlayground: (
      <SvgPlaygroundStyled className={`SvgPlayground`}>
        <Box>
          <Fieldset legend="Ajoutez un tag">
            <Input label="Ajoutez un titre" type="text" position="relative" onChange={tagText} />
            <Input label="Changez la hauteur" type="number" position="relative" onChange={changeHeight} />
            <Input label="Changez la largeur" type="number" position="relative" onChange={changeWidth} />
            <Input type="submit" value="OK" position="relative" onClick={setTagObjects} />
          </Fieldset>
        </Box>
        <SvgStyled ref={svgRef} id="svg" >
          <ComputeRect
            id={uuidv4()}
            rectX={`${lastMousex}`}
            rectY={`${lastMousey}`}
            width={`${rectWidth}`} height={`${rectHeight}`}
            fill="none"
            stroke={`${colors.gray}`}
            strokeWidth={8}
            textLabel={rectText}
          />
          {tags.map((item: any) => {
            const { id, rectX, rectY, width, height, fill, stroke, strokeWidth, textLabel } = item
            return <ComputeRect
              id={uuidv4()}
              key={id}
              rectX={rectX}
              rectY={rectY}
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
    )
  }
}


export default useSvg
