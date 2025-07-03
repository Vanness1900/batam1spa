import React from 'react';
import CardServices from '../cards/CardServices.jsx'; // Make sure this is the correct card you're using

function SliderServices({ cards = [] }) {
    return (
        <div className="w-full overflow-x-auto">
            <div className="flex gap-6 pb-4 w-max">
                {cards.map((card, index) => (
                    <div key={index} className="w-[50vw] md:w-[30vw] lg:w-[20vw] flex-shrink-0">
                        <CardServices
                            image={card.image}
                            title={card.title}
                            duration={card.duration}
                            description={card.description}
                            included={card.included}
                            lprice={card.lprice}
                            tprice={card.tprice}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SliderServices;
