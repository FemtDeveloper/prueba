import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const LoginForm = ({ Login, error }) => {
  const [person, setPerson] = useState({ name: null, lastName: null });
  const handlerSubmit = (e) => {
    e.preventDefault();
    Login(person);
    setPerson({ name: "", lastName: "" });
  };

  const handleChange = ({ target }) => {
    const {value, id} = target;
  setPerson( (state) => ({ ...state, [id]: value }))
  }

  return (
    <div className="right-container">
      {error ? <h1 className="no-matches">No matches</h1> : ""}
      <div className="form-container">
        <form>
          <div className="inputs">
            <input
              className="input-form"
              type="text"
              placeholder="First Name"
              name="name"
              id="name"
              onChange={handleChange}
            />
            <input
              className="input-form"
              type="text"
              placeholder="Last Name"
              name="lastName"
              id="lastName"
              onChange={(e) =>
                setPerson(handleChange )
              }
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            onClick={handlerSubmit}
            style={{ fontSize: 10 }}
          >
            Iniciar sesión
          </Button>
          <p className="form__paragraph">
            <a href="">¿Olvidaste tu contraseña?</a>
          </p>
          <hr />
          <button className="account-btn">Crear cuenta nueva</button>
        </form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  LoginForm: PropTypes.func,
  error: PropTypes.bool
}

export default LoginForm;
