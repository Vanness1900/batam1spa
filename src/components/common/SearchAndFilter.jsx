import { useState } from 'react';

function SearchAndFilter({ onSearchChange, onFilterChange, activeFilter }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filterOptions = [
        { value: 'all', label: 'All Services' },
        { value: 'massage', label: 'Massage Therapies' },
        { value: 'facial', label: 'Facial Treatments' },
        { value: 'body', label: 'Body Treatments' }
    ];

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearchChange(value);
    };

    const handleFilterChange = (filterValue) => {
        onFilterChange(filterValue);
    };

    return (
        <div className="pb-12">
            <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 items-center">
                {/* Search Bar */}
                <div className="flex-1 w-full xl:w-auto">
                    <div className="relative">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search for services..."
                            className="w-full min-w-[200px] xl:max-w-[600px] h-12 pl-12 pr-4 border-1 border-c-white-1 rounded-lg bg-transparent text-c-white-1 placeholder-c-black-3 focus:outline-none focus:border-c-gold-2 transition-colors"
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-c-white-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                    {filterOptions.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => handleFilterChange(option.value)}
                            className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 uppercase ${
                                activeFilter === option.value
                                    ? 'border-1 border-c-gold-1 bg-c-gold-1 text-c-white-1 shadow-lg'
                                    : 'bg-transparent border-1 border-c-white-1 text-c-white-1 hover:bg-c-gold-1 hover:text-c-white-1 hover:border-c-gold-1'
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchAndFilter;