import Link from "next/link";
import React from "react";

type NavProps = {
  type: "row" | "column";
  className?: string;
};

const Nav = ({ type, className }: NavProps) => {
  const navType: string = type === "row" ? "flex-row" : "flex-col";
  const classProp = className ? className : "";
  const navClass: string = `flex ${navType} gap-4 ` + classProp;

  const linkCommon: string =
    "hover:underline hover:decoration-2 hover:decoration-primary-yellow md:text-lg text-md ";

  const linkSpecific: string =
    type === "row" ? "text-secondary-blue " : "text-primary-green ";

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
          <li key={`${link.href}-${link.label}`}>
            <Link href={link.href} className={linkCommon + linkSpecific}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
