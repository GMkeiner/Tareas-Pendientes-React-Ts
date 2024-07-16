import { useState } from "react"

export const TodoApp = () => {

    const [ nuevaTarea, setnuevaTarea] = useState<string>('')
    const [ listaTareas, setListaTareas] = useState<string[]>([])
    const handleAddTask = () => {
    }

    return (        
        <div>
             <h1>Lista de Tareas</h1>
             <div>
                <input 
                type="text" 
                value={nuevaTarea}
                onChange={(e) => setnuevaTarea(e.target.value)}
                placeholder="Nueva Tarea"
                />
                <button onClick={handleAddTask}></button>
             </div>
             <ListaTareas></ListaTareas>
        </div>
    )
}