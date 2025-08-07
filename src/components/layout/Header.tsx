"use client";
import React, { useState } from "react";
import Nav from "../shared/Nav";
import Image from "next/image";
import Container from "../shared/Container";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="relative bg-white shadow-md">
      <Container className="flex items-center justify-between p-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Little Lemon Logo"
            width={150}
            height={50}
            priority
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <Nav type="row" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2 md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <RxHamburgerMenu className="text-2xl" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-full z-10 w-full bg-white p-4 shadow-md md:hidden">
            <Nav type="column" />
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
