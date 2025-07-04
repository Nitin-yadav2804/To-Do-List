import { useState } from "react"
import Button from "../Button/Button"


function ToDoList({text, handleDelete}) {

    const [isEditing, setIsEditing] = useState(false)
    const [editedText, setEditedText] = useState(text)
    const [isChecked, setIsChecked] = useState(false)

    const handleEdit = () => {
        setIsEditing(!isEditing);
    }
    const handleCheck = () => {
        setIsChecked(!isChecked);
    }

  return (
    <div className={`flex gap-5 justify-between  text-black text-2xl p-5 border-2 border-black  dark:text-white dark:border-gray-300 w-[700px] rounded-2xl  ${isChecked? 'bg-gray-500 dark:bg-gray-600':'bg-white dark:bg-black'}`}>
        <input 
            type="checkbox" 
            onChange={handleCheck}
        />
        { isEditing? <textarea
                        type="text"
                        value={editedText}
                        className="w-[500px] p-2 border-1 rounded-xl scroll-auto overflow-y-auto"
                        onChange={(e) => {
                            setEditedText(e.target.value)
                        }}
                    />
                :
                    <span className={`flex flex-wrap items-center w-[500px] ${isChecked? 'line-through' : ''}`} >
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
                customCSS={`rounded-2xl transition-colors w-[50px] h-[50px] ${isChecked? 'bg-white/20 dark:bg-black/20' : 'hover:text-green-700 hover:bg-green-100 hover:border-green-600 hover:ease-in-out'} `}
                btnDisabled={isChecked}
            />
            <Button
                text={<i className="fa-solid fa-trash"></i>}
                onClickHandler={handleDelete}
                customCSS="rounded-2xl hover:text-red-700 hover:bg-red-100 hover:border-red-600 hover:ease-in-out transition-colors w-[50px] h-[50px] "
            />
        </div>
    </div>
  )
}

export default ToDoList
