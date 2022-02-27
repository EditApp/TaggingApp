"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
//just for exmple of menu aside
exports.MenuStyled = styled_components_1.default.aside < MenuStyles > "\n  max-width: 100px;\n  width: 100%;\n  height: 800px;\n";
var Menu = function (_a) {
    var children = _a.children, className = _a.className;
    return react_1.default.createElement(exports.MenuStyled, { className: "Menu " + className }, children);
};
exports.default = Menu;
