"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var ResetCss = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  \nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n*:focus,\n*:visited,\n*:active {\n    -webkit-focus-ring-color auto 0px!important;\n    outline: 0!important;\n    -moz-outline-style: none!important;\n}\n\ninput:focus,\ninput:visited,\ninput:active {\n    -moz-outline-style: none!important;\n}\n\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\ninput[type=search] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\ntextarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n}\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    max-width: 100%;\n}\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n[hidden] {\n    display: none;\n}\n\nhtml {\n    font-size: 100%; \n    -webkit-text-size-adjust: 100%; \n    -ms-text-size-adjust: 100%; \n}\n\na:focus {\n    outline: thin dotted;\n}\n\na:active,\na:hover {\n    outline: 0;\n}\n\nimg {\n    border: 0; \n    -ms-interpolation-mode: bicubic; \n}\n\nfigure {\n    margin: 0;\n}\n\nform {\n    margin: 0;\n}\n\nfieldset {\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\nlegend {\n    border: 0; \n    padding: 0;\n    white-space: normal; \n    *margin-left: -7px; \n}\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 100%; \n    margin: 0; \n    vertical-align: baseline; \n    *vertical-align: middle; \n}\n\nbutton,\ninput {\n    line-height: normal;\n}\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n\nbutton,\nhtml input[type=\"button\"], \ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button; \n    cursor: pointer; \n    *overflow: visible;  \n}\n\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box; \n    padding: 0; \n    *height: 13px; \n    *width: 13px; \n}\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield; \n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box; \n}\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\ntextarea {\n    overflow: auto; \n    vertical-align: top; \n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    color: #222;\n}\n\n\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\nimg {\n    vertical-align: middle;\n}\n\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\ntextarea {\n    resize: vertical;\n}\n\n.chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n}\n"], ["\n  \nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n*:focus,\n*:visited,\n*:active {\n    -webkit-focus-ring-color auto 0px!important;\n    outline: 0!important;\n    -moz-outline-style: none!important;\n}\n\ninput:focus,\ninput:visited,\ninput:active {\n    -moz-outline-style: none!important;\n}\n\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\ninput[type=search] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\ntextarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n}\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    max-width: 100%;\n}\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n[hidden] {\n    display: none;\n}\n\nhtml {\n    font-size: 100%; \n    -webkit-text-size-adjust: 100%; \n    -ms-text-size-adjust: 100%; \n}\n\na:focus {\n    outline: thin dotted;\n}\n\na:active,\na:hover {\n    outline: 0;\n}\n\nimg {\n    border: 0; \n    -ms-interpolation-mode: bicubic; \n}\n\nfigure {\n    margin: 0;\n}\n\nform {\n    margin: 0;\n}\n\nfieldset {\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\nlegend {\n    border: 0; \n    padding: 0;\n    white-space: normal; \n    *margin-left: -7px; \n}\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 100%; \n    margin: 0; \n    vertical-align: baseline; \n    *vertical-align: middle; \n}\n\nbutton,\ninput {\n    line-height: normal;\n}\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n\nbutton,\nhtml input[type=\"button\"], \ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n    -webkit-appearance: button; \n    cursor: pointer; \n    *overflow: visible;  \n}\n\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    box-sizing: border-box; \n    padding: 0; \n    *height: 13px; \n    *width: 13px; \n}\n\ninput[type=\"search\"] {\n    -webkit-appearance: textfield; \n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box; \n}\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\ntextarea {\n    overflow: auto; \n    vertical-align: top; \n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    color: #222;\n}\n\n\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\nimg {\n    vertical-align: middle;\n}\n\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\ntextarea {\n    resize: vertical;\n}\n\n.chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n}\n"])));
exports.default = ResetCss;
var templateObject_1;
