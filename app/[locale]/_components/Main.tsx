import Image from "next/image"

const Main = () => {
  return (
    <div className="relative min-h-screen w-full">
        <div className="fixed inset-0 -z-10">
          <Image 
            src="/image/hero.png" 
            alt="Main" 
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
  )
}

export default Main