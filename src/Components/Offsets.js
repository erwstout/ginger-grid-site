import React, { Component } from 'react';
import Markdown2HTML from 'react-markdown-to-html';

class Offsets extends Component {
  render() {
    return (
      <div>
        <Markdown2HTML src="https://raw.githubusercontent.com/erwstout/ginger/master/documentation/offsets.md" />
        <hr />
        <a href="https://github.com/erwstout/ginger/blob/master/documentation/offsets.md">
          Edit this page on GitHub
        </a>
      </div>
    );
  }
}

export default Offsets;
