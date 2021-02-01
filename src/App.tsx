import React from 'react';
import { ProfileProvider } from './hooks/profiles';
import Routes from './routes';
import { GlobalStyle } from './styles/global';
import { ContextThemeProvider } from './hooks/theme';

function App() {

  return (
    <ContextThemeProvider>
      <ProfileProvider>
        <Routes />
      </ProfileProvider>
    </ContextThemeProvider>
  )
}

export default App;
