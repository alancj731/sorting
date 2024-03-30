"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import BarsComponent from "@/components/Bars";

const TotalBars = 50;
const SortRate = 10;

export default function DataBoard() {
  const [data, setData] = useState<number[]>([]);
  const [sorted, setSorted] = useState(false);
  const [startSort, setStartSort] = useState(false);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(TotalBars - 1);
  const [sortType, setSortType] = useState("");

  function handelSort(sortType: string) {
    setSortType(sortType);
    setStartSort(true);
    setSorted(false);
    switch (sortType) {
      case "bubbleSort":
        bubbleSort();
        break;
      default:
        break;
    }
  }

  const bubbleSort = () => {
    let currentLeft = left;
    let currentRight = right;
    if (currentRight === 0) {
      console.log("currentRight === 0, set sorted to true");
      setSorted(true);
      return;
    }
    let tempData = [...data];
    if (currentLeft === currentRight) {
      currentLeft = 0;
      currentRight -= 1;
      // set left to 1 and decrease right by 1
      setTimeout(() => {
        setLeft(currentLeft + 1);
        setRight(currentRight);
      }, SortRate);
    } else {
      setTimeout(() => {
        setLeft(currentLeft + 1);
      }, SortRate);
    }

    // adjust data
    if (tempData[currentLeft] > tempData[currentLeft + 1]) {
      const temp = tempData[currentLeft];
      tempData[currentLeft] = tempData[currentLeft + 1];
      tempData[currentLeft + 1] = temp;
      setData(tempData);
    }
  };

  function reinitializeData() {
    const bars = Array.from({ length: TotalBars }, () =>
      Math.floor(25 + Math.random() * 75)
    );
    setSorted(false);
    setStartSort(false);
    setLeft(0);
    setRight(TotalBars - 1);
    setData(bars);
  }

  useEffect(() => {
    reinitializeData();
  }, []);

  useEffect(() => {
    if (startSort) {
      switch (sortType) {
        case "bubbleSort":
          bubbleSort();
          break;
        default:
          break;
      }
    }
  }, [left, right]);

  return (
    <div className="flex-col flex items-center justify-center text-center">
      <div
        className="w-full flex-col bg-white rounded-2xl p-2"
        style={{ height: "400px" }}
      >
        <BarsComponent data={data} sorted={sorted} right={right} left={left} startSort={startSort} />
      </div>
      <div className="flex text-center m-6 justify-center">
        <Button
          variant={"secondary"}
          className="mt-8 font-bold text-xl"
          onClick={() => handelSort("bubbleSort")}
        >
          Bubble Sort
        </Button>
        <Button
          variant={"destructive"}
          className="mt-8 ml-4 font-bold text-xl"
          onClick={() => reinitializeData()}
        >
          Try it again
        </Button>
      </div>
    </div>
  );
}
