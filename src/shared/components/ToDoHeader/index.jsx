import "./styles.css"

const ToDoHeader = ({ handleCreateItem, handleName, handleDescription, name, description }) => {

    const handleCreateItemByEnter = (keyCode) => {
        if (keyCode == 13) {
            handleCreateItem()
        }
    }
    return (
        <header className="header-todo">
            <h2>
                My Todos
            </h2>
            <div className="container-todo-header">
                <div>
                    <div className="container-input">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => handleName(e.target.value)}
                            onKeyDown={(e) => handleCreateItemByEnter(e.keyCode)}
                        />
                    </div>

                    <div className="container-input">
                        <label htmlFor="">Description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => handleDescription(e.target.value)}
                            onKeyDown={(e) => handleCreateItemByEnter(e.keyCode)}
                        />
                    </div>
                </div>

                <div>
                    <button onClick={() => handleCreateItem()}>
                        Add Todo
                    </button>
                </div>
            </div>

        </header>

    )
}

export default ToDoHeader;