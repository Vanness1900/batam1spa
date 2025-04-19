import { Link } from 'react-router-dom'

import Logo from '../../assets/Gold_Horizontal_Primary_150DPI.png'

function Footer() {
    return(
        <div className="
                        grid grid-cols-2
                        px-8 
                        py-8 lg:py-12 xl:py-18
                        space-y-8
                        gap-4 lg:gap-12 xl:gap-24
                        ">
            <img src={Logo}
                alt="Batam1Spa Logo" 
                className=""
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}/>

            <div>
                <span>Services</span>
            </div>
        </div>


        // <div className="
        //                 px-8 
        //                 py-8 lg:py-12 xl:py-18
        //                 space-y-8
        //                 lg:gap-12 xl:gap-24
        //                 ">
        //     <img src={Logo}
        //             alt="Batam1Spa Logo" 
        //             className="w-1/2"
        //             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}/>

        //     <div className="
        //                     grid grid-rows-4 gap-8
        //                     ">
        //         <div className="flex flex-col space-y-2">
        //             <Link to="/">
        //                 <button className="hover:text-c-gold-1"
        //                         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        //                         >Home</button>
        //                 <div className="h-[1px] bg-c-gold-1" />
        //             </Link>
        //             <Link to="/">
        //                 <p>Our Story</p>
        //             </Link>
        //             <Link to="/">
        //                 <p>Featured Services</p>
        //             </Link>
        //         </div>

        //         <Link to="/Facilities">
        //             <button className="hover:text-c-gold-1">Facilities</button>
        //             <div className="h-[1px] bg-c-gold-1" />
        //         </Link>

        //         <Link to="/Services">
        //             <button className="hover:text-c-gold-1">Services</button>
        //             <div className="h-[1px] bg-c-gold-1" />
        //         </Link>

        //         <Link to="/Contact">
        //             <button className="hover:text-c-gold-1">Contact</button>
        //             <div className="h-[1px] bg-c-gold-1" />
        //         </Link>
        //     </div>

        //     <div className="space-y-2
        //                     hidden lg:block">
        //         <div className="
        //                         grid grid-cols-4 gap-8
                                
        //                         ">
        //             <span className="col-span-1 uppercase text-c-gold-1">Location</span>
        //             <span className="col-span-1 uppercase text-c-gold-1">Indonesia</span>
        //             <span className="col-span-2 uppercase text-c-gold-1">Kota Batam</span>
        //         </div>

        //         <div className="h-[1px] bg-c-gold-1"/>

        //         <div className="
        //                         grid grid-cols-4 gap-8
                                
        //                         ">
        //             <span className="col-span-1"></span>
        //             <span className="col-span-1"></span>
        //             <span className="col-span-2 text-c-gold-1">Komplek sarana wisata batamia,
        //                                                 Jl. Komp. Bumi Indah,
        //                                                 Kota Batam, Indonesia, 29432
        //             </span>
        //         </div>
        //     </div>

        //     <div className="
        //                     space-y-1
        //                     ">
        //         <div className="flex justify-center items-center gap-2">
        //             <span className="uppercase underline text-c-p6 text-c-gold-1 hover:text-c-white-1">Privacy Policy</span>
        //             <div class="size-1 bg-c-gold-1 rounded-full min-w-1"></div>
        //             <span className="uppercase underline text-c-p6 text-c-gold-1 hover:text-c-white-1">Terms & Conditions</span>
        //         </div>
        //         <span className="flex justify-center text-[8px] uppercase text-c-gold-1">© 2024 Batam 1 Spa. All Rights Reserved.</span>
        //     </div>
        // </div>
    );
}

export default Footer