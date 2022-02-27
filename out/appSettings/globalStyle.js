"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var stylesSettings_1 = require("./stylesSettings");
var cssVariables_1 = require("./cssVariables");
var mountains_jpeg_1 = __importDefault(require("../assets/mountains.jpeg"));
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  * {\n    box-sizing: border-box;\n  }\n  \n  fieldset {\n    max-width: 100%;//todo check everywhere;\n  }\n  body {\n    overflow-y: scroll;\n    font-size: 16px;\n    font-family: \"Arial\", sans-serif;\n    -webkit-font-smoothing: (subpixel-antialiased);\n    font-smoothing: (subpixel-antialiased);\n    font-size: 1.1rem;\n    line-height: 1.3rem;\n    color: ", ";\n    background:", ";\n\n    &::before {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      background-image: url(", ");\n      background-size: cover;\n      opacity: .1;\n      content: \"\";\n      z-index: -1;\n    }\n  }\n  \n\n  a {\n    text-decoration: none;\n    color: inherit\n  }\n  \n  input, textarea, button {\n    font-family: \"Roboto\", sans-serif;\n  }\n  *::selection,\n  *:selection {\n    background-color: transparent!important;\n  }\n  input:-internal-autofill-selected,\n  input:-webkit-internal-autofill-selected {\n    background-color: white!important;\n  }\n\n"], ["\n  * {\n    box-sizing: border-box;\n  }\n  \n  fieldset {\n    max-width: 100%;//todo check everywhere;\n  }\n  body {\n    overflow-y: scroll;\n    font-size: 16px;\n    font-family: \"Arial\", sans-serif;\n    -webkit-font-smoothing: (subpixel-antialiased);\n    font-smoothing: (subpixel-antialiased);\n    font-size: 1.1rem;\n    line-height: 1.3rem;\n    color: ", ";\n    background:", ";\n\n    &::before {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      background-image: url(", ");\n      background-size: cover;\n      opacity: .1;\n      content: \"\";\n      z-index: -1;\n    }\n  }\n  \n\n  a {\n    text-decoration: none;\n    color: inherit\n  }\n  \n  input, textarea, button {\n    font-family: \"Roboto\", sans-serif;\n  }\n  *::selection,\n  *:selection {\n    background-color: transparent!important;\n  }\n  input:-internal-autofill-selected,\n  input:-webkit-internal-autofill-selected {\n    background-color: white!important;\n  }\n\n"])), stylesSettings_1.colors.gray, cssVariables_1.gradients.biColorBlue, mountains_jpeg_1.default);
exports.default = GlobalStyle;
var templateObject_1;
