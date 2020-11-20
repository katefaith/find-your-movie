/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import {
  Formik, Form, Field, FormikHelpers,
} from 'formik';
import * as Yup from 'yup';

import './add-movie.scss';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../redux/add-movie/actions';

export type AddMovieType = {
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

export const AddMovie: React.FC = () => {
  const dispatch = useDispatch();

  const SignupSchema = Yup.object().shape({
    Type: Yup.string()
      .required('Required'),
    Title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    Poster: Yup.string()
      .url('Not an URL!')
      .required('Required'),
    imdbID: Yup.string()
      .required('Required'),
    Genre: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!'),
    Year: Yup.number()
      .moreThan(1894, 'There were no movies before 1895')
      .lessThan(2021, 'Hello from the future!'),
    Runtime: Yup.string()
      .min(3, 'Too Short!')
      .max(20, 'Too Long!'),
    Plot: Yup.string()
      .min(10, 'Too Short!')
      .max(200, 'Too Long!'),
    Director: Yup.string()
      .min(3, 'Too Short!')
      .max(30, 'Too Long!'),
    Actors: Yup.string()
      .min(4, 'Too Short!')
      .max(200, 'Too Long!'),
  });

  return (
    <section className="add-movie">
      <h1 className="add-movie__title">Add movie</h1>
      <Formik
        initialValues={{
          Type: 'movie',
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
        validationSchema={SignupSchema}
        onSubmit={(values: AddMovieType, { resetForm }: FormikHelpers<AddMovieType>) => {
          // alert(JSON.stringify(values, null, 2));
          dispatch(addMovie(values));
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="add-movie__form">
            <div className="add-movie__form-field">
              <label className="add-movie__form-label">Type *:</label>
              <div role="group">
                <Field id="movie" type="radio" name="Type" value="movie" />
                <label htmlFor="movie">movie</label>

                <Field id="series" type="radio" name="Type" value="series" />
                <label htmlFor="series">series</label>
              </div>
              {errors.Type && touched.Title && (<div className="add-movie__form-error">{errors.Type}</div>)}
            </div>

            <div className="add-movie__form-field">
              <label className="add-movie__form-label" htmlFor="Title">Title: *</label>
              <Field id="Title" name="Title" placeholder="The Kings of Summer" />
              {errors.Title && touched.Title && (<div className="add-movie__form-error">{errors.Title}</div>)}
            </div>

            <div className="add-movie__form-field">
              <label className="add-movie__form-label" htmlFor="Poster">Link to the poster: *</label>
              <Field id="Poster" name="Poster" placeholder="https:// ..." />
              {errors.Poster && touched.Poster && (<div className="add-movie__form-error">{errors.Poster}</div>)}
            </div>

            <div className="add-movie__form-field">
              <label className="add-movie__form-label" htmlFor="imdbID">imdbID: *</label>
              <Field id="imdbID" name="imdbID" placeholder="tt2179116" />
              {errors.imdbID && touched.imdbID && (<div className="add-movie__form-error">{errors.imdbID}</div>)}
            </div>

            <div className="add-movie__form-field">
              <label className="add-movie__form-label" htmlFor="Genre">Genre:</label>
              <Field id="Genre" name="Genre" placeholder="Adventure, Comedy, Drama" />
              {errors.Genre && touched.Genre && (<div className="add-movie__form-error">{errors.Genre}</div>)}
            </div>

            <div className="add-movie__form-field">
              <label className="add-movie__form-label" htmlFor="Year">Release year:</label>
              <Field id="Year" name="Year" placeholder="2013" />
              {errors.Year && touched.Year && (<div className="add-movie__form-error">{errors.Year}</div>)}
            </div>

            <div className="add-movie__form-field">
              <label className="add-movie__form-label" htmlFor="Runtime">Runtime:</label>
              <Field id="Runtime" name="Runtime" placeholder="95 min" />
              {errors.Runtime && touched.Runtime && (<div className="add-movie__form-error">{errors.Runtime}</div>)}
            </div>

            <div className="add-movie__form-field">
              <label className="add-movie__form-label" htmlFor="Plot">Plot:</label>
              <textarea id="Plot" name="Plot" placeholder="Three teenage friends, in the ultimate act of independence..." />
              {errors.Plot && touched.Plot && (<div className="add-movie__form-error">{errors.Plot}</div>)}
            </div>

            <div className="add-movie__form-field">
              <label className="add-movie__form-label" htmlFor="Director">Director:</label>
              <Field id="Director" name="Director" placeholder="Jordan Vogt-Roberts" />
              {errors.Director && touched.Director && (<div className="add-movie__form-error">{errors.Director}</div>)}
            </div>

            <div className="add-movie__form-field">
              <label className="add-movie__form-label" htmlFor="Actors">Actors:</label>
              <Field id="Actors" name="Actors" placeholder="Nick Robinson, Gabriel Basso, Moises Arias, Nick Offerman" />
              {errors.Actors && touched.Actors && (<div className="add-movie__form-error">{errors.Actors}</div>)}
            </div>

            <button className="add-movi__button" type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
