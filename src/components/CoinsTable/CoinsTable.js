import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { priceFormatter, btcFormatter } from "../../utils/priceFormatter";
import useWindowResize from "../../hooks/useWindowResize";
export default function CoinsTable({ coins }) {
  const windowSize = useWindowResize();
  const tableHeight = 0.9 * (windowSize.height - 128);
  const [direction, setDirection] = useState("desc");
  const [value, setValue] = useState("price");

  const setValueAndDirection = (localValue) => {
    setValue(localValue);
    direction === "asc" ? setDirection("desc") : setDirection("asc");
  };
  const sortBy = () => {
    if (direction === "asc") {
      return coins.sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }
    if (direction === "desc") {
      return coins.sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }
  };
  const sortedCoins = sortBy();
  const PriceChangeBadge = ({ value }) => {
    return value < 0 ? (
      <span className="p-2 text-red-500 text-sm bg-red-300 mx-auto rounded-xl flex items-center w-6/12 justify-center ">
        <FaArrowDown className="mr-1 h-2" />
        {value}%
      </span>
    ) : (
      <span className="p-2 text-green-500 text-sm bg-green-300 mx-auto rounded-xl flex items-center w-6/12 justify-center ">
        <FaArrowUp className="mr-1 h-2" />
        {value}%
      </span>
    );
  };
  return (
    <div
      className=" rounded-lg overflow-y-scroll h-9/12 bg-secondary"
      style={{ height: `${tableHeight}px` }}
    >
      <table className="w-full m-auto ">
        <thead className="sticky top-0 text-gray-500 text-md text-left h-20 bg-gray-50 ">
          <tr>
            <th onClick={() => setValueAndDirection("name")}>Name</th>
            <th onClick={() => setValueAndDirection("price")}>Price </th>
            <th onClick={() => setValueAndDirection("marketCap")}>
              Market Cap
            </th>
            <th onClick={() => setValueAndDirection("priceChange1d")}>
              24h Change
            </th>
          </tr>
        </thead>
        <tbody className=" w-full overflow-y-scroll">
          {sortedCoins.map((coin) => (
            <tr key={coin.id} className="hover:bg-gray-700">
              <Link href={`coin/${coin.id}`}>
                <td className="p-3 text-md text-white cursor-pointer">
                  <img
                    src={coin.icon}
                    alt={`${coin.name} logo`}
                    className="h-12 inline "
                  />
                  <span>{coin.name}</span>
                </td>
              </Link>
              <td className="p-3 text-md text-white ">
                {priceFormatter.format(coin.price)}
              </td>
              <td className="p-3 text-md text-white ">
                {priceFormatter.format(coin.marketCap)}
              </td>
              <td className="p-3 text-md text-white ">
                <PriceChangeBadge value={coin.priceChange1d} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
