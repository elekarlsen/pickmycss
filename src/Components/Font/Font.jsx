import React, { Component } from 'react';
import Slider from '../Slider/Slider';
import CodeBox from '../CodeBox/CodeBox';
export default class Font extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: {
        size: 32,
        spacing: 0,
        shadowX: 0,
        shadowY: 0,
        blur: 0,
        opacity: 100,
      }
    };
  }

  _update(value, index) {
    const { properties } = this.state;

    switch (index) {
      case 0:
        properties.size = value;
        break;

      case 1:
        properties.spacing = value;
        break;

      case 2:
        properties.shadowX = value;
        break;

      case 3:
        properties.shadowY = value;
        break;

      case 4:
        properties.blur = value;
        break;

      case 5:
        properties.opacity = value;
        break;
    }

    this.setState(prevState => ({ ...prevState, properties }));
  }

  render() {
    const { size, spacing, shadowX, shadowY, blur, opacity } = this.state.properties;
    const code = [
      `font-size: ${size}px;`,
      `letter-spacing: ${spacing}px;`,
      `text-shadow: ${shadowX}px ${shadowY}px ${blur}px rgba(0,0,0,${opacity / 100});`,
    ]

    const css = {
      fontSize: `${size}px`,
      letterSpacing: `${spacing}px`,
      textShadow: `${shadowX}px ${shadowY}px ${blur}px rgba(0,0,0,${opacity / 100})`,
    };

    const labels = ['Size', 'Spacing', 'ShadowX', 'ShadowY', 'Blur', 'Opacity'];

    return (
      <div className="card-container">
        <div className="card">
          <h1 className="card-title">Font</h1>
          <div className="card-content">
            <div className="settings">
              {labels.map((label, index) => (
                <Slider
                  type={label === 'Opacity' ? '%' : 'px'}
                  start={label === 'Opacity' ? 100 : (label === 'Size' ? 32 : 0)}
                  label={label}
                  update={(value) => this._update(value, index)} />
              ))}
            </div>

            <div className="card-showcase bg-white">
              <div style={css} className="bg-transparent card-showcase-box card-showcase-box--text">Hi there</div>
            </div>
          </div>
          <CodeBox code={code} />
        </div>
      </div>
    )
  }
}



