function ConfirmationServiceCard({ item }) {
    if (!item) return null;

    const formatTime = (time) => {
        return `${time}:00`;
    };

    return (
        <div className="grid grid-cols-5 gap-8 h-fit py-8 border-b-1 border-c-white-1">
            {/* Service Image */}
            <div className="h-24 w-full rounded-lg overflow-hidden">
                <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Service Information - Simplified for confirmation */}
            <div className="flex flex-col justify-center gap-4 col-span-4">
                <h4 className="uppercase text-c-white-1">{item.title}</h4>

                {/* Simplified Details - Only show what you requested */}
                <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="text-c-gold-1 text-sm uppercase">Quantity</span>
                        <span className="text-c-white-1">{item.quantity} person{item.quantity > 1 ? 's' : ''}</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-c-gold-1 text-sm uppercase">Date</span>
                        <span className="text-c-white-1 opacity-75">{item.selectedDate || 'TBD'}</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-c-gold-1 text-sm uppercase">Check-in</span>
                        <span className="text-c-white-1 opacity-75">{item.selectedTime ? formatTime(item.selectedTime) : 'TBD'}</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-c-gold-1 text-sm uppercase">Duration</span>
                        <span className="text-c-white-1 opacity-75">{item.selectedDuration} min</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationServiceCard;