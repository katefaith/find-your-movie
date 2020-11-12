import React from 'react';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Movie } from '../../components/movie';
import { Results } from '../../components/results';

import './movie-page.scss';

export const MoviePage: React.FC = () => (
  <>
    <main>
      <section className="movie-page">
        <div className="wrapper">
          <Header />
          <Movie />
        </div>
      </section>
      <Results />
    </main>
    <Footer />
  </>
);
