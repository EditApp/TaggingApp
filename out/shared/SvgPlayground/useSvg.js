"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var uuid_1 = require("uuid");
var styled_components_1 = __importDefault(require("styled-components"));
var stylesSettings_1 = require("../../appSettings/stylesSettings");
var _1 = require("../");
exports.SvgPlaygroundStyled = styled_components_1.default.div < SvgPlaygroundStyles > "\n//border: 3px solid green;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 25px;\n    right: 0;\n    " + _1.InputStyled + " {\n      z-index: 3;\n    }\n    " + _1.BoxStyled + " {\n      position: absolute;\n      bottom: 25px;\n    }\n";
var SvgStyled = styled_components_1.default.svg < SvgPlaygroundStyles > "\n  //border: 3px solid red;\n  position: relative;\n  z-index: 2;\n  cursor: crosshair;\n  width: 100%;\n  height: 100%;\n  max-height: 450px;\n  \n";
function useSvg() {
    var svgRef = react_1.useRef(null);
    var svg = svgRef;
    console.log("svg", svg);
    //state
    var _a = react_1.useState(0), rectWidth = _a[0], setRectWidth = _a[1];
    var _b = react_1.useState(0), rectHeight = _b[0], setRectHeight = _b[1];
    var _c = react_1.useState(0), lastMousex = _c[0], setLastMousex = _c[1];
    var _d = react_1.useState(0), lastMousey = _d[0], setLastMousey = _d[1];
    var _e = react_1.useState(0), mousex = _e[0], setMousex = _e[1];
    var _f = react_1.useState(0), mousey = _f[0], setMousey = _f[1];
    var _g = react_1.useState(false), mouseDown = _g[0], setMouseDown = _g[1];
    var _h = react_1.useState(""), rectText = _h[0], setRectText = _h[1];
    var _j = react_1.useState([{}]), tags = _j[0], setTags = _j[1];
    //Mousedown
    svg ? .current ? .onmousedown = function (_a) {
        var x = _a.x, y = _a.y;
        console.log("onmousedown");
        console.log("x", x);
        // console.log("y", y)
        setLastMousex(x);
        setLastMousey(y);
        // console.log("lastMousex", lastMousex)
        // console.log("lastMousey", lastMousey)
        setMouseDown(true);
    }
        :
        :
    ;
    //Mouseup
    svg ? .current ? .onmouseup = function () {
        console.log("onmouseup");
        setMouseDown(false);
    }
        :
        :
    ;
    //Mousemove
    //TODO add types to arguments
    svg ? .current ? .onmousemove = function (_a) {
        var x = _a.x, y = _a.y;
        if (mouseDown) {
            setMousex(parseInt(x));
            setMousey(parseInt(y));
            console.log("onmousemove");
            setRectWidth(Math.abs(mousex - lastMousex));
            setRectHeight(Math.abs(mousex - lastMousex));
        }
    } :  : ;
    var tagText = function (e) {
        setRectText(e.target.value);
    };
    var changeHeight = function (e) {
        setRectHeight(e.target.value + "px");
    };
    var changeWidth = function (e) {
        setRectWidth(e.target.value + "px");
    };
    var setTagObjects = function () {
        console.log('set Object');
        var newTagElement = {
            id: uuid_1.v4(),
            rectX: "" + lastMousex,
            rectY: "" + lastMousey,
            width: "" + rectWidth,
            height: "" + rectHeight,
            fill: "none",
            stroke: "" + stylesSettings_1.colors.gray,
            strokeWidth: 8,
            textLabel: rectText
        };
        setTags(tags.concat([newTagElement]));
        //console.log("tags", tags)
        setRectText("");
    };
    return {
        tags: tags,
        svgPlayground: (react_1.default.createElement(exports.SvgPlaygroundStyled, { className: "SvgPlayground" },
            react_1.default.createElement(_1.Box, null,
                react_1.default.createElement(_1.Fieldset, { legend: "Ajoutez un tag" },
                    react_1.default.createElement(_1.Input, { label: "Ajoutez un titre", type: "text", position: "relative", onChange: tagText }),
                    react_1.default.createElement(_1.Input, { label: "Changez la hauteur", type: "number", position: "relative", onChange: changeHeight }),
                    react_1.default.createElement(_1.Input, { label: "Changez la largeur", type: "number", position: "relative", onChange: changeWidth }),
                    react_1.default.createElement(_1.Input, { type: "submit", value: "OK", position: "relative", onClick: setTagObjects }))),
            react_1.default.createElement(SvgStyled, { ref: svgRef, id: "svg" },
                react_1.default.createElement(_1.ComputeRect, { rectX: "" + lastMousex, rectY: "" + lastMousey, width: "" + rectWidth, height: "" + rectHeight, fill: "none", stroke: "" + stylesSettings_1.colors.gray, strokeWidth: 8, textLabel: rectText }),
                tags.map(function (item) {
                    var id = item.id, rectX = item.rectX, rectY = item.rectY, width = item.width, height = item.height, fill = item.fill, stroke = item.stroke, strokeWidth = item.strokeWidth, textLabel = item.textLabel;
                    return react_1.default.createElement(_1.ComputeRect, { key: id, rectX: rectX, rectY: rectY, width: width, height: height, fill: fill, stroke: stroke, strokeWidth: strokeWidth, textLabel: textLabel });
                }))))
    };
}
exports.default = useSvg;
//objectreact
//rect.setAttributeNS(null, 'x', lastMousex);
//rect.setAttributeNS(null, 'y', lastMousey);
//rect.setAttributeNS(null, 'width', width);
//rect.setAttributeNS(null, 'height', height);
//rect.setAttributeNS(null, 'fill', "none");
//rect.setAttributeNS(null, 'stroke', "black");
//rect.setAttributeNS(null, 'stroke-width', 5);
