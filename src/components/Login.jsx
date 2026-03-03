import React, { useState } from "react";


   function Login({onLogin}){
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const handleSubmit = (e)=>{
        e.preventDefault();
        onLogin(email,password)
      };

      return(
      <div className="w-full">

      <form onSubmit={handleSubmit} className="bg-slate-200 p-8 flex flex-col items-center justify-center rounded-2xl gap-5 w-full max-w-sm shadow-md shadow-blue-700 mx-auto">

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
        type="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        placeholder='Digite seu email' id='email'
        autoComplete="off"

        className="px-3 py-2 font-semibold placeholder:gray-500 text-black rounded-2xl border-none ring-1 ring-gray-300 focus:ring-gray-500 focus:ring-2"
        />
        </div>

           {/* password field */}
        <div className="flex flex-col items-start gap-2">
        <label htmlFor="password" className="font-primary font-semibold text-gray-700"><i className="ri-lock-line"></i>Sua senha</label>

        <input 
        type="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
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