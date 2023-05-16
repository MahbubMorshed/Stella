import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Container from "./canvas/Container";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col">
        <Container />
        {/* <h3 className="text-6xl text-center">Aura</h3> */}
      </div>
      <StarsCanvas />
    </>
  );
};

export default Contact;
