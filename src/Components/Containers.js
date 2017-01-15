import React, { Component } from 'react';
import Markdown2HTML from 'react-markdown-to-html';

class Containers extends Component {
  render() {
    return (
      <div>
        <Markdown2HTML src="https://raw.githubusercontent.com/erwstout/ginger/master/documentation/containers.md" />
          <hr />
        <a href="https://github.com/erwstout/ginger/blob/master/documentation/containers.md">
          Edit this page on GitHub
        </a>
      </div>
    );
  }
}

export default Containers;
