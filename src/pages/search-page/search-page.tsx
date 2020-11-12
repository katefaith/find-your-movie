import React from 'react';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Results } from '../../components/results';
import { SearchForm } from '../../components/search-form';

import './search-page.scss';

export const SearchPage: React.FC = () => (
  <>
    <main>
      <section className="search">
        <div className="wrapper">
          <Header />
          <SearchForm />
        </div>
      </section>
      <Results />
    </main>

    <Footer />
  </>
);
