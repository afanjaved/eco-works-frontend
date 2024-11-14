import Image from 'next/image';
import Link from 'next/link';
import ecoWorksLogo from '../assets/eco-works-logo.png';

export default function Navbar() {
  return (
    <div className="bg-white">
      <nav className="container mx-auto flex items-center justify-around p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={ecoWorksLogo} alt="Eco Works Logo" width={130} />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex">
          <ul className="flex space-x-6 text-gray-800 font-medium">
            <li>
              <Link href="/" className="hover:text-green-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-green-600 transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/eco-responsibility" className="hover:text-green-600 transition">
                Eco Responsibility
              </Link>
            </li>
            <li>
              <Link href="/about-eco-works" className="hover:text-green-600 transition">
                About Eco Works
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-green-600 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-gray-800 hover:text-green-600 focus:outline-none">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}
