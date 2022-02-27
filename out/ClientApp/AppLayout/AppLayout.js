"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var layoutElements_1 = require("../layoutElements");
exports.AppLayoutStyled = styled_components_1.default.section < AppLayoutStyles > "\n  //border: 2px solid red;\n  position: relative;\n  height: 100%;\n \n";
var AppLayout = function (_a) {
    var children = _a.children, className = _a.className;
    return react_1.default.createElement(exports.AppLayoutStyled, { className: "appLayout " + className },
        react_1.default.createElement(layoutElements_1.Layout, null,
            react_1.default.createElement(layoutElements_1.Content, null, children)));
};
exports.default = AppLayout;
