import React from "react";

export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-pink-primary to-light-blue-primary mx-6 rounded-3xl text-center">
      <p className="p-6 text-4xl font-bold ">Looking To Build On Key?</p>
      <button
        type="button"
        class="text-transparent bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#C517F1] to-[#5AFFFF]">
          Join Discord
        </p>
      </button>
    </div>
  );
}
