import { createFileRoute } from "@tanstack/react-router";
import { Line } from "@ant-design/plots";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ];
  const config = {
    data,
    height: 400,
    xField: "year",
    yField: "value",
    style: {
      lineWidth: 2,
    },
  };
  return (
    <div>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
        Responsive
      </button>
      <Line {...config} />
    </div>
  );
}
