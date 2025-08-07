import React from "react";
import Container from "../shared/Container";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-primary-green p-2">
      <Container className="flex flex-col md:flex-row items-center justify-center md:justify-around text-center md:text-left p-2">
        <div className="md:w-1/3">
          <h1 className="text-4xl font-bold text-primary-yellow font-family-markazi">
            Little Lemon
          </h1>
          <h2 className="text-white text-lg">Chicago</h2>
          <p className="text-lg text-white mt-4">
            Experience the best of Mediterranean cuisine with a modern twist.
            Our dishes are crafted with fresh, locally sourced ingredients to
            bring you a taste of the Mediterranean right in the heart of
            Chicago.
          </p>
          <button className="mt-6 px-6 py-3 bg-primary-yellow text-secondary-blue rounded-2xl hover:bg-yellow-600 transition-colors cursor-pointer">
            Reserve a Table
          </button>
        </div>
        <div className=" md:w-1/4 lg:w-1/5 sm:w-1/2  mt-8 md:mt-0">
          <Image
            src="/images/restaurantfood.jpg"
            alt="Restaurant Food"
            className="rounded-2xl shadow-lg object-cover"
            width={400}
            height={300}
            priority
            
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
