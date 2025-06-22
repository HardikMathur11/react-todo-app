import react, {useState , useEffect} from 'react';
 import ReactDOM from 'react-dom/client';



  

function Todo()
{
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [desc , setdesc] = useState("");
    const [time , settime] = useState("");




  
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

 function deletetodo(id) {
    const updated = todos.filter((item) => item.id !== id);
    setTodos(updated);
  }

  function addtodo() {
    if (todo.trim() === "" || desc.trim() === "") {
      return alert("Please provide both title and description.");
    }

    const newTodo = {
      id: Date.now(),
      title: todo,
      description: desc,
      completed: false,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    setTodos([...todos, newTodo]);
    setTodo("");
    setdesc("");
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
            todos.map(({id ,title , description , completed , date , time }, index) =>
            {
          return (
            <li key={index} className={`todo-item ${completed ? 'completed' : ''}`}>
              <>
                <div className='show'>
                  <h4>{title}</h4>
                  <button className='delto' onClick={() => deletetodo(id)}>Delete</button>
                </div>
                <div className='show'>
                  <p>{description}</p>
                  <label className="checkbox-wrapper">
  <input
    type="checkbox"
    checked={completed}
    onChange={() => completedtodo(index)}
  />
  <span className="checkmark"></span>
</label>
                </div>
                <p className='date'>Added on : {date}</p>
              </>
            </li>
          )

            })
        }
            </ul>
        
        </>
    )
}


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<Todo onlogout={() => console.log("Logout clicked")} />);