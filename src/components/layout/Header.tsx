import React from "react";
import Nav from "../shared/Nav";
import Image from "next/image";
import Container from "../shared/Container";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <Container className="flex items-center justify-center gap-34 p-4">
        <Image
          src="/logo.svg"
          alt="Little Lemon Logo"
          width="200"
          height="200"
        />
        <Nav type="row" />
      </Container>
    </header>
  );
};

export default Header;
