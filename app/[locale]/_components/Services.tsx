import React from 'react';

interface Service {
    id: string;
    title: string;
    description: string;
}

const Services: React.FC = () => {
    const services: Service[] = [
        {
            id: '01',
            title: 'Interior Design',
            description: 'We create unique interiors for shops, commercial spaces, apartments, camper vans, and cabins. Every project is designed with style, functionality, and atmosphere in mind — making your space work for your business or feel like home.'
        },
        {
            id: '02',
            title: 'Consultancy & Project Management',
            description: 'Providing expert consultancy, project planning, and full execution support to ensure your vision comes to life seamlessly.'
        },
        {
            id: '03',
            title: 'Custom Furniture',
            description: 'Furniture made to order with professional assembly included — designed to fit perfectly into your space.'
        }
    ];

    return (
        <section className="bg-[#191D1D] text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="divide-y divide-gray-800">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col lg:flex-row lg:items-start justify-center gap-8 lg:gap-16 ${index === 0 ? 'pb-16 md:pb-20' : 'py-16 md:py-20'
                                }`}
                        >
                            {/* Service Number and Title */}
                            <div className="flex-1 lg:max-w-md">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white font-kanit">
                                    {service.id}.{' '}{service.title}
                                </h2>
                            </div>

                            {/* Service Description */}
                            <div className="flex-1 lg:max-w-md">
                                <p className="text-[#6D7D7D] text-lg sm:text-xl leading-relaxed font-light font-nunito-sans">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;