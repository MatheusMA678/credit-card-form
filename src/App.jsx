import React, { useState, createRef } from "react";
import { InputLabel } from "./components/Input";
import { motion } from "framer-motion";
import Card from "react-credit-cards-2";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from "./utils";

import Shield from "./assets/icons/shield.svg";
import "react-credit-cards-2/es/styles-compiled.css";

const App = () => {
  const formRef = createRef();
  const [value, setValue] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    setValue((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleFocus = (e) => {
    setValue((prev) => ({ ...prev, focus: e.target.name }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const submitForm = () => {
    formRef.current.submit();
  };

  return (
    <div className="font-primary h-screen flex justify-center items-center bg-body text-gray-200">
      <main className="p-8 bg-main rounded-lg h-[450px] w-[750px] border border-borderColor grid grid-cols-2 grid-rows-[auto_4rem] gap-8">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <InputLabel
            type="tel"
            label="Número do cartão"
            name="number"
            placeholder="**** **** **** ****"
            onChange={handleChange}
            value={value.number}
            pattern="[\d| ]{16,22}"
            onFocus={handleFocus}
          />
          <InputLabel
            type="text"
            label="Nome do titular"
            name="name"
            placeholder="Nome como está no cartão"
            value={value.name}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          <div className="flex items-center gap-2">
            <InputLabel
              type="tel"
              label="Validade"
              name="expiry"
              placeholder="mm/aa"
              max={5}
              value={value.expiry}
              onChange={handleChange}
              pattern="\d\d/\d\d"
              onFocus={handleFocus}
            />
            <InputLabel
              type="tel"
              label="CVV"
              name="cvc"
              placeholder="***"
              max={3}
              value={value.cvc}
              onChange={handleChange}
              onFocus={handleFocus}
              pattern="\d{3,4}"
              hasInfo={true}
            />
          </div>
        </form>
        <div className="w-full h-full flex items-center justify-center gap-8 flex-col">
          <motion.div
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            dragElastic={0.1}
          >
            <Card
              cvc={value.cvc}
              expiry={value.expiry}
              focused={value.focus}
              name={value.name}
              number={value.number}
              locale={{
                valid: "Válido até",
              }}
              placeholders={{
                name: "Seu nome aqui",
              }}
            />
          </motion.div>
          <span className="text-sm flex items-center gap-2">
            <img src={Shield} alt="Segurança" />
            Seus dados estão seguros
          </span>
        </div>
        <button
          onClick={submitForm}
          className="col-span-2 w-full h-full bg-purplePrimary text-xl font-semibold rounded-md transition hover:bg-purplePrimary/80 active:bg-purplePrimary/50"
        >
          Adicionar cartão
        </button>
      </main>
    </div>
  );
};

export default App;
