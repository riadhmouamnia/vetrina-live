import AuthProvider from 'context/AuthContext';
import React from 'react';

import RootNavigation from 'navigations/RootNavigation';

function App() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  );
}

export default App;
