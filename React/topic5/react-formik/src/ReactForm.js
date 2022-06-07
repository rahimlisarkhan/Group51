import { Component } from "react";
import FormStyle from "./style.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik";

export class ReactForm extends Component {

    defaaulFormValues = { emailRuslan: "", passwordRuslan: "" ,fullName:""}



    handleSubmit(form,formikMethods){

        // form.fullName = form.fullName.toLowerCase()

        // form.isCountry = this.state.country


       console.log(form,"form");
       formikMethods.resetForm()
    }

    handleError(values){
        console.log(values,"Erros");
        const error = {}

        if(!values.emailRuslan){
            error.emailRuslan = "Email bos ola bilmez"
        }


        if(!values.passwordRuslan){
            error.passwordErrorRuslan = "Password bos ola bilmez"
        }


        if(!values.fullName){
            error.fullName = "Full name bos ola bilmez"
        }
        return error
    }


  render() {
    return (
      <Formik
        initialValues={this.defaaulFormValues}
        validate={this.handleError}
        onSubmit={this.handleSubmit}
      >
        {/* {({ isSubmitting }) => ( */}
          <Form>
            <Field className={FormStyle.inputContent} type="email" name="emailRuslan" />
            <ErrorMessage name="emailRuslan" component="div" />

            <Field className={FormStyle.inputContent} type="password" name="passwordRuslan" />
            <ErrorMessage name="passwordErrorRuslan" component="div" />

            <Field className={FormStyle.inputContent} type="text" name="fullName" />
            <ErrorMessage name="fullName" component="div" />
            <button type="submit">
              Submit
            </button>

          </Form>
        {/* )} */}
      </Formik>
    );
  }
}
