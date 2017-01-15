import React, { Component } from 'react';
import Markdown2HTML from 'react-markdown-to-html';

class VisibilityClasses extends Component {
  render() {
    return (
      <div>
        <Markdown2HTML src="https://raw.githubusercontent.com/erwstout/ginger/master/documentation/visibility-classes.md" />
        <hr />
        <a href="https://github.com/erwstout/ginger/blob/master/documentation/visibility-classes.md">
          Edit this page on GitHub
        </a>
      </div>
    );
  }
}

export default VisibilityClasses;
