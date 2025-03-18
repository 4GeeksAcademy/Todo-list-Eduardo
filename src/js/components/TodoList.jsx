import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [hoveredTaskIndex, setHoveredTaskIndex] = useState(null);


    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };


    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTask();
        }
    };

    return (
        <div>
            <div className='container'>
                <h1>Lista de Tareas</h1>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Añade una nueva tarea"
                />
                <button onClick={addTask}>Agregar</button>
                <ul>
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            onMouseEnter={() => setHoveredTaskIndex(index)}
                            onMouseLeave={() => setHoveredTaskIndex(null)}
                        >
                            {task}
                            {hoveredTaskIndex === index && (
                                <button className='eliminar' onClick={() => deleteTask(index)}>
                                    Eliminar
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;