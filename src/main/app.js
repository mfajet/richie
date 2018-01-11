/* eslint-env browser */
import ReactDOM from 'react-dom';
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Editor, Preview } from '../../index';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        alternateTextColor: 'black',
        disabledColor: '#767676'
    }
});

const handleImageFile = (file, callback) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        callback(e.target.result);
    };
    reader.readAsDataURL(file);
};

const renderOutput = (rawContent) => {
    ReactDOM.render(<Preview rawContent={rawContent} />, document.getElementById('output'));
};

ReactDOM.render((
    <MuiThemeProvider muiTheme={muiTheme}>
        <Editor handleImageFile={handleImageFile} onChange={renderOutput} />
    </MuiThemeProvider>
), document.getElementById('editor'));
