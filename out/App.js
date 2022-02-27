"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var react_router_dom_1 = require("react-router-dom");
var styled_components_2 = require("styled-components");
// style
var globalStyle_1 = __importDefault(require("./appSettings/globalStyle"));
var resetCss_1 = __importDefault(require("./appSettings/resetCss"));
var shared_1 = require("./shared");
var AppLayout_1 = __importDefault(require("./ClientApp/AppLayout/AppLayout"));
var convertBase64_1 = require("./helpers/convertBase64");
var saveDataToJson_1 = require("./helpers/saveDataToJson");
var stylesSettings_1 = require("./appSettings/stylesSettings");
var cssVariables_1 = require("./appSettings/cssVariables");
//context for tags
var useSvg_1 = __importDefault(require("./shared/SvgPlayground/useSvg"));
var CenteredButton = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", " {\n    display: block;\n    width: 100%;\n    max-width: 450px;\n    margin: 10px auto;\n  }\n"], ["\n  ", " {\n    display: block;\n    width: 100%;\n    max-width: 450px;\n    margin: 10px auto;\n  }\n"])), shared_1.InputStyled);
var SvgStyled = styled_components_1.default.svg < SvgPlaygroundStyles > "\n  //border: 3px solid red;\n  position: relative;\n  z-index: 2;\n  cursor: crosshair;\n  width: 100%;\n  height: 100%;\n  max-height: 450px;\n  \n";
function App() {
    var _this = this;
    var _a = react_1.useState(null), baseImg = _a[0], setBaseImg = _a[1];
    var _b = react_1.useState(null), jsonFormat = _b[0], setJsonFormat = _b[1];
    var _c = react_1.useState(new Date()), date = _c[0], setDate = _c[1];
    var _d = useSvg_1.default(), svgPlayground = _d.svgPlayground, tags = _d.tags;
    react_1.useEffect(function () {
        setJsonFormat({});
        console.log("reload");
    }, [baseImg]);
    //uplad file
    var uploadImage = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var file, base64;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    file = e.target.files[0];
                    return [4 /*yield*/, convertBase64_1.convertBase64(file)];
                case 1:
                    base64 = _a.sent();
                    console.log("base64", base64);
                    //set format base 64 dans state du composant
                    setBaseImg(base64);
                    return [2 /*return*/];
            }
        });
    }); };
    var convertToJson = function (base64format) {
        var tagsData = tags.map(function (item) {
            return {
                id: item.id,
                name: item.textLabel,
                xPos: item.rectX,
                yPos: item.rectY,
                width: item.width,
                height: item.height,
                fill: item.fill,
                stroke: item.stroke,
                strWidth: item.strokeWidth
            };
        });
        if (base64format) {
            setJsonFormat({
                date: date,
                base64: baseImg,
                tags: tagsData
            });
            //console.log("convertToJson jsonFormat state", jsonFormat)
            saveDataToJson_1.saveDataToJson(jsonFormat);
        }
        return;
    };
    return react_1.default.createElement(styled_components_2.ThemeProvider, { theme: { mode: 'dark' } },
        react_1.default.createElement(resetCss_1.default, null),
        react_1.default.createElement(globalStyle_1.default, null),
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(AppLayout_1.default, null,
                react_1.default.createElement(shared_1.Box, { className: "input", width: "100%", margin: "0 auto", borderRadius: "15px", minHeight: "300px" },
                    baseImg && svgPlayground,
                    react_1.default.createElement(shared_1.Box, { width: "100%", maxWidth: "600px", bgColor: stylesSettings_1.colors.white, margin: "20px auto", borderRadius: "10px", injectedStyles: cssVariables_1.shadows.shadowBig, minHeight: "450px" },
                        react_1.default.createElement(shared_1.Upload, { label: "T\u00E9l\u00E9chargez le fichier", type: "file", onChange: function (e) {
                                uploadImage(e);
                            } }, baseImg && react_1.default.createElement(shared_1.Image, { withBorder: true, src: baseImg, opacity: baseImg ? "1" : "0" })))),
                react_1.default.createElement(CenteredButton, null,
                    react_1.default.createElement(shared_1.Input, { display: "block", type: "submit", value: "Convertir", onClick: function () {
                            convertToJson(baseImg);
                        } })),
                jsonFormat && react_1.default.createElement(shared_1.Box, { className: "result", borderRadius: "0px", minHeight: "300px" },
                    console.log("TAGS:", __assign({ tags: tags })),
                    console.log("JSON FOSM", jsonFormat ? .tags : ),
                    react_1.default.createElement(shared_1.SvgPlaygroundStyled, null,
                        react_1.default.createElement(SvgStyled, null, jsonFormat ? .tags ? .map(function (item) {
                            console.log("ITEM", item);
                            var id = item.id, rectX = item.rectX, rectY = item.rectY, width = item.width, height = item.height, fill = item.fill, stroke = item.stroke, strokeWidth = item.strokeWidth, textLabel = item.textLabel;
                            return react_1.default.createElement(shared_1.ComputeRect, { key: id, rectX: rectX, rectY: rectY, width: width, height: height, fill: fill, stroke: stroke, strokeWidth: strokeWidth, textLabel: textLabel });
                        }) :  : ),
                        react_1.default.createElement(shared_1.SvgPlaygroundStyled, null,
                            react_1.default.createElement(shared_1.Image, { withBorder: true, src: jsonFormat ? .base64 : , opacity: baseImg ? "1" : "0", height: "350px" })))),
                "ThemeProvider> }")));
}
exports.App = App;
var templateObject_1;
