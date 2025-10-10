/** @jsxImportSource react */
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Formik Form Submitted:", values);
    alert("User registered successfully!");
    resetForm();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>User Registration (Formik + Yup)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div style={{ marginBottom: "10px" }}>
            <label>Username:</label><br />
            <Field type="text" name="username" placeholder="Enter username" />
            <ErrorMessage name="username" component="div" style={{ color: "red" }} />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label><br />
            <Field type="email" name="email" placeholder="Enter email" />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Password:</label><br />
            <Field type="password" name="password" placeholder="Enter password" />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
