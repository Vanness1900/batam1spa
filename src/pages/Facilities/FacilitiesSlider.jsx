import Slider from '../../components/grids/Slider.jsx';
import FacilitiesImage1 from '../../assets/FacilitiesImage1.jpg';

const FacilitiesList = [
    {
        image: FacilitiesImage1,
        title: "Sauna",
        text: "Unwind in our soothing sauna, designed to relax your muscles, detoxify your body, and rejuvenate your mind.",
    },
    {
        image: FacilitiesImage1,
        title: "Sauna",
        text: "Unwind in our soothing sauna, designed to relax your muscles, detoxify your body, and rejuvenate your mind.",
    },
    {
        image: FacilitiesImage1,
        title: "Sauna",
        text: "Unwind in our soothing sauna, designed to relax your muscles, detoxify your body, and rejuvenate your mind.",
    },
    {
        image: FacilitiesImage1,
        title: "Sauna",
        text: "Unwind in our soothing sauna, designed to relax your muscles, detoxify your body, and rejuvenate your mind.",
    },
    {
        image: FacilitiesImage1,
        title: "Sauna",
        text: "Unwind in our soothing sauna, designed to relax your muscles, detoxify your body, and rejuvenate your mind.",
    },
  // Add more cards here if needed
];

function FacilitiesSlider() {
    return (
        <div className="py-8 lg:py-12 xl:py-18">
            <div className="space-y-2 mb-6">
                <h6 className="uppercase">Facilities</h6>
                <h2 className="uppercase text-c-gold-1">Unmatched Quality</h2>
            </div>
            <Slider cards={FacilitiesList} />
        </div>
    );
}

export default FacilitiesSlider;
