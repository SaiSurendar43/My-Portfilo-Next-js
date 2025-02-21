import { useState, useEffect } from "react";
import { IoMenuOutline, IoCallOutline } from "react-icons/io5"; // Import call icon
import Link from "next/link";
import Image from "next/image";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    console.log("activeSection", activeSection);

    const HEADER_LINKS = [
        { title: "Home", link: "#home" },
        { title: "About", link: "#about" },
        { title: "Testimonials", link: "#testimonials" },
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
        setIsMenuOpen(false);
    };

    return (
        <div data-aos="fade-down" className="fixed top-0 left-0 w-full z-50">
            <div
                className={`flex flex-col items-center justify-center w-full p-3 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-black/40 text-white font-medium backdrop-blur-lg border-b border-white/20 shadow-lg py-5"
                        : "bg-transparent font-medium border-transparent"
                    }`}
            >
                <div className="flex flex-row items-center justify-between w-full max-w-screen-2xl mx-auto px-4">
                    {/* Logo */}
                    <div className="rounded-full bg-black/40 w-[50px] h-[50px] lg:w-[55px] lg:h-[55px]">
                        <Image
                            src="/images/canva13.png"
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex flex-row items-center justify-center gap-x-6">
                        {HEADER_LINKS.map((link) => (
                            <Link href={link.link} key={link.title}>
                                <div
                                    onClick={() => handleLinkClick(link.link.substring(1))}
                                    className={`text-center font-semibold relative group px-4 py-2 transition-all duration-300 ${activeSection === link.link.substring(1)
                                            ? "text-custom-text" // Active link color and font weight
                                            : "text-custom-text"
                                        }`}
                                >
                                    <p className="lg:text-lg text-base">{link.title}</p>
                                    {/* Animated Underline */}
                                    <span
                                        className={`absolute left-1/2 bottom-0 h-[2px] bg-fuchsia-600 transition-all duration-300 ${activeSection === link.link.substring(1)
                                                ? "w-full -left-3" // Active link underline
                                                : "w-0 group-hover:w-full group-hover:left-0"
                                            }`}
                                    ></span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Contact Number */}
                    <div className="hidden md:flex items-center gap-2 hover:bg-custom-text bg-white text-black px-4 py-2 rounded-md font-semibold">
                        <IoCallOutline size={20} className="text-black hover:text-blue-600" />
                        <a href="tel:+911234567890" className="hover:underline">
                            +91 12345 67890
                        </a>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex md:hidden p-2 pr-4"
                    >
                        <IoMenuOutline size={28} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="w-full h-screen fixed bg-black/90 backdrop-blur-2xl -z-50 animate-closeDown pt-4">
                    <div
                        className="flex flex-col justify-between h-[100vh] overflow-scroll w-[70%] mx-auto"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div>
                            {HEADER_LINKS.map((link) => (
                                <Link href={link.link} key={link.title}>
                                    <div
                                        onClick={() => handleLinkClick(link.link.substring(1))}
                                        className={`text-center font-semibold relative px-4 py-2 transition-colors duration-300 rounded-md ${activeSection === link.link.substring(1)
                                               ? "bg-white text-black"
                                                : "text-white"
                                            }`}
                                    >
                                        <p className="text-xl">{link.title}</p>
                                    </div>
                                </Link>
                            ))}
                              <div className="flex flex-col items-center mt-6">
                            <div className="flex items-center bg-fuchsia-700/60 px-4 py-2 rounded-lg justify-center gap-2 text-white font-semibold">
                                <IoCallOutline size={20} />
                                <a href="tel:+911234567890" className="hover:underline">
                                    +91 12345 67890
                                </a>
                            </div>
                        </div>
                        </div>

                        {/* Contact Number in Mobile Menu */}
                      
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
