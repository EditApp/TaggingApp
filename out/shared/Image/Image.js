"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var stylesSettings_1 = require("../../appSettings/stylesSettings");
var ImageBox = styled_components_1.default.div < ImageStyles > "\n  padding : 20px;\n  margin : 20px;\n";
exports.ImageStyled = styled_components_1.default.img < ImageStyles > "\n  border: " + function (props) { return props.withBorder ? "5px solid " + stylesSettings_1.colors.grayClear : '0px solid transparent'; } + " ;\n  margin: 20px auto;\n  display: block;\n  width: auto;\n  height: " + function (props) { return props.height ?  ? "auto" :  : ; } + ";\n  opacity: " + function (props) { return props.opacity; } + ";\n  max-width: 100%;\n  max-height: 400px;\n";
var Image = function (_a) {
    var children = _a.children, height = _a.height, opacity = _a.opacity, src = _a.src, withBorder = _a.withBorder, className = _a.className;
    return react_1.default.createElement(ImageBox, { className: "image " + className },
        react_1.default.createElement(exports.ImageStyled, { height: height, withBorder: withBorder, src: src, opacity: opacity }),
        children);
};
exports.default = Image;
