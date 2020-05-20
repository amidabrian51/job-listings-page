import React from 'react';

import './App.css';
import JobListing from './components/job-listings/job-listings.component';
import NavBar from './components/navbar/navbar.component';

function App() {
  return (
    <div>
      <NavBar />
      <JobListing />
    </div>
  );
}

export default App;
