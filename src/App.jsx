import { useEffect, useState } from "react";
import ToDoHeader from "./shared/components/ToDoHeader";
import ToDoItem from "./shared/components/ToDoItem";
import { getToDoItems, createToDoItem, deleteToDoItem, editToDoItem } from "./shared/utils/helpers";

function App() {

  const [toDoItems, setToDoItems] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const handleCreateItem = () => {
    createToDoItem(name, description).then((data) => {
      setToDoItems([...toDoItems, data])
      setName("")
      setDescription("")
    })
  }

  const handleEdit = (id, completed) => {
    editToDoItem(id, completed).then((data) => {
      setToDoItems(toDoItems.map((item) => {
        if (item.id === id) {
          return { ...item, completed: completed }
        } else {
          return item
        }
      }))
    })
  }

  const handleDelete = (id) => {
    deleteToDoItem(id).then((data) => {
      const filteredItems = toDoItems.filter((item) => item.id !== id)
      setToDoItems([...filteredItems])
    })
  }

  useEffect(() => {
    const exec = async () => {
      setToDoItems(await getToDoItems())
    }
    exec()
  }, [])

  return (
    <div className="App">
      <ToDoHeader name={name} description={description} handleName={setName} handleDescription={setDescription} handleCreateItem={handleCreateItem} />
      {toDoItems.map((item, index) => (
        <ToDoItem
          key={index}
          name={item.name}
          description={item.description}
          completed={item.completed}
          handleDelete={() => handleDelete(item.id)}
          handleComplete={() => handleEdit(item.id, !item.completed)}
        />
      ))}
    </div>
  );
}


export default App;
