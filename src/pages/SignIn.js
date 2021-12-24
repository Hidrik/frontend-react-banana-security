import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import {useForm} from "react-hook-form";

function SignIn() {
    const {loginFunction} = useContext(AuthContext)
    const { handleSubmit, formState: { errors }, register } = useForm();

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit(loginFunction)}>
          <label> Gebruikersnaam: </label>
          <input name='userName' type='text' {
              ...register('userName',
                  {required: 'Moet een gebruikersnaam ingevoerd worden'})}/>
          <p>{errors.userName && errors.userName.message}</p>
          <label> Wachtwoord: </label>
          <input type='password' {...register('password',
          {required: 'Moet een wachtwoord ingevoerd worden'})}/>
          <p>{errors.password && errors.password.message}</p>
          <button>Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;