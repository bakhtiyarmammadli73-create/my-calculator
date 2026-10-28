"use client";

import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState<string>("0");

  const handleButtonClick = (value: string) => {
    if (value === "C") {
      setDisplay("0");
    } else if (value === "⌫") {
      if (display.length === 1 || display === "Xəta") {
        setDisplay("0");
      } else {
        setDisplay(display.slice(0, -1));
      }
    } else if (value === "=") {
      try {
        const result = eval(display);
        setDisplay(String(result));
      } catch (error) {
        setDisplay("Xəta");
      }
    } else {
      if (display === "0" || display === "Xəta") {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-xs rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 text-right text-3xl font-bold text-gray-800 bg-gray-50 p-4 rounded-lg border border-gray-200 min-h-[72px] flex items-center justify-end break-all overflow-hidden">
          {display}
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={() => handleButtonClick("C")}
            className="p-4 text-xl font-semibold rounded-xl bg-red-500 text-white hover:bg-red-600 active:scale-95 transition duration-150"
          >
            C
          </button>
          <button
            onClick={() => handleButtonClick("⌫")}
            className="p-4 text-xl font-semibold rounded-xl bg-orange-500 text-white hover:bg-orange-600 active:scale-95 transition duration-150"
          >
            ⌫
          </button>
          <button
            onClick={() => handleButtonClick("%")}
            className="p-4 text-xl font-semibold rounded-xl bg-blue-500 text-white hover:bg-blue-600 active:scale-95 transition duration-150"
          >
            %
          </button>
          <button
            onClick={() => handleButtonClick("/")}
            className="p-4 text-xl font-semibold rounded-xl bg-blue-500 text-white hover:bg-blue-600 active:scale-95 transition duration-150"
          >
            /
          </button>

          <button onClick={() => handleButtonClick("7")} className="p-4 text-xl font-semibold rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 active:scale-95 transition duration-150">7</button>
          <button onClick={() => handleButtonClick("8")} className="p-4 text-xl font-semibold rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 active:scale-95 transition duration-150">8</button>
          <button onClick={() => handleButtonClick("9")} className="p-4 text-xl font-semibold rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 active:scale-95 transition duration-150">9</button>
          <button onClick={() => handleButtonClick("*")} className="p-4 text-xl font-semibold rounded-xl bg-blue-500 text-white hover:bg-blue-600 active:scale-95 transition duration-150">*</button>

          <button onClick={() => handleButtonClick("4")} className="p-4 text-xl font-semibold rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 active:scale-95 transition duration-150">4</button>
          <button onClick={() => handleButtonClick("5")} className="p-4 text-xl font-semibold rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 active:scale-95 transition duration-150">5</button>
          <button onClick={() => handleButtonClick("6")} className="p-4 text-xl font-semibold rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 active:scale-95 transition duration-150">6</button>
          <button onClick={() => handleButtonClick("-")} className="p-4 text-xl font-semibold rounded-xl bg-blue-500 text-white hover:bg-blue-600 active:scale-95 transition duration-150">-</button>

          <button onClick={() => handleButtonClick("1")} className="p-4 text-xl font-semibold rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 active:scale-95 transition duration-150">1</button>
          <button onClick={() => handleButtonClick("2")} className="p-4 text-xl font-semibold rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 active:scale-95 transition duration-150">2</button>
          <button onClick={() => handleButtonClick("3")} className="p-4 text-xl font-semibold rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 active:scale-95 transition duration-150">3</button>
          <button onClick={() => handleButtonClick("+")} className="p-4 text-xl font-semibold rounded-xl bg-blue-500 text-white hover:bg-blue-600 active:scale-95 transition duration-150">+</button>

          <button onClick={() => handleButtonClick("0")} className="col-span-2 p-4 text-xl font-semibold rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 active:scale-95 transition duration-150">0</button>
          <button onClick={() => handleButtonClick(".")} className="p-4 text-xl font-semibold rounded-xl bg-gray-100 text-gray-800 hover:bg-gray-200 active:scale-95 transition duration-150">.</button>
          <button onClick={() => handleButtonClick("=")} className="p-4 text-xl font-semibold rounded-xl bg-green-500 text-white hover:bg-green-600 active:scale-95 transition duration-150">=</button>
        </div>
      </div>
    </main>
  );
}