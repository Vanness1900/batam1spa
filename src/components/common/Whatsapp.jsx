import ScrollToTopButton from "./ScrollToTopButton";

function Whatsapp(){
    return(
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
            <ScrollToTopButton />
            <div className="flex items-center justify-center
                            size-16 xl:size-24 rounded-full
                            bg-c-white-1 drop-shadow-lg hover:bg-c-gold-1 text-c-gold-1 hover:text-c-white-1 transition-colors duration-300">
                <a href="https://wa.me/85129226" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 xl:size-12">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default Whatsapp