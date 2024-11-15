import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const {userLogin} = useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()
    
    if(username.validate() && password.validate()) {

      userLogin(username.value, password.value);
    }
  }

  return <section>
    <h1>Login</h1>
    <form action="" onSubmit={handleSubmit}>
    
      <Input type='text' label='Usuário' name='username' {...username} />
      <Input type='password' label='Senha' name='password' {...password} />
      
      <Button>Entrar</Button>
    </form>
    <Link to='/login/criar'>Cadastro</Link>

  </section>;
};

export default LoginForm;
