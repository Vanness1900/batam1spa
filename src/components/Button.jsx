

function ButtonCommon({text}){
    return(
        <button className="px-4 py-2 border-1 rounded-sm
                            max-w-max
                            transition-all duration-300
                            hover:bg-c-gold-1 focus:outline-none focus:ring-2 focus:ring-c-gold-1">
            <span className="uppercase">{text}</span>
        </button>
    );
}

export default ButtonCommon