import React, { Fragment } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <Fragment>
      <ErrorBoundary>
        <UsersPage />
      </ErrorBoundary>
    </Fragment>
  );
}

export default App;