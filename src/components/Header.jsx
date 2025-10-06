'use client'

import { useState } from "react";
import { usePathname } from "next/navigation";
import CardNav from "./CardNav";

export default function Header() {

    const [head, setHead] = useState(false)
    const pathname = usePathname()
    
    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    };

    const items = [
        {
        label: "About",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
            { label: "Company", ariaLabel: "About Company" },
            { label: "Careers", ariaLabel: "About Careers" }
        ]
        },
        {
        label: "Projects", 
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
            { label: "Featured", ariaLabel: "Featured Projects" },
            { label: "Case Studies", ariaLabel: "Project Case Studies" }
        ]
        },
        {
        label: "Contact",
        bgColor: "#271E37", 
        textColor: "#fff",
        links: [
            { label: "Email", ariaLabel: "Email us" },
            { label: "Twitter", ariaLabel: "Twitter" },
            { label: "LinkedIn", ariaLabel: "LinkedIn" }
        ]
        }
    ];

    return(
        <>
            <div className="hidden xl:flex w-full border-2 rounded-2xl border-black">
                <div className="flex justify-between rounded-2xl w-full bg-white px-10 py-2 items-center">
                    <div className="w-60">
                        <img src="/logo.png" className="object-contain w-full" alt="" />
                    </div>

                    <nav>
                        <ul className="flex gap-2">
                            <a className="p-5 border-2 bg-red-200 border-black hover:bg-red-400" href="/">
                                <li>Home</li>
                            </a>
                            <a className="p-5 border-2 bg-blue-200 border-black hover:bg-blue-400" href="/aboutus">
                                <li>About us</li>
                            </a>
                            <a className="p-5 border-2 bg-green-200 border-black hover:bg-green-400" href="">
                                <li>Academics</li>
                            </a>
                            <a className="p-5 border-2 bg-yellow-200 border-black hover:bg-yellow-400" href="">
                                <li>Student Life</li>
                            </a>
                            <a className="p-5 border-2 bg-purple-200 border-black hover:bg-purple-400" href="">
                                <li>Contact</li>
                            </a>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="xl:hidden h-10">
                <CardNav
                    logo={'/logo.png'}
                    logoAlt="Company Logo"
                    items={items}
                    baseColor="#fff"
                    menuColor="#000"
                    buttonBgColor="#111"
                    buttonTextColor="#fff"
                    ease="power3.out"
                />
            </div>
        </>
    )
}