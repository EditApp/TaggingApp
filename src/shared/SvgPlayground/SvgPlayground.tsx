import React, { FC, ReactNode, useState, useEffect , useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'
import { colors } from '../../appSettings/stylesSettings'
import {Box, BoxStyled, Input, InputStyled} from '../'


interface SvgPlaygroundStyles {}

export const SvgPlaygroundStyled = styled.div<SvgPlaygroundStyles>`
    border: 2px solid black;
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
      bottom: 0px;
    }
`

const SvgStyled = styled.svg<SvgPlaygroundStyles>`
  position: relative;
  z-index: 2;
  cursor: crosshair;
  width: 100%;
  height: 350px;
  
`

const RectStyled = styled.g<SvgPlaygroundStyles>`
 

  
`


interface ISvgPlayground {
  children: ReactNode
  className?: string
}

interface IRect {
  id: string
  rectX? :string
  rectY? : string
  width? : any
  height? : any
  fill? : string
  stroke? : string
  strokeWidth?: number
  textX? :any
  textY? :any
  textLabel?:string
}

const ComputeRect: FC<IRect> = ({ 
  id,
  rectX,
  rectY,
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  textX,
  textY,
  textLabel

 }) => {

  const rectRef = useRef(null);
   //todo perf
  //console.log("rectRef", rectRef?.current)
  return <RectStyled id={id}>

    <rect ref={rectRef} 
        x={rectX} y={rectY} 
        width={width} 
        height={height} fill={fill} 
        stroke={stroke} 
        strokeOpacity={'70%'}
        strokeWidth={strokeWidth} 
      />
      <text 
        x={rectX - 5} y={rectY - 5} 
        fontFamily="Verdana" 
        fontSize="0,9rem" 
        fill={colors.blue}
       >{textLabel}
      </text>
  </RectStyled>
}

const SvgPlayground: FC<ISvgPlayground> = ({ children,className }) => {
  const svgRef = useRef(null);
  //create rectangle set (tagData)
  const [tagData, setTagData] = useState([{}])
  const svg = svgRef
  //state
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
  svg?.current?.onmousedown = ({x, y}) => {
  console.log("onmousedown")
  // console.log("x", x)
  // console.log("y", y)
    setLastMousex(x)
    setLastMousey(y)
  // console.log("lastMousex", lastMousex)
  // console.log("lastMousey", lastMousey)
    setMouseDown(true)
      
  }

  //Mouseup
  svg?.current?.onmouseup = () => {
      console.log("onmouseup")
    setMouseDown(false)
  }
  //Mousemove
  //TODO add types to arguments
  svg?.current?.onmousemove = ({x,y}) => {
    if (mouseDown) {
      setMousex(parseInt(x))
      setMousey(parseInt(y))
        console.log("onmousemove")
      setRectWidth(Math.abs(mousex - lastMousex))
      setRectHeight(Math.abs(mousex - lastMousex))

    }
  };

  const tagText=(e:any)=>{
    setRectText(e.target.value)
  })
  const changeHeight=(e:any)=>{
    setRectHeight(`${e.target.value}px`)
  })
  const changeWidth=(e:any)=>{
    setRectWidth(`${e.target.value}px`)
  })
  const setTagObjects=()=>{
      console.log('set Object')
      const newTagElement = {
        id: uuidv4(),
        rectX : `${lastMousex}`,
        rectY : `${lastMousey}`,
        width : `${rectWidth}`,
        height : `${rectHeight}`,
        fill : "none",
        stroke : `${colors.gray}`,
        strokeWidth: 8,
        textLabel : rectText
      }
    setTags([...tags, newTagElement])
    setRectText("")
  }), 


  return <SvgPlaygroundStyled 
    className={`SvgPlayground ${className}`}
  >
    <Box>
      <Input type="text" position="relative"  onChange={tagText} />
      <Input type="number" position="relative"  onChange={changeHeight} />
      <Input type="number" position="relative"  onChange={changeWidth} />
      <Input type="submit" position="relative"  onClick={setTagObjects} />
    </Box>
    <SvgStyled ref={svgRef} id="svg" >
        <ComputeRect 
          rectX={`${lastMousex}`}
          rectY={`${lastMousey}`}
          width={`${rectWidth}`} height={`${rectHeight}`}
          fill="none"
          stroke={`${colors.gray}`}
          strokeWidth={8}
          textLabel={rectText}
        />
        {tags.map((item:any) => {
          const {id, rectX, rectY, width, height, fill, stroke, strokeWidth, textLabel} = item
          return <ComputeRect 
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
}


export default SvgPlayground


//objectreact
    //rect.setAttributeNS(null, 'x', lastMousex);
    //rect.setAttributeNS(null, 'y', lastMousey);
    //rect.setAttributeNS(null, 'width', width);
    //rect.setAttributeNS(null, 'height', height);
    //rect.setAttributeNS(null, 'fill', "none");
    //rect.setAttributeNS(null, 'stroke', "black");
    //rect.setAttributeNS(null, 'stroke-width', 5);