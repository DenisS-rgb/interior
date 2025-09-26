import Image from "next/image";
export default function Hero() {
    return (
        <div className="relative bg-blue-500 h-[500px] overflow-hidden flex flex-col justify-center items-center">
            <Image
                src="/bg.jpg"
                alt="Description of image"
                width={2000}
                height={2000}
                className="w-full h-auto object-center"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="font-kanit text-white absolute right-[15%]">
                <div className="text-5xl">We design your dream space</div>
                <div className="text-sm">We transform every room into a place where you feel inspired and comfortable.</div>
            </div>
        </div>
    );
}
