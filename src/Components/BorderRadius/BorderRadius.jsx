import React, { Component } from 'react';
import './BorderRadius.scss';
import Slider from '../Slider/Slider';
import CodeBox from '../CodeBox/CodeBox';

export default class BorderRadius extends Component {
  constructor(props) {
    super(props);

    this.state = {
      borders: {
        topleft: 0,
        topright: 0,
        bottomleft: 0,
        bottomright: 0
      }
    };
  }

  _update(value, index) {
    const { borders } = this.state;
    switch (index) {
      case 0:
        borders.topleft = value;
        break;

      case 1:
        borders.topright = value;
        break;

      case 2:
        borders.bottomright = value;
        break;

      case 3:
        borders.bottomleft = value;
        break;
    }

    this.setState(prevState => ({ ...prevState, borders }));
  }

  render() {
    const { topleft, topright, bottomright, bottomleft } = this.state.borders;
    const css = {
      borderRadius: `${topleft}% ${topright}% ${bottomright}% ${bottomleft}%`,
    };
    const code = [
      `border-radius: ${topleft}% ${topright}% ${bottomright}% ${bottomleft}%;`
    ];


    const labels = ['Topleft', 'Topright', 'Bottomright', 'Bottomleft'];

    return (
      <div className="card-container">
        <div className="card">
          <h1 className="card-title">Border Radius</h1>
          <div className="card-content">
            <div className="settings">
              {labels.map((label, index) => (
                <Slider
                  type="%"
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



