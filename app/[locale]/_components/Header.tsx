import Image from "next/image"
import LanguageSwitcher from "./LanguageSwitcher"

const Header = () => {
  return (
    <div className="flex flex-row justify-evenly items-center p-4 bg-transparent text-white">
        <div className="font-kanit font-bold text-base tracking-widest">
            INTERIOR
        </div>
        <div className="flex flex-row gap-4 text-base font-nunito items-center">
            <ul className="flex flex-row gap-4">
                <li>About</li>
                <li>Team</li>
                <li>Services</li>
                <li>Portfolio</li>
            </ul>
            <div className="flex flex-row gap-2 items-center">
                <Image src="/svg/phone.svg" alt="Phone" width={25} height={25} />
                <p>+40 4012 013012310</p>
            </div>
            <div className="font-kanit tracking-widest border-2 border-[#6D7D7D] rounded-4xl px-4 py-2 hover:bg-white hover:text-black cursor-pointer">
                SOLICITA OFERTA
            </div>
            <LanguageSwitcher />
        </div>
    </div>
  )
}

export default Header