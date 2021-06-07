import React, { useState, useRef } from "react";
import { Container, Content, Img, Sign, Text } from "./styles";
import login_svg from "../../assets/img/login.svg";

import { useHistory } from "react-router-dom";

interface Auth {
  username: string;
  password: string;
}

export default function Login() {
  const inputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const [sign, setSign] = useState<Auth>({
    username: "",
    password: ""
  });

  const onClickButton = () => {
    inputRef.current?.focus();
  };

   async function handleSubmit() {
    // event: React.FormEvent<HTMLInputElement>
    // event.preventDefault();
     try {
      if (!sign.username || !sign.password) {
        alert("Ops!! Something it's wrong here!");
      }

      // const response = await fetch('/', {
      //   sign: sign.username,
      //   sign: sign.password
      // })

      // localStorage.setItem('Id', response.data.id);
      localStorage.setItem('Username', sign.username);
      localStorage.setItem('Password', sign.password);
  
      history.push('/Home');
      
    } catch (error) {
      console.log(error, ">> error <<")
      error("Usuario ou senha estão incorretos");
      alert(error("Usuario ou senha estão incorretos"));
    }
  }

  return (
    <Container>
      <Content>
        <Img>
          <img src={login_svg} alt="login_svg" />
        </Img>
        <Sign>
          <Text>
            <p>Login to your account</p>
            <span>Don't have an account? Sign up!</span>
          </Text>
          <form ref={onClickButton} onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={sign?.username}
              onChange={ e => setSign({...sign, username: e.target.value})}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={sign?.password}
              onChange={ e => setSign({...sign, password: e.target.value})}

            />
              <button type="submit">
                Entrar
              </button>
          </form>
        </Sign>
      </Content>
    </Container>
  );
}
