import React from "react";
import { motion } from "framer-motion";

export const Popover = ({ isShow }) => {
  return (
    <div
      className={`${
        isShow ? "" : "hidden"
      } absolute top-full bg-gray-600 min-h-[80px] w-[200px] z-10 rounded-lg transition duration-200 ease-in-out overflow-hidden shadow-lg`}
    >
      <div className="w-full py-2 px-4 bg-body border-b-2 border-gray-500">
        <span className="text-sm font-semibold">CVV</span>
      </div>
      <p className="p-4 text-xs font-normal">
        <span className="font-bold">CVV</span> é o Código de Segurança do cartão
        de crédito/débito. Ele geralmente possui 3 dígitos mas, em alguns
        lugares, ele possui 4 dígitos.
      </p>
    </div>
  );
};
