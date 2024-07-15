import React from "react";
import { Palette } from "@/types/Palette";
import clsx from "clsx";
import { DataPoint } from "@/types/DataPoint";
import { DataUnit } from "@/types/DataCard";
import { userPaletteClasses } from "@/utils/globals";

type DataChartProps = {
  palette: Palette;
  units: DataUnit;
  data: DataPoint[];
};

export default function DataChart({ palette, units, data }: DataChartProps) {
  return (
    <div className={userPaletteClasses[palette].block}>
      <div className="h-[175px]"></div>
      {data.length === 0 ? (
        <div className="h-full text-center">NO DATA</div>
      ) : (
        <div className="flex flex-row justify-between align-middle">
          <DataLabel units={units} point={data[0]} />
          <DataLabel units={units} point={data[data.length - 1]} />
        </div>
      )}
    </div>
  );
}

type DataLabelProps = {
  units: DataUnit;
  point: DataPoint;
};

function DataLabel({ units, point }: DataLabelProps) {
  let value = "";
  if (units === "K") {
    value = (point.value / 1000).toFixed(0).toLocaleString() + "K";
  } else if (units === "M") {
    value = (point.value / 1000000).toFixed(1).toLocaleString() + "M";
  } else if (units === "B") {
    value = (point.value / 1000000000).toFixed(1).toLocaleString() + "B";
  } else if (units === "%") {
    value = point.value + "%";
  } else {
    value = point.value.toString();
  }

  return (
    <div className="text-center">
      <div className="border-b px-2 text-2xl font-bold">{value}</div>
      <div className="text-lg">{point.year}</div>
    </div>
  );
}
