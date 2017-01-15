import React, { Component } from 'react';
import Markdown2HTML from 'react-markdown-to-html';

class Columns extends Component {
  render() {
    return (
      <div>
        <Markdown2HTML src="https://raw.githubusercontent.com/erwstout/ginger/master/documentation/columns.md" />
        <hr />
        <a href="https://github.com/erwstout/ginger/blob/master/documentation/columns.md">
          Edit this page on GitHub
        </a>
      </div>
    );
  }
}

export default Columns;
