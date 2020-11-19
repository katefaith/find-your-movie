/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import {
  Formik, Form, Field, FormikHelpers,
} from 'formik';

import './add-movie.scss';

interface Values {
  Type: string
  Title: string
  Poster: string
  imdbID: string
  Genre: string
  Year: string
  Runtime: string
  Plot: string
  Director: string
  Actors: string
}

export const AddMovie: React.FC = () => (
  <section className="add-movie">
    <h1 className="add-movie__title">Add movie</h1>
    <Formik
      initialValues={{
        Type: '',
        Title: '',
        Poster: '',
        imdbID: '',
        Genre: '',
        Year: '',
        Runtime: '',
        Plot: '',
        Director: '',
        Actors: '',
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      <Form className="add-movie__form">
        <div className="add-movie__form-field">
          <label className="add-movie__form-label">Type:</label>
          <div role="group">
            <Field id="movie" type="radio" name="Type" value="movie" />
            <label htmlFor="movie">movie</label>

            <Field id="series" type="radio" name="Type" value="series" />
            <label htmlFor="series">series</label>
          </div>
        </div>

        <div className="add-movie__form-field">
          <label className="add-movie__form-label" htmlFor="Title">Title:</label>
          <Field id="Title" name="Title" placeholder="The Kings of Summer" />
        </div>

        <div className="add-movie__form-field">
          <label className="add-movie__form-label" htmlFor="Poster">Link to the poster:</label>
          <Field id="Poster" name="Poster" placeholder="https:// ..." />
        </div>

        <div className="add-movie__form-field">
          <label className="add-movie__form-label" htmlFor="imdbID">imdbID:</label>
          <Field id="imdbID" name="imdbID" placeholder="tt2179116" />
        </div>

        <div className="add-movie__form-field">
          <label className="add-movie__form-label" htmlFor="Genre">Genre:</label>
          <Field id="Genre" name="Genre" placeholder="Adventure, Comedy, Drama" />
        </div>

        <div className="add-movie__form-field">
          <label className="add-movie__form-label" htmlFor="Year">Year:</label>
          <Field id="Year" name="Year" placeholder="2013" />
        </div>

        <div className="add-movie__form-field">
          <label className="add-movie__form-label" htmlFor="Runtime">Runtime:</label>
          <Field id="Runtime" name="Runtime" placeholder="95 min" />
        </div>

        <div className="add-movie__form-field">
          <label className="add-movie__form-label" htmlFor="Plot">Plot:</label>
          <Field id="Plot" name="Plot" placeholder="Three teenage friends, in the ultimate act of independence..." />
        </div>

        <div className="add-movie__form-field">
          <label className="add-movie__form-label" htmlFor="Director">Director:</label>
          <Field id="Director" name="Director" placeholder="Jordan Vogt-Roberts" />
        </div>

        <div className="add-movie__form-field">
          <label className="add-movie__form-label" htmlFor="Actors">Actors:</label>
          <Field id="Actors" name="Actors" placeholder="Nick Robinson, Gabriel Basso, Moises Arias, Nick Offerman" />
        </div>

        <button className="add-movi__button" type="submit">Submit</button>
      </Form>
    </Formik>
  </section>
);
