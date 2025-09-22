import { useState, useMemo } from 'react';
import SliderServices from '../../components/grids/SliderServices.jsx';
import SearchAndFilter from '../../components/common/SearchAndFilter.jsx';
import ServicesImage1 from '../../assets/ServicesImage1.jpg';

const MassageTherapies = [
    {
        id: 'hot-stone',
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
        category: 'massage'
    },
    {
        id: 'deep-tissue',
        image: ServicesImage1,
        title: "Deep Tissue Massage",
        description: "Intensive massage targeting deep muscle layers to release chronic tension and knots.",
        included: [
            "Deep pressure techniques",
            "Muscle tension relief",
            "Improved flexibility and mobility"
        ],
        duration: [60, 90, 120],
        lprice: 600000,
        tprice: 800000,
        category: 'massage'
    },
    {
        id: 'aromatherapy',
        image: ServicesImage1,
        title: "Aromatherapy Massage",
        description: "Relaxing massage using essential oils to enhance your emotional and physical well-being.",
        included: [
            "Premium essential oil selection",
            "Stress reduction techniques",
            "Mind-body relaxation"
        ],
        duration: [60, 90, 120],
        lprice: 700000,
        tprice: 900000,
        category: 'massage'
    },
    {
        id: 'swedish',
        image: ServicesImage1,
        title: "Swedish Massage",
        description: "Classic relaxation massage using long, flowing strokes to promote circulation and relaxation.",
        included: [
            "Long flowing massage strokes",
            "Muscle relaxation techniques",
            "Stress relief and rejuvenation"
        ],
        duration: [60, 90, 120],
        lprice: 550000,
        tprice: 750000,
        category: 'massage'
    },
    {
        id: 'thai',
        image: ServicesImage1,
        title: "Traditional Thai Massage",
        description: "Ancient Thai healing technique combining acupressure, stretching, and yoga poses.",
        included: [
            "Traditional Thai techniques",
            "Flexibility enhancement",
            "Energy line stimulation"
        ],
        duration: [60, 90, 120],
        lprice: 580000,
        tprice: 780000,
        category: 'massage'
    },
    {
        id: 'prenatal',
        image: ServicesImage1,
        title: "Prenatal Massage",
        description: "Gentle, safe massage specially designed for expecting mothers to reduce pregnancy discomfort.",
        included: [
            "Pregnancy-safe techniques",
            "Specialized positioning",
            "Comfort and relaxation focus"
        ],
        duration: [60, 90],
        lprice: 720000,
        tprice: 920000,
        category: 'massage'
    },
];

const FacialTreatments = [
    {
        id: 'hydrating-facial',
        image: ServicesImage1,
        title: "Hydrating Facial",
        description: "Deep moisturizing facial treatment to restore skin's natural glow and elasticity.",
        included: [
            "Deep cleansing and exfoliation",
            "Hydrating mask application",
            "Moisturizing and sun protection"
        ],
        duration: [60, 90],
        lprice: 450000,
        tprice: 650000,
        category: 'facial'
    },
    {
        id: 'anti-aging',
        image: ServicesImage1,
        title: "Anti-Aging Facial",
        description: "Advanced facial treatment targeting fine lines and signs of aging for youthful skin.",
        included: [
            "Collagen-boosting treatments",
            "Anti-aging serums",
            "Skin firming techniques"
        ],
        duration: [90, 120],
        lprice: 800000,
        tprice: 1000000,
        category: 'facial'
    },
    {
        id: 'brightening',
        image: ServicesImage1,
        title: "Brightening Facial",
        description: "Illuminating facial treatment to reduce dark spots and even out skin tone.",
        included: [
            "Vitamin C infusion",
            "Dark spot treatment",
            "Skin tone evening"
        ],
        duration: [60, 90],
        lprice: 600000,
        tprice: 800000,
        category: 'facial'
    },
    {
        id: 'acne-treatment',
        image: ServicesImage1,
        title: "Acne Treatment Facial",
        description: "Specialized facial targeting acne-prone skin with deep cleansing and purifying treatments.",
        included: [
            "Deep pore cleansing",
            "Acne-fighting ingredients",
            "Skin purification"
        ],
        duration: [75, 90],
        lprice: 520000,
        tprice: 720000,
        category: 'facial'
    },
    {
        id: 'sensitive-skin',
        image: ServicesImage1,
        title: "Sensitive Skin Facial",
        description: "Gentle facial treatment specially formulated for sensitive and reactive skin types.",
        included: [
            "Hypoallergenic products",
            "Soothing techniques",
            "Skin barrier protection"
        ],
        duration: [60, 75],
        lprice: 480000,
        tprice: 680000,
        category: 'facial'
    },
    {
        id: 'luxury-gold',
        image: ServicesImage1,
        title: "24K Gold Facial",
        description: "Luxurious anti-aging facial treatment with real 24K gold for ultimate skin rejuvenation.",
        included: [
            "24K gold infusion",
            "Premium anti-aging ingredients",
            "Luxury spa experience"
        ],
        duration: [90, 120],
        lprice: 1200000,
        tprice: 1500000,
        category: 'facial'
    },
];

const BodyTreatments = [
    {
        id: 'body-scrub',
        image: ServicesImage1,
        title: "Balinese Body Scrub",
        description: "Exfoliating body treatment using traditional Balinese ingredients for silky smooth skin.",
        included: [
            "Full body exfoliation",
            "Natural ingredient scrub",
            "Moisturizing finish"
        ],
        duration: [45, 60],
        lprice: 400000,
        tprice: 600000,
        category: 'body'
    },
    {
        id: 'body-wrap',
        image: ServicesImage1,
        title: "Detox Body Wrap",
        description: "Purifying body wrap treatment to eliminate toxins and tighten skin.",
        included: [
            "Detoxifying wrap application",
            "Toxin elimination",
            "Skin tightening benefits"
        ],
        duration: [60, 90],
        lprice: 550000,
        tprice: 750000,
        category: 'body'
    },
    {
        id: 'cellulite-treatment',
        image: ServicesImage1,
        title: "Anti-Cellulite Treatment",
        description: "Targeted body treatment to reduce the appearance of cellulite and improve skin texture.",
        included: [
            "Cellulite reduction massage",
            "Firming cream application",
            "Skin texture improvement"
        ],
        duration: [75, 90],
        lprice: 650000,
        tprice: 850000,
        category: 'body'
    },
    {
        id: 'slimming-wrap',
        image: ServicesImage1,
        title: "Slimming Body Wrap",
        description: "Body contouring treatment designed to reduce inches and promote a more toned appearance.",
        included: [
            "Body measurement tracking",
            "Slimming wrap application",
            "Inch-loss results"
        ],
        duration: [90, 120],
        lprice: 700000,
        tprice: 900000,
        category: 'body'
    },
    {
        id: 'hydrating-body',
        image: ServicesImage1,
        title: "Hydrating Body Treatment",
        description: "Intensive moisturizing treatment for dry, dehydrated skin all over the body.",
        included: [
            "Deep moisturizing mask",
            "Hydrating massage",
            "Long-lasting skin softness"
        ],
        duration: [60, 75],
        lprice: 480000,
        tprice: 680000,
        category: 'body'
    },
    {
        id: 'sunburn-relief',
        image: ServicesImage1,
        title: "After-Sun Relief Treatment",
        description: "Soothing body treatment to calm and heal sun-damaged or irritated skin.",
        included: [
            "Cooling gel application",
            "Anti-inflammatory ingredients",
            "Skin healing acceleration"
        ],
        duration: [45, 60],
        lprice: 380000,
        tprice: 580000,
        category: 'body'
    },
];

// Combine all services
const AllServices = [...MassageTherapies, ...FacialTreatments, ...BodyTreatments];

function Massage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');

    // Filter and search logic
    const filteredServices = useMemo(() => {
        let filtered = AllServices;

        // Apply category filter
        if (activeFilter !== 'all') {
            filtered = filtered.filter(service => service.category === activeFilter);
        }

        // Apply search filter
        if (searchTerm) {
            filtered = filtered.filter(service =>
                service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        return filtered;
    }, [searchTerm, activeFilter]);

    // Group filtered services by category for display
    const groupedServices = useMemo(() => {
        const groups = {
            massage: [],
            facial: [],
            body: []
        };

        filteredServices.forEach(service => {
            groups[service.category].push(service);
        });

        return groups;
    }, [filteredServices]);

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        setSearchTerm(''); // Clear search when changing filter
    };

    return (
        <div className="py-8 lg:py-12 xl:py-18">
            {/* Search and Filter Component */}
            <SearchAndFilter 
                onSearchChange={handleSearchChange}
                onFilterChange={handleFilterChange}
                activeFilter={activeFilter}
            />

            {/* Results Section */}
            <div className="">
                {/* No Results Message */}
                {filteredServices.length === 0 && (
                    <div className="text-center py-16">
                        <div className="space-y-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-16 text-c-black-3 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <div>
                                <h3 className="text-c-black-2 text-xl">No services found</h3>
                                <p className="text-c-black-3 text-sm">
                                    {searchTerm 
                                        ? `No services match "${searchTerm}", try a different search term.`
                                        : "No services available in this category."
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Services Display */}
                {searchTerm ? (
                    // Show search results in one section
                    filteredServices.length > 0 && (
                        <div className="space-y-4 mb-8">
                            <h2 className="uppercase text-c-gold-1">
                                Search Results ({filteredServices.length})
                            </h2>
                            <SliderServices cards={filteredServices} />
                        </div>
                    )
                ) : (
                    // Show by categories when not searching
                    <>
                        {(activeFilter === 'all' || activeFilter === 'massage') && groupedServices.massage.length > 0 && (
                            <div className="space-y-4 mb-8 pb-8">
                                <h2 className="uppercase text-c-gold-1">Massage Therapies</h2>
                                <SliderServices cards={groupedServices.massage} />
                            </div>
                        )}
                        
                        {(activeFilter === 'all' || activeFilter === 'facial') && groupedServices.facial.length > 0 && (
                            <div className="space-y-4 mb-8 pb-8">
                                <h2 className="uppercase text-c-gold-1">Facial Treatments</h2>
                                <SliderServices cards={groupedServices.facial} />
                            </div>
                        )}
                        
                        {(activeFilter === 'all' || activeFilter === 'body') && groupedServices.body.length > 0 && (
                            <div className="space-y-4 mb-8 pb-8">
                                <h2 className="uppercase text-c-gold-1">Body Treatments</h2>
                                <SliderServices cards={groupedServices.body} />
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Massage;