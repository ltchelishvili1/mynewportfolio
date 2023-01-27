import React, { useEffect } from "react";

import Question from "./Question-component";

import { questions } from "./data.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

import { Section } from "./Faq-styles";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Section data-aos="fade-down">
      {questions.map((question) => (
        <Question
          key={question.id}
          title={question.title}
          answer={question.answer}
          icon={question.icon}
        />
      ))}
    </Section>
  );
};

export default Faq;
