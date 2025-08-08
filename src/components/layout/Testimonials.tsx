import React from "react";
import Container from "../shared/Container";
import TestimonialCard from "../shared/TestimonialCard";

const Testimonials = () => {
  const personalReviews = [
    {
      image: "/images/random1.jpg",
      name: "John Doe",
      review: "Amazing food and great service!",
      rating: 5,
    },
    {
      image: "/images/random2.jpg",
      name: "Jane Smith",
      review: "A delightful dining experience.",
      rating: 4,
    },
    {
      image: "/images/random3.jpg",
      name: "Alice Johnson",
      review: "The best Mediterranean food in town!",
      rating: 5,
    },
    {
      image: "/images/random4.jpg",
      name: "Bob Brown",
      review: "Loved the ambiance and the food.",
      rating: 4,
    },
  ];

  return (
    <Container className="py-16">
      <h2 className="text-5xl font-bold text-center text-secondary-blue  mb-8 font-family-markazi">
        Testimonials
      </h2>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {personalReviews.map((review) => (
            <TestimonialCard
              key={review.name}
              image={review.image}
              name={review.name}
              review={review.review}
              rating={review.rating}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Testimonials;
