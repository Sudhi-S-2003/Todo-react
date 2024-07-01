import { useState } from 'react';
import './todo.css';

function Todo() {
    const [todolist, setTodolist] = useState([]);
    const [input, setInput] = useState('');
    const [update, setUpdate] = useState(-1);

    const add = () => {
        if (input.length > 0) {
            if (update === -1) {
                setTodolist([...todolist,input]);
            } else {
                const updatedTodos = [...todolist];
                updatedTodos[update] = input;
                setTodolist(updatedTodos);
                setUpdate(-1);
            }
            setInput('');
        }
    };

    const deleteTodo = (indexToDelete) => {
        setTodolist(todolist.filter((_, index) => index !== indexToDelete));
    };

    const toggleEditable = (index) => {
        setInput(todolist[index]);
        setUpdate(index);
    };

    return (
        <div className='Todo-list'>
            <h1>Todo list</h1>
            <div className='head'>
                <input
                    type="text"
                    placeholder="Enter your todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={add}>{update === -1 ? 'Add' : 'Update'}</button>
            </div>
            <div className='todo-list'>
                {todolist.map((item, index) => (
                    <div className='todo' key={index}>
                        <p>{item}</p>
                        <i
                            className='fa fa-trash'
                            aria-hidden="true"
                            onClick={() => deleteTodo(index)}
                        ></i>
                        <i
                            className='fa fa-exchange'
                            title='Edit'
                            aria-hidden="true"
                            onClick={() => toggleEditable(index)}
                        ></i>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todo;
