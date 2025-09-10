'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '/about',
      dropdown: [
        { name: 'Our Story', href: '/about/our-story' },
        { name: 'Vision & Mission', href: '/about/vision-mission' },
        { name: 'Team & Leadership', href: '/about/team' },
        { name: 'Partners', href: '/about/partners' },
        { name: 'Impact', href: '/about/impact' },
      ],
    },
    {
      name: 'Programs',
      href: '/programs',
      dropdown: [
        { name: 'Projects', href: '/programs/projects' },
        { name: 'Events', href: '/programs/events' },
        { name: 'Courses', href: '/programs/courses' },
      ],
    },
    {
      name: 'Get Involved',
      href: '/get-involved',
      dropdown: [
        { name: 'Volunteer', href: '/get-involved/volunteer' },
        { name: 'Membership', href: '/get-involved/membership' },
        { name: 'Careers', href: '/get-involved/careers' },
      ],
    },
    {
      name: 'Blog / Media',
      href: '/media',
      dropdown: [
        { name: 'Blog / Stories', href: '/media/blog' },
        { name: 'Gallery / Press', href: '/media/gallery' },
      ],
    },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-green-600">
              Youth Empowerment Foundation
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="px-3 py-2 text-gray-700 hover:text-green-600 font-medium flex items-center">
                      {item.name}
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 font-medium ${
                      pathname === item.href ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/donate"
              className="ml-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pt-2 pb-3 space-y-1 shadow-lg">
            {navItems.map((item) => (
              <div key={item.name} className="px-2">
                {item.dropdown ? (
                  <div className="py-2">
                    <div className="text-gray-700 font-medium px-3 py-2">{item.name}</div>
                    <div className="pl-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-gray-600 hover:bg-green-50 rounded-md"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-2 pt-2 pb-3">
              <Link
                href="/donate"
                className="block w-full text-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;