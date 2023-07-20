import { Formik, Form, Field } from "formik";
import axios from "axios";

function AddUser() {
  return (
    <>

      <Formik
        initialValues={{
          UserName: "",
          Password: ""
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          await axios.post("http://localhost:3000/users", values);
          actions.resetForm();
          alert("Datos agregados correctamente");
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <div className="container mx-auto w-1/2 p-8">
            <h2 className="font-black text-3xl text-center">Agregar nuevo usuario</h2>
            <Form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="UserName" className="block font-medium">
                  Usuario
                </label>
                <Field
                  type="text"
                  name="UserName"
                  onChange={handleChange}
                  value={values.UserName}
                  className="form-input mt-1 block w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Password" className="block font-medium">
                  Password
                </label>
                <Field
                  type="text"
                  name="Password"
                  onChange={handleChange}
                  value={values.Password}
                  className="form-input mt-1 block w-full"
                />
              </div>
              <button type="submit" className="btn btn-success">
                Guardar
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}

export default AddUser;
