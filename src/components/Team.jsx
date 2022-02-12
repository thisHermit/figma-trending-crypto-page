import React from "react";

const teamDetails = [
  {
    name: "John Williams",
    position: "CTO",
    description:
      "Passion for Defi. Has worked @coinbase & @google as an advisor",
  },
  {
    name: "Alisha Ruckets",
    position: "Advisor",
    description:
      "Has excellent skills in project management. Previously at @binance",
  },
  {
    name: "Maria Silva",
    position: "Full Stack Developer",
    description:
      "Has an experience of 10+ years working in web.3. Previously @crypto.com",
  },
];

export default function Team() {
  return (
    <div className="p-6">
      <div className="p-6 text-5xl font-bold text-center">
        <p>Meet The Team</p>
      </div>
      <div className="columns-3 flex flex-wrap gap-8 p-6 place-content-center">
        {teamDetails.map((item) => (
          <a
            href="."
            class="text-center block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
            <p class="text-gray-700 dark:text-gray-400">{item.position}</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
