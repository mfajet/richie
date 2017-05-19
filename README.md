### Forked from https://github.com/FrederikS/richie in order to add certain features I wanted in an application I was using.
#### What I added so far

* Default Value for editor that takes plain text or rawContent

## Demo

http://frederiks.github.io/richie/

## Usage

`npm install richie --save`


```
import React from 'react';
import ReactDOM from 'react-dom';
import { Editor } from 'richie/index';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const handleImageFile = (file, callback) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        callback(e.target.result);
    };
    reader.readAsDataURL(file);
};

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Editor
          defaultValue="This can be text or stringified RawContent"
          handleImageFile={handleImageFile} />
    </MuiThemeProvider>,
    document.getElementById('editor')
);     

```

## Requirements

You need to define a `handleImageFile` callback and pass it through the related `Editor` Component property. The example above handles selected image files with returning a Data-URL. But in other cases you may like to upload them to a server and reference the url. The returned url is used as src attribute of the img tag.

## API

For using the editors output you can pass an `onChange` callback to the `Editor` Component. The callback gets passed in the [`RawDraftContentState`](https://facebook.github.io/draft-js/docs/api-reference-data-conversion.html#converttoraw) as parameter can be used for the `Preview` Component of the richie library.

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, Preview } from 'richie';

const renderOutput = (rawContent) => {
    ReactDOM.render(
        <Preview rawContent={rawContent} />,
        document.getElementById('output')
    );
};

ReactDOM.render(
    <Editor onChange={renderOutput} />,
    document.getElementById('editor')
);
```
You can also provide a default value now.
```
import React from 'react';
import ReactDOM from 'react-dom';
import { Editor } from 'richie/index';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const handleImageFile = (file, callback) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        callback(e.target.result);
    };
    reader.readAsDataURL(file);
};

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Editor handleImageFile={handleImageFile} />
    </MuiThemeProvider>,
    document.getElementById('editor')
);     

```

## Peer-Dependencies

`npm install react react-dom material-ui --save`
