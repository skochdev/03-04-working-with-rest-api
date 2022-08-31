import { Field, Form, Formik } from 'formik';

export const MaterialEditor = ({ onSubmit }) => {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    await onSubmit(values);
    setSubmitting(false);
    resetForm();
  };
  return (
    <div>
      <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => {
          return (
            <Form>
              <label>
                Title
                <Field name="title" type="text" />
              </label>
              <label>
                Link
                <Field name="link" type="url" />
              </label>
              <button type="submit" disabled={isSubmitting}>
                Add Material
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
