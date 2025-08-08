import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiScooter } from "react-icons/gi";

const ProductCard = ({
  image,
  title,
  price,
  description,
}: {
  image: string;
  title: string;
  price: string;
  description: string;
}) => {
  return (
    <div className="bg-secondary-gray rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 max-w-xs">
      <div className="relative h-48 w-full mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between  mb-2">
          <h3 className="text-2xl font-semibold mb-4 text-secondary-blue font-family-markazi">
            {title}
          </h3>
          <span className="text-secondary-red font-bold text-lg">${price}</span>
        </div>
        <p className="text-lg text-secondary-blue mb-16">{description}</p>
        <Link
          href="/"
          className="flex items-center justify-start text-secondary-blue gap-x-2  font-bold"
        >
          Order a delivery
          <GiScooter />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
