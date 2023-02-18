import { useQuery } from '@tanstack/react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}

function Chart({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () => fetchCoinHistory(coinId), {
    refetchInterval: 10000,
  });

  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: 'Price',
              data: data?.map(price => parseFloat(price.close)) as number[],
            },
          ]}
          options={{
            theme: { mode: isDark ? 'dark' : 'light' },
            chart: { height: 300, width: 500, toolbar: { show: false }, background: 'transparent' },
            stroke: { curve: 'smooth', width: 3 },
            grid: { show: false },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              categories: data?.map(price => new Date(price.time_open * 1000).toISOString()),
              type: 'datetime',
            },
            yaxis: { show: false },
            fill: { type: 'gradient', gradient: { gradientToColors: ['#0be881'], stops: [0, 100] } },
            colors: ['#0fbcf9'],
            tooltip: { y: { formatter: value => `$${value.toFixed(2)}` } },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
