import React from "react";
import ReactFCCtest from "react-fcctest";
import marked from "marked";

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return require("highlight.js").highlightAuto(code).value;
  },
  gfm: true,
  breaks: true
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text:
        "# Welcome to my React Markdown Previewer! \n" +
        "## This is a sub-heading... \n" +
        "### And here's some other cool stuff: \n" +
        "Heres some code, `<div></div>`, between 2 backticks. \n" +
        "```\n" +
        "// this is multi-line code: \n" +
        "function anotherExample(firstLine, lastLine) {\n" +
        "  if (firstLine == '```' && lastLine == '```') { \n" +
        "     return multiLineCode; " +
        "} \n" +
        " }\n" +
        "``` \n" +
        "You can also make text **bold**... whoa! \n" +
        "Or _italic_. \n" +
        "Or... wait for it... **_both!_** \n" +
        "And feel free to go crazy ~~crossing stuff out~~.\n" +
        "There's also [links](https://www.freecodecamp.com), and \n" +
        "> Block Quotes! \n" +
        "And if you want to get really crazy, even tables: \n" +
        "Wild Header | Crazy Header | Another Header? \n" +
        "------------ | ------------- | -------------\n" +
        "Your content can | be here, and it | can be here.... \n" +
        "And here. | Okay. | I think we get it. \n" +
        "- And of course there are lists. \n" +
        "- Some are bulleted. \n" +
        "- With different indentation levels.\n" +
        "- That look like this. \n" +
        "1. And there are numbererd lists too. \n" +
        "1. Use just 1s if you want! \n" +
        "1. But the list goes on...\n" +
        "- Even if you use dashes or asterisks. \n" +
        "* And last but not least, let's not forget embedded images: \n" +
        "![React Logo w/ Text](https://goo.gl/Umyytc)\n"
    };
    this.handleChange = this.handleChange.bind(this);
    this.rawMarkup = this.rawMarkup.bind(this);
  }

  rawMarkup(text) {
    let rawMarkup = marked(text, { sanitize: null });
    return { __html: rawMarkup };
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      text: value
    });
  }

  render() {
    return (
      <div className="App">
        <ReactFCCtest />
        <div id="top">
          <div className="top-bar">
            <p className="top-title">Editor</p>
          </div>
          <textarea
            rows="10"
            cols="50"
            id="editor"
            onChange={this.handleChange}
            name="editor"
            value={this.state.text}
          />
        </div>
        <div id="bottom">
          <div className="bottom-bar">
            <p className="bottom-title">Preview</p>
          </div>
          <div
            id="preview"
            dangerouslySetInnerHTML={this.rawMarkup(this.state.text)}
          />
          <div />
        </div>
      </div>
    );
  }
}

export default App;
