import React from "react";
import Nav from "../shared/Nav";
import Container from "../shared/Container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-secondary-gray text-primary-green">
      <Container className="flex flex-col md:flex-row items-center justify-evenly text-center md:text-start py-8">
        <Image
          src={"/secondary-logo.png"}
          alt="Little Lemon Logo"
          width={120}
          height={120}
        />
        <Nav type="column" className="mt-5" />
        <div>
          <h2 className="text-lg underline mt-5">Contact</h2>
          <address>123 Little Lemon St.</address>
          <a href="tel:+12345678979" target="_blank" rel="noopener noreferrer">
            +12345678979
          </a>
        </div>
        <div>
          <h2 className="text-lg underline mt-5">Follow Us</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
