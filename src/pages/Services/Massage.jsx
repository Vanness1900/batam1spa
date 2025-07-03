import SliderServices from '../../components/grids/SliderServices.jsx';
import ServicesImage1 from '../../assets/ServicesImage1.jpg';

const FacilitiesList = [
    {
        image: ServicesImage1,
        title: "Hot Stone Massage",
        description: "Experience a hot stone massage that blends the therapeutic warmth of heated stones with expert massage techniques.",
        included: [
            "Heated stones to ease muscle tension",
            "Massage techniques to improve circulation",
            "Relaxing atmosphere to boost well-being"
        ],
        duration: [60, 90, 120],
        lprice: 650000,
        tprice: 850000,
    },
    {
        image: ServicesImage1,
        title: "Hot Stone Massage",
        description: "Experience a hot stone massage that blends the therapeutic warmth of heated stones with expert massage techniques.",
        included: [
            "Heated stones to ease muscle tension",
            "Massage techniques to improve circulation",
            "Relaxing atmosphere to boost well-being"
        ],
        duration: [60, 90, 120],
        lprice: 650000,
        tprice: 850000,
    },
    {
        image: ServicesImage1,
        title: "Hot Stone Massage",
        description: "Experience a hot stone massage that blends the therapeutic warmth of heated stones with expert massage techniques.",
        included: [
            "Heated stones to ease muscle tension",
            "Massage techniques to improve circulation",
            "Relaxing atmosphere to boost well-being"
        ],
        duration: [60, 90, 120],
        lprice: 650000,
        tprice: 850000,
    },
    {
        image: ServicesImage1,
        title: "Hot Stone Massage",
        description: "Experience a hot stone massage that blends the therapeutic warmth of heated stones with expert massage techniques.",
        included: [
            "Heated stones to ease muscle tension",
            "Massage techniques to improve circulation",
            "Relaxing atmosphere to boost well-being"
        ],
        duration: [60, 90, 120],
        lprice: 650000,
        tprice: 850000,
    },
    {
        image: ServicesImage1,
        title: "Hot Stone Massage",
        description: "Experience a hot stone massage that blends the therapeutic warmth of heated stones with expert massage techniques.",
        included: [
            "Heated stones to ease muscle tension",
            "Massage techniques to improve circulation",
            "Relaxing atmosphere to boost well-being"
        ],
        duration: [60, 90, 120],
        lprice: 650000,
        tprice: 850000,
    },
    {
        image: ServicesImage1,
        title: "Hot Stone Massage",
        description: "Experience a hot stone massage that blends the therapeutic warmth of heated stones with expert massage techniques.",
        included: [
            "Heated stones to ease muscle tension",
            "Massage techniques to improve circulation",
            "Relaxing atmosphere to boost well-being"
        ],
        duration: [60, 90, 120],
        lprice: 650000,
        tprice: 850000,
    },
];

function Massage() {
    return (
        <div className="py-8 lg:py-12 xl:py-18">
            <div className="space-y-4 mb-8">
                <h2 className="uppercase text-c-gold-1">Massage Therapies</h2>
                <SliderServices cards={FacilitiesList} />
            </div>
            <div className="space-y-4 mb-8">
                <h2 className="uppercase text-c-gold-1">Massage Therapies</h2>
                <SliderServices cards={FacilitiesList} />
            </div>
            <div className="space-y-4 mb-8">
                <h2 className="uppercase text-c-gold-1">Massage Therapies</h2>
                <SliderServices cards={FacilitiesList} />
            </div>
            <div className="space-y-4 mb-8">
                <h2 className="uppercase text-c-gold-1">Massage Therapies</h2>
                <SliderServices cards={FacilitiesList} />
            </div>
            <div className="space-y-4 mb-8">
                <h2 className="uppercase text-c-gold-1">Massage Therapies</h2>
                <SliderServices cards={FacilitiesList} />
            </div>
        </div>
    );
}

export default Massage;
