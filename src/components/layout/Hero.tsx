import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-primary-green py-16">
      <Container className="relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-6xl font-bold text-primary-yellow font-family-markazi">
              Little Lemon
            </h1>
            <h2 className="text-3xl text-white mb-4">Chicago</h2>
            <p className="text-lg text-white mb-8 max-w-md">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link
              href="/reservation"
              className="px-8 py-3 bg-primary-yellow text-secondary-blue rounded-2xl hover:bg-yellow-500 transition-colors cursor-pointer font-bold"
            >
              Reserve a Table
            </Link>
          </div>

          <div className="relative h-[400px] md:h-[450px] md:absolute md:right-10 md:top-48 md:-translate-y-1/2 md:w-[35%] rounded-2xl overflow-hidden">
            <Image
              src="/images/restaurantfood.jpg"
              alt="Restaurant Food"
              fill
              priority
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
