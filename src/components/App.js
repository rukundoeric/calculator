import { Component } from 'react';
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
              <tr>
                <td><div>{result}</div></td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
