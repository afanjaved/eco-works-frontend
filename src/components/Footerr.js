import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="flex mt-auto justify-center bg-black text-white py-4">
            <div className="">
                <p>&copy; {new Date().getFullYear()} Eco Works. All Rights Reserved.</p>
            </div>
            {/* <div className="md:flex">
          <ul className="flex space-x-6 ">
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
        </div> */}
        </footer>
    );
}