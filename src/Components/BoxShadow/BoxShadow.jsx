import React, { Component } from 'react';
import Slider from '../Slider/Slider';
import CodeBox from '../CodeBox/CodeBox';
export default class BoxShadow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: {
        horizontal: 0,
        vertical: 0,
        blur: 0,
        spread: 0,
        opacity: 100,
      }
    };
  }

  _update(value, index) {
    const { properties } = this.state; // { topleft: 5, topright: 5 }
    switch (index) {
      case 0:
        properties.horizontal = value;
        break;

      case 1:
        properties.vertical = value;
        break;

      case 2:
        properties.blur = value;
        break;

      case 3:
        properties.spread = value;
        break;

      case 4:
        properties.opacity = value;
        break;
    }

    this.setState(prevState => ({ ...prevState, properties }));
  }

  render() {
    const { horizontal, vertical, blur, spread, opacity } = this.state.properties;

    const css = {
      boxShadow: `${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(0,0,0,${opacity / 100})`,
    };

    const code = [
      `box-shadow: ${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(0,0,0,${opacity / 100});`
    ]

    const labels = ['Horizontal', 'Vertical', 'Blur', 'Spread', 'Opacity'];

    return (
      <div className="card-container">
        <div className="card">
          <h1 className="card-title">Box Shadow</h1>
          <div className="card-content">
            <div className="settings">
              {labels.map((label, index) => (
                <Slider
                  type={label === 'Opacity' ? '%' : 'px'}
                  start={label === 'Opacity' ? 100 : 0}
                  label={label}
                  update={(value) => this._update(value, index)} />
              ))}
            </div>

            <div className="card-showcase card-showcase--inverted">
              <div style={css} className="card-showcase-box"></div>
            </div>

          </div>
          <CodeBox code={code} />
        </div>
      </div>
    )
  }
}



