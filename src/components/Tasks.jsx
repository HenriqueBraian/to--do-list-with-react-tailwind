import { useState } from "react";
function Tasks({tarefas, onToggle, onDelete, onAdd}){

    const [input, setInput] = useState("");
    
    const handleSubmit = (e)=>{
      e.preventDefault();
      if(input.trim()){
        onAdd(input);
        setInput("")
      }
    }

    return(
        <div className="flex flex-col">
        <div className="flex items-center justify-center p-4">

            <h1 className="text-3xl mb-6 text-center">
              <i className="ri-list-check-3 text-blue-500"></i> 
              Minhas Tarefas
            </h1>

        </div>
        
         <form onSubmit={handleSubmit} className="w-full">
          <div className="flex gap-2 mb-6 mx-auto">

            <input type="text" 
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              placeholder="Digite uma tarefa..."
              className="bg-[f3f3f6] flex-1 px-3 py-2 text-black font-semibold border-none rounded-2xl ring-1 ring-gray-300"
            />
            <button type="submit" 
            className="bg-gray-950 
            hover:bg-gray-800 
            text-white 
            rounded-2xl 
            px-4 py2">
            <i className="ri-arrow-right-s-line"></i>
           </button>

          </div>
         </form>

          <ul className="space-y-3 w-full p-4 rounded-2xl shadow bg-gray-50">
            {tarefas.map( (tarefa)=>

            <li key={tarefa.id} className="flex justify-between bg-cyan-100 px-4 py-2.5 rounded-md ">
                <div className="flex items-center gap-3">

                <input 
                  checked={tarefa.isCompleted}
                  type="checkbox"
                  onChange={()=>onToggle(tarefa.id)}
                 />

                 <span className={tarefa.isCompleted 
                 ? "line-through text-gray-400" 
                 : "text-black"}>
                    {tarefa.title}
                 </span> 
    
                </div>
                
            <button title="delete-task"
            onClick={()=> onDelete(tarefa.id)}
            className="cursor-pointer"> 
            <i className="ri-delete-bin-line text-red-700"></i>
            </button>

            </li>

        )}</ul>

      </div>
       
    )   
}

export default Tasks;