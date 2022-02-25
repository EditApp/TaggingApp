"use strict";
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
var Box_1 = __importDefault(require("./shared/Box/Box"));
var layout_1 = require("./ClientApp/layout");
function App() {
    var _this = this;
    var _a = react_1.useState(""), baseImg = _a[0], setBaseImg = _a[1];
    var uploadIage = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var file, base64;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("ev", e.target.files);
                    file = e.target.files[0];
                    return [4 /*yield*/, convertBase64(file)];
                case 1:
                    base64 = _a.sent();
                    console.log("base64", base64);
                    setBaseImg(base64);
                    return [2 /*return*/];
            }
        });
    }); };
    var convertBase64 = function (file) {
        return new Promise(function (resolve, reject) {
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            console.log("fileReader", fileReader);
            fileReader.onload = function () {
                resolve(fileReader.result);
            };
            fileReader.onerror = function (error) {
                reject(error);
            };
        });
    };
    return (react_1.default.createElement(layout_1.Layout, null,
        react_1.default.createElement(Box_1.default, { borderRadius: "15px" },
            react_1.default.createElement("input", { type: "file", onChange: function (e) {
                    uploadIage(e);
                } }),
            react_1.default.createElement("br", null),
            react_1.default.createElement("img", { src: baseImg, height: "350px" }))));
}
exports.App = App;
