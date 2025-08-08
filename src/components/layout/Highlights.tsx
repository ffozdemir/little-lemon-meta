import React from "react";
import Container from "../shared/Container";
import ProductCard from "../shared/ProductCard";

const Highlights = () => {
  const menu = [
    {
      title: "Greek Salad",
      description:
        "A delicious mix of fresh vegetables, feta cheese, and olives. Perfect for a light meal. Served with a tangy dressing.",
      price: "12.99",
      image: "/images/greek-salad.jpg",
    },
    {
      title: "Bruschetta",
      description:
        "Toasted bread topped with a mix of tomatoes, basil, and garlic. A classic Italian appetizer. Perfect for sharing.  ",
      price: "8.99",
      image: "/images/bruchetta.svg",
    },
    {
      title: "Lemon Tart",
      description:
        "A refreshing dessert with a tangy lemon filling. A perfect way to end your meal. Paired well with coffee or tea.",
      price: "6.99",
      image: "/images/lemon-tart.jpg",
    },
  ];

  return (
    <Container className="py-16">
      <h2 className="text-4xl font-bold text-left my-8">
        This weeks specials!
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {menu.map((item) => (
          <ProductCard
            key={item.title}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </section>
    </Container>
  );
};

export default Highlights;
