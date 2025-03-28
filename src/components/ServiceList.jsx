

function ServiceList({name, duration, price}){
    return(
        <div className="space-y-2 pb-4">
            <div>
                <div className="flex justify-between items-end">
                    <a href="#" alt={name}><h4 className="uppercase hover:text-c-gold-1">{name}</h4></a>
                    <h6>${price}</h6>
                </div>
                <div className="flex space-x-1 items-center text-c-black-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p>{duration}</p>
                </div>
            </div>
            <div className="h-[1px] w-full bg-c-gold-1" />
        </div>
    );
}

export default ServiceList