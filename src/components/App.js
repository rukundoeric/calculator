import { Component } from 'react';
import Display from './_display';
import ButtonPanel from './_buttonPanel';
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
            <table>
              <Display result={result} />
              <ButtonPanel />
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
