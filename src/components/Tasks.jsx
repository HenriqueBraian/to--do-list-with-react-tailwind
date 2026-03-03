function Tasks({tarefas, onToggle, onDelete}){
    return(
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
    )   
}

export default Tasks;