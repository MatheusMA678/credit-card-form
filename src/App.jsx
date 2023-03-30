import React, { useState } from "react";
import { InputLabel } from "./components/Input";

import Shield from "./assets/icons/shield.svg";
import { Card } from "./components/Card";

const App = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState({
    cardNumber: "",
    cardName: "",
    validity: "",
    cvc: "",
  });

  return (
    <div className="font-primary h-screen flex justify-center items-center bg-body text-gray-200">
      <main className="p-8 bg-main rounded-lg h-[450px] w-[750px] border border-borderColor grid grid-cols-2 grid-rows-[auto_4rem] gap-8">
        <form className="flex flex-col gap-4">
          <InputLabel
            label="Número do cartão"
            name="cardNumber"
            placeholder="**** **** **** ****"
            max={16}
            onChange={(e) => setValue({ ...value, cardNumber: e.target.value })}
            value={value.cardNumber}
          />
          <InputLabel
            label="Nome do titular"
            name="cardName"
            placeholder="Nome como está no cartão"
            value={value.cardName}
            onChange={(e) => setValue({ ...value, cardName: e.target.value })}
          />
          <div className="flex items-center gap-2">
            <InputLabel
              type="text"
              label="Validade"
              name="validity"
              placeholder="mm/aa"
              max={5}
              value={value.validity}
              onChange={(e) => setValue({ ...value, validity: e.target.value })}
            />
            <InputLabel
              type={"text"}
              label="CVV"
              name="cvv"
              placeholder="***"
              max={3}
              value={value.cvc}
              onChange={(e) => setValue({ ...value, cvc: e.target.value })}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
        </form>
        <div className="w-full h-full flex items-center justify-center gap-8 flex-col">
          <Card
            cardNumber={value.cardNumber}
            cardName={value.cardName}
            validity={value.validity}
            cvc={value.cvc}
            isFocused={isFocused}
          />
          <span className="text-sm flex items-center gap-2">
            <img src={Shield} alt="Segurança" />
            Seus dados estão seguros
          </span>
        </div>
        <button className="col-span-2 w-full h-full bg-purplePrimary text-xl font-semibold rounded-md">
          Adicionar cartão
        </button>
      </main>
    </div>
  );
};

export default App;
