import React from 'react';
import { AddMovie } from '../../components/add-movie';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

import './add-movie-page.scss';

export const AddMoviePage: React.FC = () => (
  <>
    <main className="add-movie-page">
      <section className="add-movie-page__header">
        <div className="wrapper">
          <Header />
        </div>
      </section>
      <AddMovie />
    </main>
    <Footer />
  </>
);
