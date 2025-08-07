import Link from "next/link";
import React from "react";

type NavProps = {
  type: "row" | "column";
};

const Nav = ({ type }: NavProps) => {
  const navType: string = type === "row" ? "flex-row" : "flex-col";
  const navClass: string = `flex ${navType} gap-4`;
  const linkClass: string =
    "text-[#333333] hover:underline hover:decoration-2 hover:decoration-[#F4CE14] text-lg";

  const linkElements: {
    href: string;
    label: string;
  }[] = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#highlights", label: "Menu" },
    { href: "/reservation", label: "Reservations" },
    { href: "#highlights", label: "Order Online" },
    { href: "/", label: "Login" },
  ];

  return (
    <nav>
      <ul className={navClass}>
        {linkElements.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
