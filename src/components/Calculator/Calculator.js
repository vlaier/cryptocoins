import React, { useState } from "react";
import Image from "next/image";
import usdCoin from "./images/usdCoin.png";
import btcCoin from "./images/btcCoin.png";
import { priceFormatter, btcFormatter } from "../../utils/priceFormatter";
export default function ConvertToUsd({
  baseCurrencyId,
  priceInBtc,
  priceInUsd,
  iconUrl,
}) {
  const [amount, setAmount] = useState("");

  return (
    <div className="flex flex-col gap-10 py-5">
      <span className="text-2xl text-center text-white">
        Conversion Calculator
      </span>
      <div className="relative w-full flex items-center text-primary appearance-none">
        <div className="relative w-full">
          <span className="absolute top-[-8px] bg-secondary left-5 text-xs text-white">{`${baseCurrencyId} amount`}</span>
          <input
            className="pl-14 py-4 shadow-hover shadow-sm text-white border-hover border-2 border-solid rounded-md w-full bg-transparent "
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            placeholder="Convert..."
          />
        </div>
        <img
          src={iconUrl}
          alt={`${baseCurrencyId} icon.`}
          className="absolute w-10 h-10 left-2  "
        />
      </div>
      <div className="relative w-full flex items-center text-primary appearance-none">
        <div className="relative w-full">
          <span className="absolute top-[-8px] bg-secondary left-5 text-xs text-white">{`USD amount`}</span>
          <input
            className="pl-14 py-4 shadow-hover shadow-sm text-white border-hover border-2 border-solid rounded-md w-full bg-transparent "
            value={priceFormatter.format(amount * priceInUsd)}
            type="text"
            placeholder="To..."
            disabled
          />
        </div>
        <div className="absolute w-10 h-10 left-2">
          <Image src={usdCoin} alt={`${baseCurrencyId} icon.`} />
        </div>
      </div>
      <div className="relative w-full flex items-center text-primary appearance-none">
        <div className="relative w-full">
          <span className="absolute top-[-8px] bg-secondary left-5 text-xs text-white">{`BTC amount`}</span>
          <input
            className="pl-14 py-4 shadow-hover shadow-sm text-white border-hover border-2 border-solid rounded-md w-full bg-transparent "
            value={btcFormatter.format(amount * priceInBtc)}
            type="text"
            placeholder="To..."
            disabled
          />
        </div>
        <div className="absolute w-10 h-10 left-2">
          <Image src={btcCoin} alt={`BTC icon.`} />
        </div>
      </div>
    </div>
  );
}
