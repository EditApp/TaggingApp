"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var _1 = require("../");
var stylesSettings_1 = require("../../appSettings/stylesSettings");
var UploadStyled = styled_components_1.default.div < UploadStyles > "\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  background-color: " + stylesSettings_1.colors.white + ";\n";
var Upload = function (_a) {
    var children = _a.children, type = _a.type, label = _a.label, className = _a.className, onChange = _a.onChange;
    return react_1.default.createElement(UploadStyled, { className: "upload " + className },
        children,
        react_1.default.createElement("br", null),
        react_1.default.createElement(_1.Input, { label: label, type: type, onChange: onChange }));
};
exports.default = Upload;
