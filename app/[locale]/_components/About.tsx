import Image from "next/image"

const About = () => {
  return (
    <div className="bg-[#1A1D1D] px-[300px] py-[100px]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 flex flex-col gap-3">
          <h2 className="text-[#6D7D7D] font-kanit tracking-[0.3em] text-xs font-light uppercase">
            ABOUT
          </h2>
          <h3 className="text-white text-[40px] font-[400] leading-tight max-w-4xl font-kanit">
            We are the most appreciated interior design studio in OSLO
          </h3>
          <div className="max-w-2xl font-[400] text-base leading-relaxed font-nunito text-white/60">
            <p className="">
              We transform ordinary spaces into extraordinary places that inspire and bring comfort.
            </p>
            <p className="">
              With a team of passionate specialists and a creative approach, we have completed thousands of projects for clients from Romania and abroad.
            </p>
            <p className="">
              Each project is a combination of functionality, aesthetics, and personality – so that the final result is truly yours.
            </p>
          </div>
        </div>

        {/* Images and Stats Grid */}
        <div className="grid grid-cols-6 gap-4 ">
          {/* First Large Image */}
          <div className="col-span-2 h-full">
            <Image 
              src="/image/about1.png" 
              alt="Interior Design Project" 
              width={400} 
              height={400} 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Second Image */}
          <div className="col-span-2 h-full">
            <Image 
              src="/image/about2.png" 
              alt="Interior Design Project" 
              width={400} 
              height={400} 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Column - Third Image and Stats */}
          <div className="col-span-2 h-full flex flex-col gap-4">
            {/* Third Image - Top Half */}
            <div className="flex-1">
              <Image 
                src="/image/about3.png" 
                alt="Interior Design Project" 
                width={300} 
                height={180} 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Stats - Bottom Half */}
            <div className="flex-1 flex items-center justify-center font-kanit">
              <div className="flex space-x-16">
                <div className="text-left">
                  <h3 className="text-[#6D7D7D] text-[40px] font-light">2K+</h3>
                  <p className="text-white text-base tracking-widest uppercase leading-tight">
                    completed<br />projects
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="text-[#6D7D7D] text-[40px] font-light">300+</h3>
                  <p className="text-white text-base tracking-widest uppercase leading-tight">
                    happy<br />clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative inset-0 mb-[150px]">
            <div className="absolute bottom-[-400px]">
                <Image 
                    src="/image/about4.png" 
                    alt="About Bottom" 
                    width={1920} 
                    height={200} 
                    className="w-full h-auto" 
                />
                <div className="absolute inset-0 flex items-center justify-center pl-[400px]">
                    <div className="text-start font-kanit max-w-xl">
                        <h1 className="text-white text-3xl lg:text-4xl font-normal leading-tight mb-6">
                            We combine creativity with functionality in every project
                        </h1>
                        <div className="inline-block">
                            <div className="text-base text-white border border-[#6D7D7D] rounded-full px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer tracking-widest">
                            COLLABORATE WITH US
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default About