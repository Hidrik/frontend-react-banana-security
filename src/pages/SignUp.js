import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useForm} from "react-hook-form";
import {AuthContext} from "../context/AuthContext";

function SignUp() {
    const { handleSubmit, formState: { errors }, register } = useForm();
    const {loginFunction} = useContext(AuthContext)
    const history = useHistory()

    function registerForm() {
        loginFunction()
        history.push('/profile')
    }

    return (
      <>
        <h1>Registreren</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
          harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
          doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form onSubmit={
          handleSubmit(registerForm)}>
          <label> Gebruikersnaam: </label>
          <input name='userName' type='text' {
              ...register('userName',
                  {required: 'Moet een gebruikersnaam ingevoerd worden'})}/>
          <p>{errors.userName && errors.userName.message}</p>
          <label> Wachtwoord: </label>
          <input type='password' {...register('password',
              {required: 'Moet een wachtwoord ingevoerd worden'})}/>
          <p>{errors.password && errors.password.message}</p>
          <label> Email: </label>
          <input type='text' {...register('email',
              {required: 'Moet een e-mail ingevoerd worden'})}/>
          <p>{errors.email && errors.email.message}</p>
          <button>Registreren</button>
      </form>
        <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
      </>
    );
}

export default SignUp;