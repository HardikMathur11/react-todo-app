import React, {useState , useEffect} from 'react';
import ReactDOM from 'react-dom/client';
    

function Todo()
{
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [desc , setdesc] = useState("");

    
 function deleteodo(indexofdelete)
    {
        setTodos(todos.filter((todo , index) => index !== indexofdelete));

    }

 function completedtodo(index) {
    const updatedtodos = todos.map((todo , i) => 
    {
        if(i == index)
        {
             return { ...todo , completed: !todo.completed };
        }

        else{
            return todo;
        }
    })

    setTodos(updatedtodos);
 }
    
   function addtodo()
    {
        if (todo.trim() === "" || desc.trim() === "")
            return alert('Please provide both title and description.');

        // setTodos([...todos, todo]);
        //  setTodo("");
          const newtodo = {title:todo , description : desc , completed:false , date: new Date().toLocaleDateString() };
         setTodos([...todos , newtodo]);
         setTodo("");
         setdesc("");
    }

   


    return(
        <>
        <h1>📝 My Todo List</h1>
        <h2>Add a New Task</h2>
        <input type="text" placeholder="Enter task title" value={todo} onChange={(e) => setTodo(e.target.value)} ></input>
        <input type="text" placeholder="Enter task description" value={desc} onChange={(e) => setdesc(e.target.value)} ></input>
         <button className='add' onClick={addtodo}>Add</button>
        <h2>📋 Your Tasks</h2>
        
        
              <ul>
                {
            todos.map(({title , description , completed , date }, index) =>
            {
                  return ( <li key={index} className={`todo-item ${completed ? 'completed' : ''}`}>
                    <div className='show'>
                    <h4>{title}</h4><button className='delto' onClick={() => deleteodo(index)}>Delete</button>
                    </div>
                    <div className='show'>
                    <p>{description}</p>
                     <input
            type="checkbox"
            checked={completed}
            onChange={() => completedtodo(index)}
          />
                    </div>
                    <p className='date'>Added on : {date}</p>
                  </li>
                  
                  )

            })
        }
            </ul>
        
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Todo />);


