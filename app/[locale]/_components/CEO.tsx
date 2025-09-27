import Image from "next/image"

export default function CEO() {
    return (
        <div className="pt-16 md:pt-32 lg:pt-48 bg-[#131616] px-4 md:px-8 lg:px-16">
            {/* Header */}
            <h2 className="text-center font-bricolage font-semibold text-3xl md:text-5xl lg:text-6xl leading-tight">
                One name.<br />
                One unique vision.
            </h2>

            {/* Main Content */}
            <div className="mt-12 md:mt-20 max-w-7xl mx-auto">
                {/* Mobile Layout - Stacked */}
                <div className="block lg:hidden">
                    <div className="relative mb-8 flex justify-center pr-[10%]">
                        <Image 
                            src="/ceo.png" 
                            width={800} 
                            height={800} 
                            alt="CEO Alf Richard Bjerkøen" 
                            className="grayscale w-full h-auto max-w-md"
                            priority
                        />
                    </div>
                    
                    <div className="space-y-8">
                        <div className="text-center">
                            <h3 className="font-bricolage font-bold text-2xl md:text-3xl mb-2">
                                CEO<br />
                                Interior Designer
                            </h3>
                            <p className="font-dancing text-xl md:text-2xl text-gray-300">
                                Alf Richard Bjerkøen
                            </p>
                        </div>

                        <div className="text-sm md:text-base leading-relaxed text-gray-200">
                            <p className="mb-4">
                                As founder of the Urban chain in the 90s, Alf Richard Bjerkøen began designing and building his own shops. Urban was later acquired by the Varner Group.
                            </p>
                            <p className="mb-4">
                                Shopdesign was in the 2000s established to design and build stores for other players.
                            </p>
                            <p>
                                Since 2016, Shopdesign has developed a new interior design system in collaboration with engineers and designers in Italy, so-called PluggInWall System. PluggInWall System is now fully developed and ready to be produced at our partner in Italy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout - Side by side with overlay */}
                <div className="hidden lg:block relative">
                    <div className="flex justify-center mr-[200px]">
                        <Image
                            src="/ceo.png" 
                            width={1000} 
                            height={1000} 
                            alt="CEO Alf Richard Bjerkøen" 
                            className="grayscale"
                            priority
                        />
                    </div>
                    
                    <div className="absolute top-[50px] left-0 right-0 flex justify-between px-8 xl:px-16">
                        <div className="w-80 xl:w-96">
                            <h3 className="font-bricolage font-bold text-3xl xl:text-4xl mb-3 leading-tight">
                                CEO<br />
                                Interior Designer
                            </h3>
                            <p className="font-dancing text-xl xl:text-2xl text-gray-300">
                                Alf Richard Bjerkøen
                            </p>
                        </div>

                        <div className="w-80 xl:w-96 text-sm xl:text-base leading-relaxed text-gray-200">
                            <p className="mb-4">
                                As founder of the Urban chain in the 90s, Alf Richard Bjerkøen began designing and building his own shops. Urban was later acquired by the Varner Group.
                            </p>
                            <p className="mb-4">
                                Shopdesign was in the 2000s established to design and build stores for other players.
                            </p>
                            <p>
                                Since 2016, Shopdesign has developed a new interior design system in collaboration with engineers and designers in Italy, so-called PluggInWall System. PluggInWall System is now fully developed and ready to be produced at our partner in Italy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}