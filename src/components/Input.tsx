'use client'
import { useState } from "react";

export const Input = (props: any): JSX.Element => {
  const [value, setValue] = useState('');

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};
