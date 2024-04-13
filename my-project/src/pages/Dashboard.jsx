import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../assets/theme";
import { mockTransactions } from "../assets/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../components/Dashboard/LineChart";
import BarChart from "../components/Dashboard/BarChart";
import ProgressCircle from "../components/Dashboard/ProgressCircle";
import Sidebar from "../components/Dashboard/global/Sidebar";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Container className="w-screen flex flex-row flex-nowrap" style={{marginTop:'5%', flex: 1,  alignContent: 'start', justifyContent: 'start' }}>
      <Sidebar />
      <div className="flex-[0.7] ml-32">
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
          >
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            style={{ paddingBottom: "40px", borderRadius: '20px' }}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Perfomance Over Years
                </Typography>
              </Box>
            </Box>
            <Box height="250px" m="-35px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>

          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            overflow="auto"
            style={{borderRadius: '20px',}}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="4.3%"
              style={{height: '22.2%'}}
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                Test
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
                style={{marginBottom: '-1px'}}
              >
                <Box style={{gap: '2px'}}>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {`Test ${transaction.txId}`}
                  </Typography>
                </Box>
                <button
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  Attempt
                </button>
              </Box>
            ))}
          </Box>

          <Box
            gridColumn="span 6"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            p="30px"
            style={{borderRadius: '20px'}}
          >
            <Typography variant="h5" fontWeight="600" style={{color: 'black'}}>
              Campaign
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                sx={{ mt: "15px" }}
              >
                $48,352 revenue generated
              </Typography>
              <Typography style={{color: 'black'}}>
              </Typography>
            </Box>
          </Box>
          <Box
            gridColumn="span 6"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            style={{borderRadius: '20px'}}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
              style={{color: 'black'}}
            >
              Performance Prediction
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default Dashboard;
