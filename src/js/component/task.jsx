import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

function Task() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    const handleCheckboxChange = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };

    return (
        <>
            <li className="list-group-item border border-0">
                <div className="input-group">
                    <div className="input-group-text">
                    <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox"
                        onChange={() => handleCheckboxChange(index)}
                        disabled />
                    </div>
                    <input
                        className="form-control"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Tarea Nueva"
                    />
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        id="button-addon1"
                        onClick={handleAddTask}>
                        <FaPlus />
                    </button>
                </div>
            </li>
            <ul className="list-group list-group-flush rounded-0">
                {tasks.map((task, index) => (
                    <li key={index} className="list-group-item border border-0">
                        <div className="input-group">
                            <div className="input-group-text">
                            <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox"
                                onChange={() => handleCheckboxChange(index)}
                                />
                            </div>
                            <input
                                className="form-control"
                                type="text"
                                value={task}
                                 
                            />
                            
                        </div>
                    </li>
                ))}
            </ul>
            <p className='text-white py-1'><small>Tareas Pendientes: <strong>{tasks.length}</strong> ◝(ᵔᗜᵔ)◜</small></p>
        </>
    );
}

export default Task;
