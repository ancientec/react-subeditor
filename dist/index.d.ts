import React from 'react';
import SubEditor, { ChangeEntry, SubEditorEvent, ToolbarItem, SelectionSlimState, SubEditorHTMLElement, SubEditorOption } from 'subeditor';
export default class SubEditorComponent extends React.Component<any, any> {
    refInstance: React.RefObject<HTMLDivElement>;
    private _subeditor;
    private _options;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export { SubEditor, ChangeEntry, SubEditorEvent, ToolbarItem, SelectionSlimState, SubEditorHTMLElement, SubEditorOption };
