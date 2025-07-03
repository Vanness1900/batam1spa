import ImageContainer from "../ui/ImageContainer";

function CardCart () {
    return(
        <div className="grid grid-cols-5 gap-8 h-fit py-8 border-b-1 border-c-black-3">
            <div className="bg-blue-500 h-full" />

            {/* Service Information */}
            <div className="flex flex-col justify-between gap-8 col-span-4">
                <div className="flex flex-col gap-4">
                    <h4 className="uppercase">Hot Stone Massage</h4>

                    {/* Details */}
                    <div className="grid grid-cols-4">
                        <div className="flex flex-col gap-1 justify-end">
                            <span className="text-c-gold-1">Details</span>
                            <span className="text-c-black-3">Date</span>
                            <span className="text-c-black-3">Check-in</span>
                            <span className="text-c-black-3">Quantity</span>
                        </div>

                        <div className="flex flex-col gap-1 justify-end">
                            <span></span>
                            <span className="text-c-black-3">...</span>
                            <span className="text-c-black-3">...</span>
                            <span className="text-c-black-3">... Person</span>
                        </div>

                        <div className="flex flex-col gap-1 justify-end">
                            <span className="text-c-gold-1">Subtotal</span>
                            <span className="text-c-black-3">Local</span>
                            <span className="text-c-black-3">Tourist</span>
                            <span className="text-c-black-3">(incl. Tax)</span>
                        </div>

                        <div className="flex flex-col gap-1 justify-center">
                            <span></span>
                            <span className="text-c-black-3">Rp. ...</span>
                            <span className="text-c-black-3">Rp. ...</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4">
                    <label className="uppercase text-c-black-3 underline">Remove</label>
                    <label className="uppercase text-c-white-1 underline">Edit</label>
                </div>
            </div>
        </div>

    );
}

export default CardCart;