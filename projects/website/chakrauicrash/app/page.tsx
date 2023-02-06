"use client";
import HCom1 from "@/components/HCom1";
import React from "react";
import FlexBox1 from "@/components/FlexBox1";
import FlexBox2 from "@/components/FlexBox2";

import Lesson2 from "@/components/course/Lesson2";

import { Divider } from "@chakra-ui/react";
import Lesson3a from "@/components/course/Lesson3a";
import Navbar from "@/components/course/Navbar";
import FlexBoxCard from "@/components/FlexBoxCard";

export default function page() {
  return (
    <>
      <HCom1 />
      {/* <FlexBox1 />
      <FlexBox2 /> */}
      <Lesson2 />
      <Divider />
      <Lesson3a />
      <Divider />
      <Navbar />
      <FlexBox2 />
      <FlexBoxCard />
    </>
  );
}
