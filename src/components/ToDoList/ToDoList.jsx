import { useState } from "react"
import Button from "../Button/Button"


function ToDoList({text, handleDelete}) {

    const [isEditing, setIsEditing] = useState(false)

    const [editedText, setEditedText] = useState(text)

    const handleEdit = () => {
        setIsEditing(!isEditing);

    }

  return (
    <div className="flex gap-5 justify-between bg-white text-black text-2xl p-5 border-2 border-black dark:bg-black dark:text-white dark:border-gray-300 w-[700px] rounded-2xl">
        { isEditing? <textarea
                        type="text"
                        value={editedText}
                        className="w-[400px] p-2 border-1 rounded-xl"
                        onChange={(e) => {
                            setEditedText(e.target.value)
                        }}
                    />
                :
                    <span className="flex flex-wrap items-center w-[400px] " >
                        {editedText}
                    </span>
        }
        <div className="flex gap-2 justify-center items-end">
            <Button 
                text={
                    isEditing?  (<i className="fa-solid fa-check"></i>) 
                            : 
                                (<i className="fa-solid fa-pencil"></i>)
                }
                onClickHandler={handleEdit}
                customCSS="rounded-2xl hover:text-green-700 hover:bg-green-100 hover:border-green-600 hover:ease-in-out transition-colors "
            />
            <Button
                text={<i className="fa-solid fa-trash"></i>}
                onClickHandler={handleDelete}
                customCSS="rounded-2xl hover:text-red-700 hover:bg-red-100 hover:border-red-600 hover:ease-in-out transition-colors "
            />
        </div>
    </div>
  )
}

export default ToDoList
