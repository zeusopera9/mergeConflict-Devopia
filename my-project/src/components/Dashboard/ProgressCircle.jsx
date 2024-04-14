import { Box, useTheme } from "@mui/material";
import { tokens } from "../../assets/theme";
import { PieChart } from '@mui/x-charts/PieChart';

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 1, value: 10, label: 'English' },
            { id: 2, value: 10, label: 'Hindi' },
            { id: 3, value: 10, label: 'Maths' },
            { id: 4, value: 10, label: 'Science' },
            { id: 5, value: 15, label: 'Geography' },
            { id: 6, value: 20, label: 'History' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
};

export default ProgressCircle;