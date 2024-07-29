// NAO ESTA EM USO ESTA MERDA. NAO APAGAR PQ PODE SER UTIL NO FUTURO


import me from "@/assets/me.jpg";
import { Quotes } from "@phosphor-icons/react";
import { TestimonialTab } from "./TestimonialTab";
import { useState } from "react";

const testimonials = [
  {
    name: "Vinícius Gaona",
    role: "Tech Lead",
    company: "MZ",
    image: me,
    testimonial:
      "O Henrique é um excelente profissional, sempre disposto a ajudar e a aprender.",
    grade: 8,
  },
  {
    name: "Patrick Reis",
    role: "Frontend Developer",
    company: "MZ",
    image: me,
    testimonial: "Profissional barbado e muito dedicado.",
    grade: 10,
  },
  {
    name: "Gustavo Cordeiro",
    role: "Senior Software Engineer",
    company: "MZ",
    image: me,
    testimonial: "Ele é muito bom, ajuda muito a equipe e é muito dedicado.",
    grade: 9,
  },
];

export const Testimonials = () => {
  const [selected, setSelected] = useState("Vinícius Gaona");
  return (
    <>
      <div className="flex space-x-32 items-baseline mb-20">
        <h1 className="text-4xl">Depoimentos</h1>
        <h3 className="font-tech text-neutral-500">
          O que os meus co-workers dizem sobre mim
        </h3>
      </div>
      <article className="flex flex-col relative bg-neutral-800 p-12 rounded h-56 justify-center mb-10">
        <Quotes className="absolute top-12 right-12 text-5xl text-neutral-700" />
        <h3 className="font-tech text-neutral-400 mb-5">
          Avaliação{" "}
          <span className="text-green-300">
            {
              testimonials.find((testimonial) => testimonial.name === selected)
                ?.grade
            }
            /10
          </span>
        </h3>

        <p className="text-xl ">
          {
            testimonials.find((testimonial) => testimonial.name === selected)
              ?.testimonial
          }
        </p>
      </article>
      <div className="flex">
        {testimonials.map((testimonial) => {
          return (
            <TestimonialTab
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              image={testimonial.image}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </div>
    </>
  );
};
