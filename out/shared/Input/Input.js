"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var stylesSettings_1 = require("../../appSettings/stylesSettings");
exports.InputBoxStyled = styled_components_1.default.div < InputStyles > "\n  border: 1px solid red; \n  display: block;\n  margin-bottom: 5px;\n  width: 100%;\n  padding: 10px;\n";
exports.LabelStyled = styled_components_1.default.label < InputStyles > "\n  display: block;\n  font-size: .7rem;\n  color: " + stylesSettings_1.colors.dark + ";\n";
exports.InputStyled = styled_components_1.default.input < InputStyles > "\n  font-size: .8rem;\n  border: 1px solid " + stylesSettings_1.colors.grayClear + "; \n  position: " + function (props) { return props.position; } + ";\n  top: " + function (props) { return props.top; } + ";\n  left: " + function (props) { return props.left; } + ";\n  display: " + function (props) { return props.display; } + ";\n  padding: 8px;\n\n  &::-webkit-file-upload-button,\n  &[type=\"submit\"],\n  &[type=\"button\"] {\n    padding: 8px;\n    border: 0px solid transparent;\n    background-color: " + stylesSettings_1.colors.cherzBlue + ";\n    border-color: " + stylesSettings_1.colors.cherzBlue + ";\n    color: " + stylesSettings_1.colors.white + ";\n    font-size: .8rem;\n  }\n  &[type=\"file\"] {\n    padding: 0px;\n  }\n";
var Input = function (_a) {
    var type = _a.type, label = _a.label, value = _a.value, position = _a.position, top = _a.top, left = _a.left, display = _a.display, className = _a.className, onClick = _a.onClick, onChange = _a.onChange;
    return react_1.default.createElement(exports.InputBoxStyled, null,
        react_1.default.createElement(exports.LabelStyled, null, label),
        react_1.default.createElement(exports.InputStyled, { className: "input " + className, type: type, value: value, position: position, top: top, left: left, display: display, onClick: onClick, onChange: onChange }));
};
exports.default = Input;
