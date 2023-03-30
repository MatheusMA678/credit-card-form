import React, { useState } from "react";
import { motion } from "framer-motion";

import Visa from "../assets/icons/visa.svg";
import Approx from "../assets/icons/approx-icon.svg";

export const Card = ({ cardNumber, cardName, validity, cvc, isFocused }) => {
  return (
    <motion.div
      className={`w-[280px] h-[170px] rounded-2xl border border-borderColor ${
        isFocused ? "bg-cardBack" : "bg-cardFront"
      } bg-cover bg-no-repeat`}
      initial={{}}
      animate={
        isFocused
          ? {
              rotateY: "180deg",
            }
          : {}
      }
      transition={{
        duration: 0.5,
      }}
    >
      {!isFocused ? (
        <div className="p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <img src={Visa} alt="Visa" />
            <img src={Approx} alt="Aproximação" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="w-full bg-transparent">
              {cardNumber === "" ? "**** **** **** ****" : cardNumber}
            </h2>
            <div className="flex items-center justify-between">
              <h3 className="bg-transparent text-gray-400 text-sm flex-1">
                {cardName === "" ? "Seu nome aqui" : cardName}
              </h3>
              <span className="w-fit bg-transparent text-gray-400 text-sm">
                {validity === "" ? "* * / * *" : validity}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{
            rotateY: "180deg",
          }}
          className="p-6 flex flex-col justify-between"
        >
          <div>
            <div className="absolute bg-body h-8 top-6 left-0 right-0"></div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
