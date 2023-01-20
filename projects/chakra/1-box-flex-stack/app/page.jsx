"use client";

import FlexBox from "./flex";
import PseudoClass from "./pseudo-class";
import StackBox from "./stack";

export default function Home() {
  return (
    <>
      <h1>Flex</h1>
      <FlexBox />
      <br />
      <h1>Stack</h1>
      <StackBox />
      <h1>Pseudo Class</h1>
      <PseudoClass/>
    </>
  );
}
