import React from "react";
import { Palette } from "@/types/Palette";
import { DataPoint } from "@/types/DataPoint";
import { DataUnit } from "@/types/DataCard";
import { userPaletteClasses } from "@/utils/globals";
import { line, scaleLinear, extent } from "d3";
import clsx from "clsx";

type DataChartProps = {
  palette: Palette;
  label: string;
  units: DataUnit;
  data: DataPoint[];
};

export default function DataChart({
  palette,
  label,
  units,
  data,
}: DataChartProps) {
  const sortedData = data.sort((a, b) => a.year - b.year);

  return (
    <div className={clsx(userPaletteClasses[palette].block, "space-y-4")}>
      <div className="h-[175px] w-full">
        <LineChart
          className="h-full w-full"
          palette={palette}
          width={352}
          height={175}
          data={sortedData}
          label={label}
        />
      </div>
      {data.length === 0 ? (
        <div className="h-full text-center">NO DATA</div>
      ) : (
        <div className="flex flex-row justify-between align-middle">
          <DataLabel units={units} point={sortedData[0]} />
          <DataLabel units={units} point={sortedData[data.length - 1]} />
        </div>
      )}
    </div>
  );
}

type LineChartProps = {
  className: string;
  palette: Palette;
  width: number;
  height: number;
  data: DataPoint[];
  label: string;
};

function LineChart({
  className,
  palette,
  width,
  height,
  label,
  data,
}: LineChartProps) {
  const margin = { top: 5, right: 5, bottom: 5, left: 5 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const years = data.map((p) => p.year);
  const values = data.map((p) => p.value);

  const xDomain = extent(years) as [number, number];
  const yDomain = extent(values) as [number, number];

  const x = scaleLinear().domain(xDomain).range([0, chartWidth]);
  const y = scaleLinear().domain(yDomain).range([chartHeight, 0]);

  const dataLine = line<DataPoint>()
    .x((d) => x(d.year))
    .y((d) => y(d.value));

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={label}
      className={className}
    >
      <g transform={`translate(${margin.top} ${margin.left})`}>
        <path
          className={clsx("fill-none", {
            "stroke-white": palette === "blue",
            "stroke-grape-500": palette === "white" || palette === "gray",
          })}
          style={{
            strokeWidth: 4,
          }}
          d={dataLine(data) || ""}
        />
        <g
          className={clsx("stroke-none", {
            "fill-white": palette === "blue",
            "fill-grape-500": palette === "white" || palette === "gray",
          })}
        >
          {data.map((p) => (
            <circle key={p.year} cx={x(p.year)} cy={y(p.value)} r={4.5} />
          ))}
        </g>
      </g>
    </svg>
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
