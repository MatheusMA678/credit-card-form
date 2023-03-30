import React from "react";

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
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="w-full h-12 bg-input px-4 outline-none focus:ring-2 focus:ring-purplePrimary rounded-md transition hover:ring-2 ring-1 ring-borderColor invalid:ring-2 invalid:ring-red-500"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        maxLength={max}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};
