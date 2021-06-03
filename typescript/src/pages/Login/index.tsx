import React from "react";
import { Container, Content, Img, Sign, Text } from './styles';
import login_svg from '../../assets/img/login.svg';

export default function Login() {
  return (
    <Container>
      <Content>
        <Img>
          <img src={login_svg} alt="login_svg"/>
        </Img>
        <Sign> 
          <Text>
            <p>Login to your account</p>
            <span>Don't have an account? Sing up!</span>
          </Text>
          <form>
            <input type="text"/>
            <input type="password"/>
            {/* <input type="submit"/> */}
          </form>
        </Sign>
      </Content>
    </Container>
  );
}
