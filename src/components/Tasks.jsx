function Tasks(props){
    return(
        
        <ul className="space-y-3 w-full p-4 rounded-2xl shadow bg-gray-50">
            {props.tarefas.map( (e)=> 
            <li key={e.id} className="flex justify-between bg-cyan-100 px-4 py-2.5 rounded-md "> <input type="checkbox" /> {e.title}
             <button className="cursor-pointer"> <i className="ri-delete-bin-line text-red-700"></i></button>
            </li>
        )}</ul>
    )   
}

export default Tasks;