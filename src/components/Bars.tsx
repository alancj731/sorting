"use client";
import { useState, useEffect } from "react";
const BarsComponent = ({ data, sorted, left, right, startSort }: { data: number[]; sorted: boolean, left: number, right:number, startSort: boolean }) => {
  // Generate an array of 50 elements with random heights
  const [bars, setBars] = useState<number[]>([]);
  useEffect(() => {
    setBars(data);
  }, [data, sorted]);

  return (
    <div>
      {bars.length === 0 && <div>Loading...</div>}
      {bars.length > 0 && (
        <div
          className="flex rounded-2xl"
          style={{ height: "380px" }}
        >
          {bars.map((height, index) => (
            <div
              key={index}
              style={{
                width: "2%", // Sets the width of each bar to be 2% of the container's width
                height: `${height}%`, // Random height for each bar
                background: startSort? sorted ? "#059669" : index > right ? "rgb(56 189 248)" : index===left? "rgb(252 165 165)" : "#333" : "#333",
                margin: "0.3%", // Adds a little space between bars
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BarsComponent;
