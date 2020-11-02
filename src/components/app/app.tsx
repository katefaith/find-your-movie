import React from 'react';

import SearchForm from '../search-form';
import Results from '../results';
import Header from '../header';
import Footer from '../footer';

import './app.scss';

const App: React.FC = () => (
  <>
    <section className="search">
      <div className="wrapper">
        <Header />
        <SearchForm />
      </div>
    </section>
    <Results />

    <Footer />
  </>
);

export default App;
