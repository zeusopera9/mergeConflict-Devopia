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
import PerformanceChart from "../components/Dashboard/BarChart";
import ProgressCircle from "../components/Dashboard/ProgressCircle";
import Sidebar from "../components/Dashboard/global/Sidebar";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data,setData] = useState('');
  useEffect(() => {
      const fetchPython = async () => {  
          try {
              const response = await fetch('http://127.0.0.1:5000/get_similarity')
              const data = await response.json();
              setData(data);
          } catch (error) {
              console.error('Error fetching Python data:', error);
          }
      }   
      fetchPython();
  },[])
  

  return (
    <Container className="w-screen flex flex-row flex-nowrap" style={{ flex: 1,  alignContent: 'start', justifyContent: 'start' }}>
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
                    {transaction.subject}
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
              Current Year Marks Distribution
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              <ProgressCircle size="125" />
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
              sx={{ padding: "20px 30px 10px 30px" }}
              style={{color: 'black'}}
            >
              Performance Prediction
            </Typography>
            <Box height="250px" mt="-10%">
              <PerformanceChart/>
            </Box>
          </Box>
          {/* <Box
            gridColumn="span 12"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            style={{borderRadius: '20px'}}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "20px 30px 10px 30px" }}
              style={{color: 'black'}}
            >
              {data}
            </Typography>
          </Box> */}
      </Box>
      </div>
    </Container>
  );
};

export default Dashboard;
