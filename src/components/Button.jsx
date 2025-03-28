

function ButtonCommon({text}){
    return(
        <button className="px-4 py-2 max-w-max
                            hover:bg-c-gold-1 focus:outline-none focus:ring-2 focus:ring-c-gold-1
                            border-1 rounded-sm transition-all duration-300">
            <span className="uppercase xl:text-c-p1">{text}</span>
        </button>
    );
}

export default ButtonCommon