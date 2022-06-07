import { Component } from "react";
import { Formik } from "formik";

export class FormikPure extends Component {
  defaaulFormValues = { emailRuslan: "", passwordRuslan: "", fullName: "",image:"" };

  handleSubmit(form) {
    // form.fullName = form.fullName.toLowerCase()
    console.log(form, "form");
  }

  handleError(values) {
    console.log(values, "Erros");
    const error = {};

    if (!values.emailRuslan) {
      error.emailRuslan = "Email bos ola bilmez";
    }

    if (!values.passwordRuslan) {
      error.passwordErrorRuslan = "Password bos ola bilmez";
    }

    if (!values.fullName) {
      error.fullName = "Full name bos ola bilmez";
    }
    return error;
  }

  render() {
    return (
      <Formik
        initialValues={this.defaaulFormValues}
        // validate={this.handleError}
        onSubmit={this.handleSubmit}
      >
        {(formik) => {
          console.log(formik, "formik");

          return (
            <form onSubmit={formik.handleSubmit}>
              <input
                type="email"
                name="emailRuslan"
                onChange={formik.handleChange}
                value={formik.values.emailRuslan}
              />
              {formik.errors.emailRuslan && (
                <div>{formik.errors.emailRuslan}</div>
              )}
              <br />
              <input
                type="password"
                name="passwordRuslan"
                onChange={formik.handleChange}
                value={formik.values.passwordRuslan}
              />
              {formik.errors.passwordErrorRuslan && (
                <div>{formik.errors.passwordErrorRuslan}</div>
              )}

              <br />
              <input
                type="text"
                name="fullName"
                onChange={formik.handleChange}
                value={formik.values.fullName}
              />
              {formik.errors.fullName && <div>{formik.errors.fullName}</div>}

              <br />
              <input
                type="file"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  formik.setFieldValue("image",e.target.files[0]);
                }}
              />

              <button type="submit">Gonder</button>
            </form>
          );
        }}
      </Formik>
    );
  }
}
