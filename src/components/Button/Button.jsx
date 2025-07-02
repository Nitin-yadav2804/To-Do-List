

function Button({text, onClickHandler, customCSS=''}) {


  return (
    <button
    className={`bg-white p-2 w-[100px] border-2 border-black text-2xl font-bold text-black dark:bg-black dark:border-gray-300 dark:text-white hover:cursor-pointer rounded-r-2xl ${customCSS}`}
        onClick={onClickHandler}
    >
      {text}
    </button>
  )
}

export default Button
