"use client"; 
import React from "react";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function Container(props) {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}

const fetchInvestments = async () => {
  const response = await fetch('/api/Investments');
  if (!response.ok) {
    throw new Error('Failed to fetch investments');
  }
  const data = await response.json();
  return data.response;
};

const Investments = () => {
  const [investments, setInvestments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getInvestments = async () => {
      try {
        const investmentsData = await fetchInvestments();
        setInvestments(investmentsData);
      } catch (error) {
        console.error('Error fetching investments:', error);
      }
    };

    getInvestments();
  }, []);

  const handleInvestmentClick = (investmentId) => {
    const url = `/investments/${investmentId}`;
    router.push(url);
  };

  return (
    <main className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Emprendimientos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {investments && investments.length > 0 ? (
          investments.map((investment, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg cursor-pointer transition-shadow"
              onClick={() => handleInvestmentClick(investment._id)}
            >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{investment.company}</h2>
                <h3 className="text-xl font-medium text-gray-600 mb-2">Campaña: {investment.campaign}</h3>
                {investment.imageUrl && (
                  <img
                    src={investment.imageUrl}
                    alt={investment.campaign}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                )}
                <ul className="space-y-2">
                  <li className="text-gray-700">
                    <span className="font-medium">Recaudación:</span> {investment.fundraising.amount} {investment.fundraising.currency}
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Meta:</span> {investment.goal.amount} {investment.goal.currency}
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Accionistas:</span> {investment.investments}
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Cierre:</span> {investment.end}
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Porcentaje recaudado:</span> {((investment.fundraising.amount * 100) / investment.goal.amount).toFixed(2)}%
                  </li>
                </ul>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No investments found.</p>
        )}
      </div>
    </main>
  );
};

export default Investments;
