import {useState} from "react";
import {testimonials} from "../../data/services.ts";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const changeTestimonial = (index: number) => {
    setActiveTestimonial(index);
  };

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            ¿Qué dicen nuestros clientes?
          </h2>

          {/* Testimonial text with fade transition */}
          <div className="relative mt-20">
            <blockquote
              className="shadow-lg rounded-md p-6 bg-white dark:bg-gray-800 transition-opacity duration-500 ease-in-out"
              style={{
                opacity: 1,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <p className="text-2xl leading-relaxed text-black dark:text-white md:leading-relaxed md:text-3xl">
                “{testimonials[activeTestimonial].quote}”
              </p>
            </blockquote>
            <div className="flex items-center mt-16">
              <p className="text-lg font-semibold text-black dark:text-white">
                {testimonials[activeTestimonial].name}
              </p>
              <p className="ml-3 text-lg text-gray-600 dark:text-gray-300">
                {testimonials[activeTestimonial].role}
              </p>
            </div>
          </div>

          {/* Interactive avatars with shadow and transition */}
          <div className="flex items-center mt-12 space-x-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                onClick={() => changeTestimonial(index)}
                className={`cursor-pointer flex items-center justify-center w-24 h-24 rounded-full ring-2 transition-all duration-300 ease-in-out ${
                  index === activeTestimonial
                    ? testimonial.ringColor
                    : "ring-transparent"
                }`}
              >
                <img
                  className="object-cover w-20 h-20 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
