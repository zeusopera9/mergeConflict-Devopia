import { BarChart } from '@mui/x-charts/BarChart';


const PerformanceChart = () => {

  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B'] }]}
      series={[{ data: [4, 3] }]}
      width={500}
      height={300}
    />
  );
};

export default PerformanceChart;