"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
exports.BoxStyled = styled_components_1.default.section < BoxStyles > "\n  border: 1px solid red;\n  min-width: 20px;\n  flex-grow: 2;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: " + function (props) { return props.padding; } + ";\n  margin: " + function (props) { return props.margin; } + ";\n  border-radius: " + function (props) { return props.borderRadius; } + ";\n  background-color: " + function (props) { return props.bgColor; } + ";\n  background-image: " + function (props) { return props.bgImage; } + ";\n  height: " + function (props) { return props.height; } + ";\n  width: " + function (props) { return props.width; } + ";\n  max-width: " + function (props) { return props.maxWidth; } + ";\n";
var Box = function (_a) {
    var children = _a.children, padding = _a.padding, margin = _a.margin, bgColor = _a.bgColor, bgImage = _a.bgImage, borderRadius = _a.borderRadius, height = _a.height, width = _a.width, maxWidth = _a.maxWidth, className = _a.className;
    return react_1.default.createElement(exports.BoxStyled, { padding: padding, margin: margin, bgColor: bgColor, bgImage: bgImage, borderRadius: borderRadius, height: height, width: width, maxWidth: maxWidth, className: "Box " + className }, children);
};
exports.default = Box;
