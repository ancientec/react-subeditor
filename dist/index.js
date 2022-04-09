"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubEditor = void 0;
const react_1 = __importDefault(require("react"));
const subeditor_1 = __importDefault(require("subeditor"));
exports.SubEditor = subeditor_1.default;
class SubEditorComponent extends react_1.default.Component {
    constructor(props) {
        super(props);
        this._subeditor = undefined;
        this.refInstance = react_1.default.createRef();
        this._options = props.options;
    }
    componentDidMount() {
        this._subeditor = new subeditor_1.default(this.refInstance.current, this._options);
    }
    componentWillUnmount() {
        this._subeditor.destroy();
        this._options = undefined;
    }
    render() {
        return (react_1.default.createElement("div", { ref: this.refInstance }));
    }
}
exports.default = SubEditorComponent;
//# sourceMappingURL=index.js.map