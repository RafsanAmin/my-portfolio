import React, { ContextType } from 'react';
import { AppContext } from 'contexts/appContext';
class Time extends React.Component {
  static contextType = AppContext;
  declare context: ContextType<typeof AppContext>;
  tickInt: any;
  tick() {
    this.tickInt = setInterval(() => {
      this.context[1]({ type: 'DATE' });
    }, 1000);
  }
  stop() {
    clearInterval(this.tickInt);
  }
  componentDidMount() {
    this.tick();
  }
  componentWillUnmount() {
    this.stop();
  }
  render() {
    return (
      <div>
        <p>{this.context[0].date}</p>
      </div>
    );
  }
}
export default Time;
