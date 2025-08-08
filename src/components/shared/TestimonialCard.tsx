import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  image,
  name,
  review,
  rating,
}: {
  image: string;
  name: string;
  review: string;
  rating: number;
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
      <div className="flex items-center mb-4">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full mr-4"
          loading="lazy"
        />
        <div>
          <h3 className="text-xl font-semibold text-secondary-blue">{name}</h3>
          <p className="text-primary-yellow">{"★".repeat(rating)}</p>
        </div>
      </div>
      <p className="text-secondary-blue">{review}</p>
    </div>
  );
};

export default TestimonialCard;
