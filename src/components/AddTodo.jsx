import { react,useState } from "react";

function AddToDo(){
   return(
      <div className="w-full">
        <div className="flex items-center justify-center p-4">
            <h1 className="text-3xl mb-6 text-center"><i className="ri-list-check-3 text-blue-500"></i> Minhas Tarefas</h1>
        </div>

        
        <div className="flex w-full gap-2 mb-6">
        <input type="text" placeholder="Digite uma nova tarefa..."
        className=" bg-[#f3f3f6] flex-1 px-3 py-2 font-semibold placeholder:gray-500 text-black rounded-2xl border-none ring-1 ring-gray-300 focus:ring-gray-300 focus:ring-2"
        />
        <button className="bg-gray-950 hover:bg-gray-800 text-white rounded-2xl px-4 py-2 cursor-pointer">Adicionar</button>
        </div>
        
      </div>
    )
}
export default AddToDo;

{/*  */}