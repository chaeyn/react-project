import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { Helmet } from "react-helmet";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface IHistorical {
  time_open: string;
  time_close: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistorical[]>({
    queryKey: ["ohlcv", `${coinId}`],
    queryFn: () => fetchCoinHistory(`${coinId}`),
  });
  return (
    <>
      <Helmet>
        <title>{coinId} | Chart</title>
      </Helmet>
      <div>
        {isLoading ? (
          "Loading chart..."
        ) : (
          <ApexChart
            type='line'
            series={[
              {
                name: "Price",
                data: data?.map((price) => price.close) as number[],
              },
            ]}
            options={{
              theme: {
                mode: isDark ? "dark" : "light",
              },
              chart: {
                height: 300,
                width: 500,
                toolbar: { show: false },
                background: "transparent",
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                axisBorder: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
                labels: {
                  show: false,
                },
                categories: data?.map((price) =>
                  new Date(price.time_close * 1000).toISOString()
                ),
                type: "datetime",
              },
              grid: { show: false },
              stroke: {
                curve: "smooth",
                width: 5,
              },
              fill: {
                type: "gradient",
                gradient: {
                  gradientToColors: ["#0be881"],
                  stops: [0, 100],
                },
              },
              colors: ["#0fbcf9"],
              tooltip: {
                y: {
                  formatter: (value) => `$${value.toFixed(1)}`,
                },
              },
            }}
          />
        )}
      </div>
    </>
  );
}

export default Chart;
