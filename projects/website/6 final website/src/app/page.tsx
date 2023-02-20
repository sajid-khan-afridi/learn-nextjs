"use client";

import CardsArea from "./Components/CardsArea";
import Hero from "./Components/Hero";
import MiniCardArea from "./Components/MiniCardArea";
import SomeText from "./Components/SomeText";

export default function page() {
  return (
    <>
      <Hero />
      <CardsArea />
      <SomeText />
      <MiniCardArea />
    </>
  );
}
