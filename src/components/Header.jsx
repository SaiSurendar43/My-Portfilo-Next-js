import { useState, useEffect } from "react";
import { IoMenuOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const HEADER_LINKS = [
        { title: "Home", link: "#home" },
        { title: "About", link: "#about" },
        { title: "Project", link: "#project" },
        { title: "Contact", link: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Handle link click
    const handleLinkClick = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div data-aos="fade-down" className="fixed top-0 left-0 w-full z-50">
            <div
                className={`flex flex-col items-center justify-center w-full p-3 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-black/40 text-white font-medium backdrop-blur-lg border-b border-white/20 shadow-lg py-5"
                    : "bg-transparent  font-medium border-transparent"
                    }`}
            >
                <div className="flex flex-row items-end justify-end lg:justify-center lg:items-center w-full max-w-screen-2xl mx-auto">
                    <div className="absolute top-3 left-1 rounded-full bg-black/40 w-[50px] h-[50px] lg:w-[55px] lg:h-[55px]">
                        <Image
                            src="/images/canva13.png"
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="hidden md:flex flex-row items-center justify-center gap-x-6">
                        {HEADER_LINKS.map((link) => (
                            <Link href={link.link} key={link.title}>
                                <div
                                    onClick={() => handleLinkClick(link.link.substring(1))}
                                    className="text-center font-semibold relative group px-4 py-2 transition-all duration-300"
                                >
                                    {/* Change text color and font weight on hover */}
                                    <p className="text-base text-custom-text">
                                        {link.title}
                                    </p>
                                    {/* Animated Underline */}
                                    <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-fuchsia-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                </div>
                            </Link>
                        ))}
                    </div>


                    <div
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex md:hidden p-2 pr-4"
                    >
                        <IoMenuOutline size={28} />
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="w-full h-screen fixed bg-black/90 backdrop-blur-2xl -z-50 animate-closeDown pt-4">
                    <div
                        className="flex flex-col justify-between h-[100vh] overflow-scroll w-11/12 mx-auto"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div>
                            {HEADER_LINKS.map((link) => (
                                <Link href={link.link} key={link.title}>
                                    <div
                                        onClick={() => handleLinkClick(link.link.substring(1))}
                                        className="text-center font-semibold relative group px-4 py-2"
                                    >
                                        <p className="text-xl">{link.title}</p>
                                        {/* Animated Underline */}
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
