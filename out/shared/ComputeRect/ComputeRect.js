"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var stylesSettings_1 = require("../../appSettings/stylesSettings");
var RectStyled = styled_components_1.default.g < SvgPlaygroundStyles > "  \n";
var ComputeRect = function (_a) {
    var id = _a.id, rectX = _a.rectX, rectY = _a.rectY, width = _a.width, height = _a.height, fill = _a.fill, stroke = _a.stroke, strokeWidth = _a.strokeWidth, textX = _a.textX, textY = _a.textY, textLabel = _a.textLabel;
    //const rectRef = useRef(null);
    //todo perf
    //console.log("rectRef", rectRef?.current)
    return react_1.default.createElement(RectStyled, { id: id },
        react_1.default.createElement("rect", { 
            //ref={rectRef} 
            x: rectX, y: rectY, width: width, height: height, fill: fill, stroke: stroke, strokeOpacity: '70%', strokeWidth: strokeWidth }),
        react_1.default.createElement("text", { x: rectX - 5, y: rectY - 5, fontFamily: "Verdana", fontSize: "0,9rem", fill: stylesSettings_1.colors.blue }, textLabel));
};
exports.default = ComputeRect;
