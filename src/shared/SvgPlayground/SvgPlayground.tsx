import React, { FC, ReactNode, useState, useEffect , useRef} from 'react'
import styled from 'styled-components'
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
      border: 2px solid blue;
      position: absolute;
      bottom: 0px;
    }
  
`

const SvgStyled = styled.svg<SvgPlaygroundStyles>`
  border: 5px solid red;
  position: relative;
  z-index: 2;
 cursor: crosshair;
  
`

interface ISvgPlayground {
  children: ReactNode
  className?: string
}

interface IRect {
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
  rectX,
  rectY,
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  textX,
  textY,
  textLabel,

 }) => {

  const rectRef = useRef(null);
   //todo perf
  //console.log("rectRef", rectRef?.current)
  return <g>
    <rect ref={rectRef} 
        x={rectX} y={rectY} 
        width={width} 
        height={height} fill={fill} 
        stroke={stroke} 
        strokeWidth={strokeWidth} 
      />
      <text 
        x={rectX} y={rectY} 
        fontFamily="Verdana" 
        fontSize="0,9rem" 
        fill="blue">{textLabel}
      </text>
  </g>
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

  //Mousedown
  svg?.current?.onmousedown = ({x, y}) => {
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
    setMouseDown(false)
  }



  //Mousemove
  svg?.current?.onmousemove = ({
    x,
    y
  }) => {
    setMousex(parseInt(x))
    setMousey(parseInt(y))
    // console.log("mousedown", mouseDown)

    if (mouseDown) {

        setRectWidth(Math.abs(mousex - lastMousex))
      setRectHeight(Math.abs(mousex - lastMousex))

    /// console.log("x", x)
    ///console.log("y", y)
    ///  console.log("onmousemove width", rectWidth)
    ///   console.log("onmousemove height", rectHeight)
    }
  };

  //console.log('svg', svg)
  //console.log('childNodes', svg?.childNodes)

  const tagText=(e:any)=>{
    setRectText(e.target.value)
  })
  const changeHeight=(e:any)=>{
    setRectHeight(`${e.target.value}px`)
  })
  const changeWidth=(e:any)=>{
    setRectWidth(`${e.target.value}px`)
  })
  //fake
  const tagDataHardc = [
    {
      rectX : "120",
      rectY : "0",
      width : "100",
      height : "100",
      fill : "none",
      stroke :"black",
      strokeWidth: 5,
      textX : "120",
      textY : "20",
      textLabel: "toto"
    },
    {
      rectX : "150",
      rectY : "200",
      width : "100",
      height : "100",
        fill : "none",
      stroke :"black",
      strokeWidth: 5,
      textX : "150",
      textY : "220",
      textLabel: "toto"
    },

  ]



  return <SvgPlaygroundStyled 
    className={`SvgPlayground ${className}`}
  >
    <Box>
      <Input type="text" position="relative"  onChange={tagText} />
      <Input type="number" position="relative"  onChange={changeHeight} />
      <Input type="number" position="relative"  onChange={changeWidth} />
    </Box>
    <SvgStyled ref={svgRef} id="svg" width="800" height="300">
        <ComputeRect 
          rectX={`${lastMousex}`}
          rectY={`${lastMousey}`}
          width={`${rectWidth}`} height={`${rectHeight}`}
          fill="none"
          stroke="black"
          strokeWidth={5}
          textLabel={rectText}
        />
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