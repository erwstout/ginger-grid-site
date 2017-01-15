import React, { Component } from 'react';
import Markdown2HTML from 'react-markdown-to-html';

class Settings extends Component {
  render() {
    return (
      <div>
        <Markdown2HTML src="https://raw.githubusercontent.com/erwstout/ginger/master/documentation/settings.md" />
        <hr />
        <a href="https://github.com/erwstout/ginger/blob/master/documentation/settings.md">
          Edit this page on GitHub
        </a>
      </div>
    );
  }
}

export default Settings;
