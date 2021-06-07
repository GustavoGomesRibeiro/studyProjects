import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Content = styled.div`
  background: #fff;
  width: 80%;
  height: 60%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`;

export const Img = styled.div`
  width: 50%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Sign = styled.div`
  background: #2a2f4b;
  width: 50%;
  /* height: 100%; */
  /* border-radius: 10px; */
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 60%;
  }

  input {
    margin-top: 20px;
    width: 50%;
    border: none;
    background: transparent;
    border-bottom: 1px solid #fff;
    outline: none;
  }

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }

  button {
    margin-top: 20px;
    width: 50%;
    height: 30px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    -webkit-transition: 0.3s ease-in-out;
    -moz-transition: 0.3s ease-in-out;
    -ms-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    opacity: 1;
    box-shadow: 10px 5px 5px black;
  }

  button:hover {
    opacity: 0.8;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    color: #fff;
    font-size: 32px;
    font-family: "Roboto", sans-serif;
    margin: 20px 0px;
    padding: 10px 0px;
  }
  span {
    color: #fff;
    font-size: 16px;
  }
`;
