import { Component } from 'react';
import Display from './_display';
import '../assets/css/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <div className="calc-container">
          <div className="calc-content">
            <table border="1">
              <Display result={result} />
              <tr>
                <td><button type="button">9</button></td>
                <td><button type="button">8</button></td>
                <td><button type="button">7</button></td>
                <td><button type="button">/</button></td>
              </tr>
              <tr>
                <td><button type="button">9</button></td>
                <td><button type="button">8</button></td>
                <td><button type="button">7</button></td>
                <td><button type="button">/</button></td>
              </tr>
              <tr>
                <td><button type="button">9</button></td>
                <td><button type="button">8</button></td>
                <td><button type="button">7</button></td>
                <td><button type="button">/</button></td>
              </tr>
              <tr>
                <td><button type="button">9</button></td>
                <td><button type="button">8</button></td>
                <td><button type="button">7</button></td>
                <td><button type="button">/</button></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
