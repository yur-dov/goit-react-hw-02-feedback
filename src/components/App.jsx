import React from 'react';
import Feedback from './feedback/Feedback';
import css from './app.module.css';

export const App = () => {
  return (
    <div className={css.Container}>
      <Feedback />
    </div>
  );
};
