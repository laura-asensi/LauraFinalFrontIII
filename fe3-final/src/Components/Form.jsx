import React from "react";
import { useState } from "react";


const [values, setValues] = useState({
  name: '',
  email: ''
});

const [message, setMessage] = useState(false);
const [error, setError] = useState(false);

const onHandlerChange = (e) => {
  const { name, value } = e.target;
  setValues({ ...values, [name]: value });
}

const validName = (name) => {
  return name.length >= 5
}

const validEmail = (email) => {
  let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  return validEmail.test(email)

  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text"
          name='name'
          placeholder='Ingrese su nombre completo'
          onChange={onHandlerChange}
          value={values.name} />
        <input type="Ingrese su email"
          name='email'
          placeholder='email'
          onChange={onHandlerChange}
          value={values.email} />
        <button type='submit'>Enviar</button>
      </form>
      {message && <div>Gracias {values.name}, te contactaremos cuanto antes vía mail</div> }
      {error && <div>Por favor verifique su información nuevamente!</div>}
    </div>
  );
};

export default Form;