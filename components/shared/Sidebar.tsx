"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex flex-col justify-between h-full w-full">
        {/* Logo */}
        <Link href="/" className="sidebar-logo mb-6">
          <Image src="/assets/images/logo.svg" alt="logo" width={180} height={28} />
        </Link>

        {/* Nav */}
        <nav className="sidebar-nav">
          <SignedIn>
            {/* Top Nav Links */}
            <ul className="sidebar-nav_elements space-y-2">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group transition-all duration-200 ease-in-out ${isActive
                        ? 'bg-purple-gradient text-white shadow-lg'
                        : 'text-dark-600 hover:bg-purple-100/40'
                      }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={`${isActive ? 'brightness-200' : 'opacity-80 group-hover:opacity-100'}`}
                      />
                      <span className="truncate">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Divider */}
            <hr className="my-6 border-purple-100" />

            {/* Bottom Nav Links */}
            <ul className="sidebar-nav_elements space-y-2">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group transition-all duration-200 ease-in-out ${isActive
                        ? 'bg-purple-gradient text-white shadow-lg'
                        : 'text-dark-600 hover:bg-purple-100/40'
                      }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={`${isActive ? 'brightness-200' : 'opacity-80 group-hover:opacity-100'}`}
                      />
                      <span className="truncate">{link.label}</span>
                    </Link>
                  </li>
                );
              })}

              {/* User Button */}
              <li className="mt-4 px-4">
                <UserButton showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <div>
              <Button asChild className="button bg-purple-gradient bg-cover mt-8">
                <Link href="/sign-up">Sign Up</Link>
              </Button>
              <Button asChild className="button bg-purple-gradient bg-cover mt-4">
                <Link href="/sign-in">Login</Link>
              </Button>
            </div>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
