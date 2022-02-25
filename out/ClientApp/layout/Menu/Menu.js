"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_Menus_1 = __importDefault(require("styled-Menus"));
exports.MenuStyled = styled_Menus_1.default.aside < MenuStyles > "\n  border: 1px solid grey;\n  max-width: 300px;\n";
var Menu = function (_a) {
    var children = _a.children, className = _a.className;
    return react_1.default.createElement(exports.MenuStyled, { className: "Menu " + className }, children);
};
exports.default = Menu;
