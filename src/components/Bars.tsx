"use client";
import { useState, useEffect } from "react";
const BarsComponent = ({ data, sorted }: { data: number[]; sorted: boolean }) => {
  // Generate an array of 50 elements with random heights
  const [bars, setBars] = useState<number[]>([]);
  const [dataSorted, setDataSorted] = useState(false);
  useEffect(() => {
    setBars(data);
  }, [data, sorted]);

  return (
    <div>
      {bars.length === 0 && <div>Loading...</div>}
      {bars.length > 0 && (
        <div
          className="flex rounded-2xl"
          style={{ height: "480px" }}
        >
          {bars.map((height, index) => (
            <div
              key={index}
              style={{
                width: "2%", // Sets the width of each bar to be 2% of the container's width
                height: `${height}%`, // Random height for each bar
                background: sorted ? "#059669" : "#333",
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
