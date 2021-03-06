/* eslint-disable react/no-access-state-in-setstate */
import { Component } from 'react';
import Display from './_display';
import ButtonPanel from './_buttonPanel';
import calculate from '../logic/calculate';
import '../assets/css/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '0',
      operation: null,
      calculationPath: undefined,
      result: null,
    };
  }

  handleClick = buttonName => this.setState(calculate(this.state, buttonName));

  render() {
    const { result, calculationPath } = this.state;

    return (
      <div className="App">
        <div className="calc-container">
          <div className="calc-content">
            <table>
              <Display result={!result ? calculationPath : result} />
              <ButtonPanel handleClick={this.handleClick} />
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
