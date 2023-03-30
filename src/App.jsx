import React, { useState } from "react";
import { InputLabel } from "./components/Input";

import Shield from "../public/icons/shield.svg";

const App = () => {
  return (
    <div className="font-primary h-screen flex justify-center items-center bg-body text-gray-200">
      <main className="p-8 bg-main rounded-lg h-[450px] w-[750px] border border-borderColor grid grid-cols-2 grid-rows-[auto_4rem] gap-8">
        <form className="flex flex-col gap-4">
          <InputLabel
            label="Número do cartão"
            name="cardNumber"
            placeholder="**** **** **** ****"
            max={19}
          />
          <InputLabel
            label="Nome do titular"
            name="cardName"
            placeholder="Nome como está no cartão"
          />
          <div className="flex items-center gap-2">
            <InputLabel
              type="text"
              label="Validade"
              name="validity"
              placeholder="mm/aa"
            />
            <InputLabel label="CVV" name="cvv" placeholder="***" />
          </div>
        </form>
        <div className="w-full h-full flex items-center justify-center gap-8 flex-col">
          <div className="w-[280px] h-[170px] rounded-2xl border border-borderColor bg-[url(../public/images/card-bg.png)] bg-cover bg-no-repeat"></div>
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
