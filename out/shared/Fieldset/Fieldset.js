"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var stylesSettings_1 = require("../../appSettings/stylesSettings");
exports.FieldsetStyled = styled_components_1.default.fieldset < FieldsetStyles > "\n    padding: 20px;\n    background-color: " + stylesSettings_1.colors.dust + ";\n    -webkit-box-shadow: 0 2px 10px 1px #0E1173;\n    box-shadow: 0 2px 10px 1px #0E1173;\n\n    input[type=\"submit\"],\n    input[type=\"button\"] {\n      width: 100%;\n    }\n";
var Legend = styled_components_1.default.legend(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  position: relative;\n  padding: 8px;\n  font-size: 1rem;\n  top: 16px;\n"], ["\n  color: ", ";\n  position: relative;\n  padding: 8px;\n  font-size: 1rem;\n  top: 16px;\n"])), stylesSettings_1.colors.dark);
var Fieldset = function (_a) {
    var children = _a.children, legend = _a.legend, className = _a.className;
    return react_1.default.createElement(exports.FieldsetStyled, { className: "fieldset " + className },
        legend && react_1.default.createElement(Legend, null, legend),
        children);
};
exports.default = Fieldset;
var templateObject_1;
