import { useState } from "react";

function ToDo(){
    const [task, setTask] = useState([])

    return(
      <div className="min-h-screen p-8 bg-cyan-200 flex flex-col items-center">
        {/* Card white */}
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">

        {/* <----------!---------> */}
        <div className="flex items-center p-4">
            <h1 className="text-3xl mb-6 text-center"><i className="ri-list-check-3 text-blue-500"></i> Lista de Tarefas</h1>
        </div>

        {/* <----------!---------> */}
        <div className="flex gap-2 mb-6">
        <input placeholder="Digite uma nova tarefa..."
        className="px-3 py-2 font-semibold placeholder:gray-500 text-black rounded-2xl border-none ring-1 ring-gray-300 focus:ring-gray-500 focus:ring-2"
        />
        <button className="bg-black text-white rounded-2xl px-1.5 cursor-pointer">Adicionar</button>
        </div>
        
        <div >
        </div>
        </div>
      </div>
    )
}
export default ToDo;