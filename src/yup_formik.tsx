import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function YupFormik() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2,"Toi thieu 2 ki tu").max(10,"Toi da 10 ki tu").required(),
    email:Yup.string().email("Email khon dung dinh dang").required(),
    password: Yup.string().min(2,"Toi thieu 2 ki tu").max(10,"Toi da 10 ki tu").required(),
    confirm_password: Yup.string().oneOf([Yup.ref("password")], "Password's not match").required()
  });

  const handleSubmit = (value: any) => {
    console.log(value);

  }

  const formik = useFormik({
    initialValues: { name: "", email:"", password:"", confirm_password:"" },
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  });

  
  return (
    <div className="App">
      <h1>Validation with Formik + Yup</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name && (
            <p>{formik.errors.name}</p>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
          />
          {formik.errors.confirm_password && formik.touched.confirm_password && (
            <p>{formik.errors.confirm_password}</p>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
