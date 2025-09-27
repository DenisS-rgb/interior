import Image from "next/image"

const Main = () => {
  return (
    <div className="relative h-screen w-full">
        <div className="fixed inset-0 -z-10">
            <Image 
                src="/image/hero.png" 
                alt="Main" 
                fill
                className="object-cover"
                priority
            />
        </div>
        
        {/* Mobile Layout */}
        <div className="block lg:hidden">
            <div className="flex flex-col items-center justify-center h-screen px-6 text-center">
                <div className="mb-8">
                    <h2 className="font-kanit text-2xl sm:text-3xl md:text-4xl text-white mb-4">
                        We design your dream space
                    </h2>
                    <p className="font-nunito text-sm sm:text-base text-white/70 max-w-md">
                        We transform every room into a place where you feel inspired and comfortable.
                    </p>
                </div>
                <div className="mt-auto mb-12">
                    <p className="font-kanit text-lg text-white tracking-widest animate-bounce">
                        SWIPE DOWN
                    </p>
                </div>
            </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2">
            <div className="flex flex-col items-start justify-center h-screen ml-12 xl:ml-40 mt-20 xl:mt-40">
                <p className="font-kanit text-xl [writing-mode:vertical-lr] [text-orientation:down] transform rotate-180 text-white tracking-widest animate-bounce">
                    SWIPE DOWN
                </p>
            </div>
            <div className="flex flex-col items-start justify-start mt-[250px] xl:mt-[350px] pr-8 xl:pr-12">
                <h2 className="font-kanit text-3xl xl:text-[40px] text-white mb-4">
                    We design your dream space
                </h2>
                <p className="font-nunito text-base text-white/70 max-w-lg">
                    We transform every room into a place where you feel inspired and comfortable.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main