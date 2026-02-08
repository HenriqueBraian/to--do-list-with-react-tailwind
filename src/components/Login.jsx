import React from "react";
   function Login(){
      return(
        <div>
      <form action="">
        <label htmlFor="email">Seu emai</label>
        <input type="email" placeholder='Digite seu email' id='email'/>

        <label htmlFor="password">Sua senha</label>
        <input type="password" placeholder='Digite sua senha' id='password'/>
        
        <button type='submit'>Login</button>
      </form>
    </div>
      )
   }
   export default Login;