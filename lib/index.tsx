import React from 'react';
import SubEditor,{SubEditorOption, SubEditorHTMLElement} from 'subeditor';


export default class SubEditorComponent extends React.Component<any, any> {

    refInstance : React.RefObject<HTMLDivElement>;
    private _subeditor : SubEditor | undefined = undefined;
    private _options : SubEditorOption | undefined;
    constructor(props : any) {
        super(props);
        this.refInstance = React.createRef();
        this._options = props.options as SubEditorOption;
    }
    componentDidMount() {
        this._subeditor = new SubEditor(this.refInstance.current as SubEditorHTMLElement, this._options!);
    }
    componentWillUnmount() {
        this._subeditor!.destroy();
        this._options = undefined;
    }
    render() {
        return (<div ref={this.refInstance}></div>);
    }

}

export { SubEditor, SubEditorOption};