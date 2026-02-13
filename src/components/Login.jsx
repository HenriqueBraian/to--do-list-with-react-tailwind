import React, { useState } from "react";


   function Login({handleLogin}){
      const [userEmail, setUserEmail] = useState('');
      const [userPassword, setUserPassword] = useState('');

      const submitHandler = (e)=>{
         e.preventDefault();
        const email = "bryan@email.com",
              password = "Admin@Admin";

        if( userEmail === email && userPassword === password ){
          handleLogin(true)
          console.log("Login bem sucedido")
        }else{
          alert("Dados incorretos")
          handleLogin(false)
        }      
      }

      return(
      <div className="min-h-screen p-4 bg-cyan-600 flex flex-col items-center justify-center">

      <form onSubmit={submitHandler} action="" className="bg-slate-200 p-8 flex flex-col 
                                items-center justify-center rounded-2xl gap-5 w-full max-w-sm 
                                shadow-xl shadow-blue-900 ">

        <div className="text-center">
          <i className="ri-account-pin-box-line text-4xl text-blue-500"></i>
          <h1 className="font-primary text-2xl font-bold text-gray-800 mt-2">Bem-vindo</h1>
          <p className="font-primary text-gray-500 text-sm">Digite seus dados abaixo</p>
        </div>

        {/* email field */}
        <div className="flex flex-col items-start gap-2">

        <label htmlFor="email" className="font-primary font-semibold
         text-gray-700"><i className="ri-mail-line"></i> Seu e-mail</label>

        <input 
        value={userEmail} 
        onChange={(e)=> setUserEmail(e.target.value)}
        type="email" 
        placeholder='Digite seu email' id='email'
        autoComplete="off"

        className="px-3 py-2 font-semibold placeholder:gray-500 text-black rounded-2xl border-none ring-1 ring-gray-300 focus:ring-gray-500 focus:ring-2"
        />
        </div>

           {/* password field */}
        <div className="flex flex-col items-start gap-2">
        <label htmlFor="password" className="font-primary font-semibold text-gray-700"><i className="ri-lock-line"></i>Sua senha</label>

        <input 
        value={userPassword}
        onChange={(e)=> setUserPassword(e.target.value)} 
        type="password" 
        placeholder='Digite sua senha' 
        id='password'
        className="px-3 py-2 font-semibold placeholder:gray-500 text-black rounded-2xl border-none ring-1 ring-gray-300 focus:ring-gray-500 focus:ring-2"
        />
        </div>

        <div className=" mt-0 text-center font-primary text-sm cursor-pointer">
          <a href="#" className="hover:text-gray-700">Esqueci minha senha</a>
         </div>
        
        <button type='submit' className="bg-blue-400 p-2 w-full rounded-2xl hover:bg-blue-500 shadow-2xl font-primary tracking-widest"> Login </button>
      </form>

    </div>
      )
   }
   export default Login;