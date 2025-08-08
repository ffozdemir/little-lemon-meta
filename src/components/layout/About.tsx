import React from "react";
import Container from "../shared/Container";
import Image from "next/image";

const About = () => {
  return (
    <Container className="md:py-40 py-20">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-5xl font-bold text-secondary-blue font-family-markazi">
            Little Lemon
          </h2>
          <p className="text-primary-yellow">Chicago</p>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-700">
            Little Lemon is a family-owned Mediterranean restaurant located in
            Chicago. We pride ourselves on serving traditional recipes with a
            modern twist, using only the freshest ingredients. Our mission is to
            provide a warm and welcoming atmosphere where guests can enjoy
            delicious food and create lasting memories.
          </p>
        </div>
        <div className="relative grid grid-cols-1 gap-4 mx-auto w-full h-full justify-items-center">
          <Image
            src="/images/restaurant.jpg"
            alt="About Little Lemon"
            width={400}
            height={600}
            className="rounded-2xl md:absolute top-20 left-5  object-cover z-10"
          />
          <Image
            src="/images/chef.jpg"
            alt="Chef at Little Lemon"
            width={400}
            height={600}
            className="rounded-2xl md:absolute bottom-20 right-0 object-cover z-20"
          />
        </div>
      </section>
    </Container>
  );
};

export default About;
