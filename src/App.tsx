import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
    </div>
  );
}

export default App;
