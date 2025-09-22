import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="px-[200px] py-[50px] bg-[#131616] text-white font-nunito text-base">
        <div className="flex items-center pt-16 justify-between border-b-2 pb-14 border-[#212828]">
            <div className="flex flex-row justify-center items-center gap-6">
                <ul className="flex flex-row gap-6">
                    <li>About</li>
                    <li>Team</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                </ul>
                <p>+40 4012 013012310</p>
            </div>
            <div className="">
                <Image src="/svg/logo.svg" alt="Logo" width={100} height={50} />
            </div>
        </div>
        <div className="grid grid-cols-2 my-20">
            <div className="flex flex-row gap-6 border-r-2 border-[#212828]">
                <Image src="/svg/facebook.svg" alt="Socials" width={50} height={50} />
                <Image src="/svg/instagram.svg" alt="Socials" width={50} height={50} />
            </div>
            <p className="flex items-center justify-end ">
                Transformăm spațiile în locuri care inspiră – din 2017.
            </p>
        </div>
        <p>© 2025 Toate drepturile rezervate. Creat de Quant-Apps.</p>
    </div>
  )
}

export default Footer