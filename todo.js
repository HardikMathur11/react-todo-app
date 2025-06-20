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


   
    
   function addtodo()
    {
        if (todo.trim() === "" || desc.trim() === "")
            return alert('Please provide both title and description.');

        // setTodos([...todos, todo]);
        //  setTodo("");
          const newtodo = {title:todo , description : desc };
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
         <button onClick={addtodo}>Add</button>
        <h2>📋 Your Tasks</h2>
        
        
              <ul>
                {
            todos.map(({title , description }, index) =>
            {
                  return ( <li key={index} className='todo-item'>
                    <div className='show'>
                    <h4>{title}</h4><button className='delto' onClick={() => deleteodo(index)}>Delete</button>
                    
                    </div>
                    <p>{description}</p>
                    
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


