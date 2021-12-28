import * as React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { LayoutSign } from './style'
import { useState } from 'react'

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const App: React.FC = () => {
  return (
    <LayoutSign>
      <h1>Dang Ky</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 0);
        }}
      >
        {(formkikProps) => (
          <Form>
            {/* <label htmlFor="firstName">Ho</label>
          <Field id="firstName" name="firstName" placeholder="Nguyen" />
          
          <label htmlFor="lastName">Ten</label>
          <Field id="lastName" name="lastName" placeholder="Van A" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="nguyenvana@gmail.com"
            type="email"
          /> */}

            <input type="text" name="firstName" placeholder='Nguyen' />
            <div>{formkikProps.values.firstName}</div>
            <input type="text" name="lastName" placeholder='Van A' />
            <input type="email" name="email" placeholder='A@gmail.com' />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </LayoutSign>
  );

};

export default App;
