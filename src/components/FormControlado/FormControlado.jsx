import { useState } from "react";

const FormControlado = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handlerInputEmail = (event) => {
    console.log("Email");
    setForm({ ...form, email: event.target.value });
  };

  const handlerInputPassword = (event) => {
    console.log("Password");
    setForm({ ...form, password: event.target.value });
  };
  return (
    <>
      <h2 className="text-center">Modulo de Formulario</h2>
      <input
        type="text"
        name="email"
        className="form form-control mt-2"
        id=""
        placeholder="Ingresar email"
        autoComplete="off"
        value={form.email}
        onChange={(e) => handlerInputEmail(e)}
      />
      <input
        type="password"
        name="password"
        className="form form-control mt-2"
        id=""
        placeholder="Ingresar password"
        autoComplete="off"
        value={form.pasword}
        onChange={(e) => handlerInputPassword(e)}
      />
    </>
  );
};

export default FormControlado;
