import React, { useContext } from "react";

import { MoneyGramContext } from "../context/MoneyGramContext";

import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionCard = (item) => {
  return (
    <div className="xl:w-1/4 md:w-1/3 p-4">
      <div className="border border-gray-200 p-6 rounded-lg">
        <div className="flex justify-between">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-currency-ethereum"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#00abfb"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 12l6 -9l6 9l-6 9z" />
            <path d="M6 12l6 -3l6 3l-6 2z" />
          </svg>
        </div>
        <div className="h-10 bg-blue-800 inline-flex items-center justify-center rounded-lg px-2 text-white">{ item.transaction.amount } </div>
        </div>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          Transaction Detail
        </h2>
        <div className="flex leading-relaxed text-base">
          <span className="text-gray-400 font-bold mr-4">Date</span> 
            <a href={`https://ropsten.etherscan.io/address/${item.transaction.addressTo}`} target="_blank" rel="noreferrer">
              <p className=" text-base"> {shortenAddress(item.transaction.timestamp)}</p>
            </a>
        </div>
        <div className="flex leading-relaxed text-base">
          <span className="text-green-400 font-bold mr-4">Sender</span> 
            <a href={`https://ropsten.etherscan.io/address/${item.transaction.addressFrom}`} target="_blank" rel="noreferrer">
              <p className=" text-base"> {shortenAddress(item.transaction.addressFrom)}</p>
            </a>
        </div>
        <div className="flex leading-relaxed text-base">
          <span className="text-blue-400 font-bold mr-4">Reciver</span> 
            <a href={`https://ropsten.etherscan.io/address/${item.transaction.addressTo}`} target="_blank" rel="noreferrer">
              <p className=" text-base"> {shortenAddress(item.transaction.addressTo)}</p>
            </a>
        </div>
      </div>
    </div>
  );
};

const TransactionHistory = () => {
  const { transactions, currentAccount } = useContext(MoneyGramContext);

  return (
    <section className="text-gray-600 body-font bg-white px-32">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Transaction History
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          With so many options to transfer money internationally - through bank accounts, mobile wallets, at thousands of locations and online - MoneyGram lets you find your way.
          </p>
        </div>
        { transactions.length > 0 && 
        <div className="flex flex-wrap -m-4 items-center">
        {transactions.map((transaction, i) => (
          <TransactionCard key={i} transaction={ transaction } />
        ))}
      </div>}
      </div>
    </section>
  );
};

export default TransactionHistory;
