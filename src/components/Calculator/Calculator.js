import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
export default function ConvertToUsd({
  baseCurrencyId,
  priceInBtc,
  priceInUsd,
  iconUrl,
}) {
  const [amount, setAmount] = useState(1);
  const [conversionRate, setConversionRate] = useState(priceInBtc);
  function handleChange(event) {
    setConversionRate(event.target.value);
  }
  return (
    <div className="">
      <div className="relative w-full flex items-center text-primary">
        <div className="relative w-full">
          <span className="absolute top-[-6px] bg-secondary left-5 text-xs text-white">{`${baseCurrencyId} amount`}</span>
          <input
            className=" pl-14 py-4 shadow-hover shadow-sm text-white border-hover border-2 border-solid rounded-md w-full bg-transparent "
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Amount"
          />
        </div>
        <img
          src={iconUrl}
          alt={`${baseCurrencyId} icon.`}
          className="absolute w-10 left-2  "
        />
      </div>

      <p>{`${amount * conversionRate} `}</p>
      <div className="relative  ">
        <select onChange={handleChange} className="h-10 w-full pl-10">
          <option value={priceInBtc}>BTC</option>

          <option value={priceInUsd}>USD</option>
        </select>
      </div>
    </div>
  );
}
