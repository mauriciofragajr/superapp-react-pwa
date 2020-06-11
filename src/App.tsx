import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Posts from './components/Posts';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Posts/>
    </div>
  );
}

export default App;
