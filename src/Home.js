import React, { Component } from 'react';
import Markdown2HTML from 'react-markdown-to-html';

class Home extends Component {
  render() {
    return (
      <div>
        <p>
          Welcome to Ginger Grid, a minimal flexbox grid system named after
          a cute dog. Here you will find all the information you need to
          get up and running building responsive sites in minutes.
        </p>
        <p>
          Be sure to check Ginger out on <a href="http://github.com/erwstout/ginger">GitHub</a>.
        </p>
        <Markdown2HTML src="https://raw.githubusercontent.com/erwstout/ginger/master/documentation/installation.md" />
        <hr />
        <a href="https://github.com/erwstout/ginger/blob/master/documentation/installation.md">
          Edit this page on GitHub
        </a>
      </div>
    );
  }
}

export default Home;
