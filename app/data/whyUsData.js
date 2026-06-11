// whyus/whyUsData.js
import React from 'react';

export const featuresData = [
  {
    id: 1,
    title: "Curated Tours",
    description: "Only the best destinations and experiences, selected just for you.",
    icon: (
      <svg className="w-7 h-7 text-[#0f2c59]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Guides Near You",
    description: "Get the best value with fair, transparent pricing and no hidden costs.",
    icon: (
      <svg className="w-7 h-7 text-[#0f2c59]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Safety Knowledge",
    description: "Safe and simple payments for a stress-free booking experience.",
    icon: (
      <svg className="w-7 h-7 text-[#0f2c59]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.956 11.956 0 0112 2.714z" />
      </svg>
    )
  }
];

export const statsData = [
  {
    id: 1,
    value: "15+",
    title: "Years Experience",
    description: "Trusted travel expertise since 2010.",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 2,
    value: "97%",
    title: "Satisfied Travelers",
    description: "Backed by real traveler reviews.",
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.757a1 1 0 00.707-1.707l-5.414-5.414a1 1 0 00-.707-.293V3.514a1 1 0 01-.293.707L8 9.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13a2 2 0 012-2h4v8H7a2 2 0 01-2-2v-4z" />
      </svg>
    )
  }
];