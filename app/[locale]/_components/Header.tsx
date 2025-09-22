import LanguageSwitcher from "./LanguageSwitcher"

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center p-4">
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
            <div className="">
                +40 4012 013012310
            </div>
            <div className="font-kanit tracking-widest border-2 border-[#6D7D7D] rounded-4xl px-4 py-2 hover:bg-white hover:text-black cursor-pointer">
                SOLICITA OFERTA
            </div>
        </div>
        <div className="">
            <LanguageSwitcher />
        </div>
    </div>
  )
}

export default Header