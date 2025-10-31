import React from "react";
export default function ProductCard({ title, desc, img }) {
  return (
    <article className="bg-white rounded-2xl shadow p-4">
      <div className="h-44 overflow-hidden rounded-lg">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
      <div className="mt-4 flex justify-between items-center">
        <a href="/contact" className="text-sm">
          Enquire
        </a>
        <a
          href="/contact"
          className="px-3 py-1 rounded-md text-white text-sm bg-maincolor"
        >
          Request Quote
        </a>
      </div>
    </article>
  );
}
