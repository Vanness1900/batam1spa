function Button({ 
    text, 
    className = "", 
    onClick, 
    disabled = false, 
    variant = "primary"
}) {
    // Base styles that are always applied
    const baseStyles = "px-4 py-2 border-1 rounded-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-c-gold-1 uppercase text-center";
    
    // Variant styles
    const variants = {
        primary: "hover:bg-c-gold-1 border-c-white-1",
        secondary: "hover:bg-c-gold-1 border-c-white-1",
        outline: "border-c-gold-1 hover:bg-c-white-1"
    };
    
    
    // Disabled styles
    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed hover:bg-transparent" : "";
    
    // Combine all styles
    const combinedStyles = `
        ${baseStyles} 
        ${variants[variant]} 
        ${disabledStyles} 
        ${className}
    `.trim().replace(/\s+/g, ' ');
    
    return(
        <button 
            className={combinedStyles}
            onClick={onClick}
            disabled={disabled}
        >
            <span>{text}</span>
        </button>
    );
}

export default Button