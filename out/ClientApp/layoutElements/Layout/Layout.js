"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
exports.LayoutStyled = styled_components_1.default.section < LayoutStyles > "\n  display: flex;\n";
var Layout = function (_a) {
    var children = _a.children, className = _a.className;
    return react_1.default.createElement(exports.LayoutStyled, { className: "Layout " + className }, children);
};
exports.default = Layout;
