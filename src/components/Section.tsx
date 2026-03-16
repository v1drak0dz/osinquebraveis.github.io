import React from "react";
import Home from "@sections/Home";
import WeAre from "@sections/WeAre";
import Challenge from "@sections/Challenge";
import Sponsor from "@sections/Sponsor";
import Contact from "@sections/Contact";
import Posts from "@sections/Posts";
import SponsorsGrid from "@sections/SponsorsShown";

const EVEN = 'bg-orange-50'
const ODD = 'bg-orange-600'

export default function Section() {

  return (
    <>
      <Home id="home" backgroundColor={EVEN} />
      <Posts id="posts" backgroundColor={ODD} />
      <WeAre id="weare" backgroundColor={EVEN} />
      <Challenge id="challenge" backgroundColor={ODD} />
      <SponsorsGrid id="sponsorsgrid" backgroundColor={EVEN} />
      <Contact id="contact" backgroundColor={ODD} />
      <Sponsor id="sponsor" backgroundColor={EVEN} />
    </>
  );
}
