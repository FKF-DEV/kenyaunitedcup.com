import React from "react";
import { Border } from "../../components";
import Hero from "./sections/Hero";
import Articles from "./sections/Articles";

const AllArticles = () => {
  return (
    <div className="bg-gray-100">
      <Hero />
      <Border />
      <Articles />
      <Border />
    </div>
  );
};

export default AllArticles;
