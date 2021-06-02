import React, { useState, useEffect } from "react";

interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  location: string;
}
//[User] chamada da function para definir como listagem, instanciar a interface como array. Type detecta auto.
export default function Home() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        "https://api.github.com/users/gustavogomesribeiro"
      );
      const data = await response.json();

      setUser(data);
    }

    getUser();
  }, []);

  return (
    <>
      <div> {user?.avatar_url}</div>
      {/* <button onClick={() => {}}>Click Here</button> */}
      {user?.name ? console.log(">> Foi renderizado <<") : ""}
      {user?.name}
    </>
  );
}
