"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
exports.ComponentStyled = styled_components_1.default.section < ComponentStyles > "\n  border: 1px solid red;\n  \n";
var Component = function (_a) {
    var children = _a.children, margin = _a.margin, mini = _a.mini, padding = _a.padding, centeredContent = _a.centeredContent, rounded = _a.rounded, rounded15 = _a.rounded15, withShadow = _a.withShadow, withMargin = _a.withMargin, withMarginTop = _a.withMarginTop, bgColor = _a.bgColor, bgImage = _a.bgImage, height = _a.height, width = _a.width, maxWidth = _a.maxWidth, className = _a.className;
    return react_1.default.createElement(exports.ComponentStyled, { className: "Component " + className }, children);
};
exports.default = Component;
