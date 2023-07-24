import { Formik, Form, Field } from "formik";
import axios from "axios";

function AddAdministrador() {
  return (
    <>

      <Formik
        initialValues={{
          nombre: "",
          email: "",
          contrasena: ""
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          await axios.post(`http://localhost:3001/api/administradores`, values);
          actions.resetForm();
          alert("Datos agregados correctamente");
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <div className="container mx-auto w-1/2 p-8">
            <h2 className="font-black text-3xl text-center">Agregar nuevo Administrador</h2>
            <Form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nombre" className="block font-medium">
                  Nombre
                </label>
                <Field
                  type="text"
                  name="nombre"
                  onChange={handleChange}
                  value={values.nombre}
                  className="form-input mt-1 block w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  className="form-input mt-1 block w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="contrasena" className="block font-medium">
                  Contraseña
                </label>
                <Field  
                  type="text"
                  name="contrasena"
                  onChange={handleChange}
                  value={values.contrasena}
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

export default AddAdministrador;