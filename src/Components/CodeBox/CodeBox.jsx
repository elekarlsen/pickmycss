import React, { Component } from 'react';
import Clipboard from 'react-clipboard.js';
import './CodeBox.scss';

export default class CodeBox extends Component {
  constructor(props) {
    super(props);

    const { code } = props;

    this.state = {
      code: this.codify(code),
      clipboard: this.clipboardify(code),
    }
  }

  componentWillReceiveProps({ code }) {
    this.setState({ code: this.codify(code), clipboard: this.clipboardify(code) });
  }

  codify(code) {
    return code.map((style, index) => {
      let [property, value] = style.split(':');
      property = <span className="code-prop">{property}:</span>;
      value = <span className="code-value">{value}</span>;

      if (index < code.length - 1) return <>{property}{value}<br /></>;
      return <>{property}{value}</>;
    });
  }

  clipboardify(code) {
    return code.map((style, index) => index < code.length - 1 ? style + '\n' : style).join('');
  }

  render() {
    const { code, clipboard } = this.state;

    return (
      <div className="code-container">
        <div className="code-wrapper">
          <code className="code">
            {code}
          </code>
        </div>
        <Clipboard className="clipboard" data-clipboard-text={clipboard}>
          <i className="fas fa-clipboard" />
        </Clipboard>
      </div>
    );
  }
}
