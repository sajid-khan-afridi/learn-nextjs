"use client";

import CardsArea from "./Components/CardsArea";
import Hero from "./Components/Hero";
import MiniCards from "./Components/MiniCards";

export default function page() {
  return (
    <>
      <Hero />
      <CardsArea />
      <MiniCards />
    </>
  );
}
