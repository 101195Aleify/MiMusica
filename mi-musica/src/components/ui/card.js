// src/components/card.js
import React from 'react';

export function Card({ children }) {
  return <div className="border rounded-lg shadow-md p-4">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="space-x-2">{children}</div>;
}
