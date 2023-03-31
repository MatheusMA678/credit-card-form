import React, { useState } from "react";

import InfoIcon from "../assets/icons/info.svg";
import { Popover } from "./Popover";

export const InputLabel = ({
  value,
  onChange,
  label,
  placeholder,
  type,
  name,
  max,
  onFocus,
  onBlur,
  pattern,
  hasInfo,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-semibold flex items-center gap-2">
        {label}
        <div className={`${hasInfo ? "" : "hidden"} relative`}>
          <img
            src={InfoIcon}
            alt="Info"
            className={`w-3 h-3 hover:opacity-80`}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          />
          <Popover isShow={show} />
        </div>
      </label>
      <input
        type={type}
        name={name}
        className="w-full h-12 bg-input px-4 outline-none focus:ring-2 focus:ring-purplePrimary rounded-md transition hover:ring-2 ring-1 ring-borderColor"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        maxLength={max}
        onFocus={onFocus}
        onBlur={onBlur}
        required
        pattern={pattern}
      />
    </div>
  );
};
