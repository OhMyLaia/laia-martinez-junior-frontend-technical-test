import React, { useRef, useState, useEffect } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";


function Navbar() {

    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const menuRef = useRef(null)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        }

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);

    }, []);

    useEffect(() => {
        const handleClickOutsideMenuRef = (e) => {
            if (isActive && menuRef.current && !menuRef.current.contains(e.target)) {
                setIsActive(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutsideMenuRef);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMenuRef);
        };
    }, [isActive, menuRef]);


    const links = [
        { name: 'Sessions', path: '/' },
        { name: 'Schedule', path: '/my-schedule' },
        { name: 'Register', path: '/register' },
    ];

    const toggleMenu = () => {
        setIsActive(prev => !prev)
    }

    const commonNavLinkClasses = "px-3 py-2 hover:shadow-md rounded-md";


    return (
        <nav ref={menuRef} className="bg-violet-300 px-3 py-3 flex flex-row justify-between items-center relative">
            <div>
                <NavLink
                to="/"
                className="text-2xl font-extrabold">
                    Frekuent</NavLink>
            </div>

            {/* Desktop */}
            <ul className="hidden md:flex space-x-6">
                {links.map(link => (
                    <li className='w-fit items-center' key={link.name}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                `${commonNavLinkClasses} ${isActive ? 'bg-violet-400' : 'hover:bg-violet-200'}`
                            }
                            onClick={() => setIsActive(false)}
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Mobile button burger */}
            {isMobile && (
                <button
                    onClick={toggleMenu}
                    className="md:hidden w-fit text-3xl text-indigo-900 focus:outline-none transition-transform duration-300 hover:scale-110"
                    aria-label="Toggle menu"
                >
                    {isActive ? <FiX /> : <FiMenu />}
                </button>
            )}

            {/* Mobile menu UI */}
            <ul className={`
                md:hidden absolute left-0 right-0 bg-violet-300 shadow-lg
                px-3 z-50 rounded-lg origin-top-right
                rounded-bl-xl rounded-br-full top-full
                text-indigo-900 font-bold
                transition-all duration-300 ease-in-out
                ${isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
            `}>
                {links.map(link => (
                    <li className='w-fit mb-5' key={link.name}>
                        <NavLink
                            to={link.path}
                            className="block py-2 hover:bg-gray-100 hover:bg-opacity-20 transition-colors duration-200 rounded-xl px-2"
                            onClick={() => setIsActive(false)}
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;