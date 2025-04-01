

function Stats(){
    return(
        <div className="grid h-48 grid-cols-2 place-content-evenly
                        md:grid-cols-4 md:h-32">
            <div className="relative justify-center items-center">
                <span className="absoulte inset-0 flex justify-center items-center font-tertiary text-7xl lg:text-8xl xl:text-[128px] text-c-black-2">128</span>
                <span className="absolute inset-0 flex justify-center items-center">Wellness Product</span>
            </div>
            <div className="relative justify-center items-center">
                <span className="absoulte inset-0 flex justify-center items-center font-tertiary text-7xl lg:text-8xl xl:text-[128px] text-c-black-2">63</span>
                <span className="absolute inset-0 flex justify-center items-center">Holistic Treatments</span>
            </div>
            <div className="relative justify-center items-center">
                <span className="absoulte inset-0 flex justify-center items-center font-tertiary text-7xl lg:text-8xl xl:text-[128px] text-c-black-2">12</span>
                <span className="absolute inset-0 flex justify-center items-center">Lux Spa Experience</span>
            </div>
            <div className="relative justify-center items-center">
                <span className="absoulte inset-0 flex justify-center items-center font-tertiary text-7xl lg:text-8xl xl:text-[128px] text-c-black-2">56</span>
                <span className="absolute inset-0 flex justify-center items-center">Expert Therapist</span>
            </div>
        </div>
    );
}

export default Stats