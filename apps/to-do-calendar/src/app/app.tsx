// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.scss';
// import NxWelcome from './nx-welcome';

// export function App() {
//   return (
//     <>
//       <NxWelcome title="to-do-calendar" />
//       <div />
//     </>
//   );
// }

// export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Registration from './components/authentication/registration.jsx';

class App extends React.Component {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor (props: any) {
    super(props)
    this.state = {
      currentPage: 'home'
    }
  }

  override render() {
    return (
      <>
        <Registration />
        <div />
      </>
    );
  }
}

export default App;
// ReactDOM.render(<App />, document.getElementById('app'));
