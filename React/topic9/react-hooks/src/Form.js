import { useFormik } from "formik";

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      age: "",
    },
    validate: (values) => {
      const error = {};

      if (!values.full_name) {
        error.full_name = "ad bos ola bilmez";
      }

      if (!values.age) {
        error.age = "Age bos ola bilmez";
      }
      return error;
    },
    onSubmit: (values, action) => {
      console.log("values", values);
      action.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <br />
      <br />

      <div>
        <input
          placeholder="full name"
          name="full_name"
          onChange={formik.handleChange}
          value={formik.values.full_name}
        />
        <br />
        {formik.errors.full_name && <small>{formik.errors.full_name}</small>}
      </div>

      <div>
        <input
          placeholder="age"
          name="age"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <br />
        {formik.errors.age && <small>{formik.errors.age}</small>}
      </div>

      <div>
        <button type="sumbit">Submit</button>
      </div>
    </form>
  );
};
