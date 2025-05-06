import React from 'react';
import CardFacilities from '../cards/CardFacilities.jsx';

function Slider({ cards = [] }) {
    return (
        <div className="w-full overflow-x-auto">
            <div className="flex gap-6 pb-4 w-max">
                {cards.map((card, index) => (
                    <div key={index} className="w-[50vw] lg:w-[20vw] flex-shrink-0">
                        <CardFacilities
                            image={card.image}
                            title={card.title}
                            text={card.text}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider;
