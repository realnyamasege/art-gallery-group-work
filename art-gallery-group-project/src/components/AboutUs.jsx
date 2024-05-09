import React from "react";

const AboutUs = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${"./Images/3.jpg"})`,
      }}
    >
      <div className="container mx-auto ">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
          <p className="text-lg leading-relaxed">
            At Peupe Art Gallery, we believe in the transformative power of art.
            Our gallery serves as a beacon for creativity, a sanctuary for
            artists, and a vibrant hub for art enthusiasts from all walks of
            life. This gallery space is a testament to our commitment to
            showcasing the finest in contemporary art, while also nurturing
            emerging talent and fostering a sense of community and connection.
            Our mission is to ignite the imagination, stimulate dialogue, and
            inspire change through the power of art.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
