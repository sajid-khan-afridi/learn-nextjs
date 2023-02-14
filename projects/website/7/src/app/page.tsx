"use client";

import CardsArea from "./Components/CardsArea";
import Hero2 from "./Components/Hero2";
import Hero1 from "./Components/Hero1";
import MiniCardArea from "./Components/MiniCardArea";
import SomeText from "./Components/SomeText";

export default function page() {
  return (
    <>
      <Hero1 />
      <Hero2 />
      <CardsArea />
      <SomeText />
      <MiniCardArea />
    </>
  );
}
