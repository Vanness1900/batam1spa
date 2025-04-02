

function Stats(){
    return(
        <div className="grid h-48 grid-cols-2 md:grid-cols-4 place-content-evenly 
                        gap-4 lg:gap-12 xl:gap-24
                        md:h-32
                        my-4 lg:my-8
                        ">
            <div className="relative justify-center items-center">
                <span className="absoulte inset-0 flex justify-center items-center font-tertiary text-7xl md:text-8xl lg:text-[108px] xl:text-[128px] text-c-black-2">128</span>
                <p className="absolute inset-0 flex justify-center items-center">Wellness Product</p>
            </div>
            <div className="relative justify-center items-center">
                <span className="absoulte inset-0 flex justify-center items-center font-tertiary text-7xl md:text-8xl lg:text-[108px] xl:text-[128px] text-c-black-2">63</span>
                <p className="absolute inset-0 flex justify-center items-center">Holistic Treatments</p>
            </div>
            <div className="relative justify-center items-center">
                <span className="absoulte inset-0 flex justify-center items-center font-tertiary text-7xl md:text-8xl lg:text-[108px] xl:text-[128px] text-c-black-2">12</span>
                <p className="absolute inset-0 flex justify-center items-center">Lux Spa Experience</p>
            </div>
            <div className="relative justify-center items-center">
                <span className="absoulte inset-0 flex justify-center items-center font-tertiary text-7xl md:text-8xl lg:text-[108px] xl:text-[128px] text-c-black-2">56</span>
                <p className="absolute inset-0 flex justify-center items-center">Expert Therapist</p>
            </div>
        </div>
    );
}

export default Stats