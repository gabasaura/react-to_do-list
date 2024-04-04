import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa";


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
        newTasks[index] = { ...newTasks[index], completed: !newTasks[index].completed };
        setTasks(newTasks);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    return (
        <>
            {tasks.length === 0 && (
                <h6 className="text-primary mx-3 mt-5 text-center">START LIST</h6>
            )}
            <li className="list-group-item border border-0 mt-3">
                <div className="input-group">
                    <div className="input-group-text">
                        <input
                            className="form-check-input mt-0"
                            type="checkbox"
                            value=""
                            aria-label="Checkbox"
                            disabled
                        />
                    </div>
                    <input
                        className="form-control shadow-none"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="YOUR TASK HERE"
                    />
                    <button
                        className="btn btn-outline-primary"
                        type="button"
                        id="button-addon1"
                        onClick={handleAddTask}
                    >
                        ADD NEW
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
                                    checked={task.completed}
                                    onChange={() => handleCheckboxChange(index)}
                                    disabled={task.completed}
                                />
                            </div>
                            <input
                                className="form-control shadow-none"
                                type="text"
                                value={task.text}
                                disabled={task.completed}
                            />
                            {task.completed && (
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => handleDeleteTask(index)}
                                >
                                    <FaTrash />
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
            <h6 className='text-bg-primary p-1 m-3 rounded-5 text-center'>PENDING TASKS: <strong>{tasks.filter(task => !task.completed).length}</strong></h6>
        </>
    );
}

export default Task;
