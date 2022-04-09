
# `React SubEditor` 

Simple React wrapper for [SubEditor](https://subeditor.org).

## Install

```shell
> npm install react-subeditor
```


## Usage

```js
import SubEditorComponent from 'react-subeditor';

const options = {
  lang : "en",
  width : 750, 
  height:250,
  value : 'some text',
  autoGrow : true,
  pluginList : ["fullscreen","hr", "color","source","align","text","undo","redo","indent","format","remove_format","link", "paste","list", "table","image"],
  toolbarList : ["undo","redo","text","format","link","remove_format","indent","outdent","color","backgroundcolor","align","ol","ul","image", "library","table","hr","source","fullscreen"],

  onChange : (changed) => { console.log(changed)},

};

function App() {
  return (<SubEditorComponent options={options}/>);
}

```

Visit [SubEditor documents](https://subeditor.org/options.html) for more information on how to use.

## License

MIT