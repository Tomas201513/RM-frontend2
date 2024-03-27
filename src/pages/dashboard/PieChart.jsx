import PropTypes from 'prop-types';
import {
    Box,
    Card,
    CardContent,
    Stack,
    SvgIcon,
    Typography,
    useTheme, Button, CardActions
} from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { css } from '@emotion/react';
const Charts = ({ css: styles, ...rest }) => (
    <ReactApexChart css={css`${styles}`} {...rest} />
);
const useChartOptions = (labels) => {
    const theme = useTheme();

    return {
        chart: {
            background: 'transparent'
        },
        colors: [
            theme.palette.primary.main,
            theme.palette.success.main,
            theme.palette.warning.main,
            theme.palette.error.main
        ],
        dataLabels: {
            enabled: false
        },
        labels,
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                expandOnClick: false
            }
        },
        states: {
            active: {
                filter: {
                    type: 'none'
                }
            },
            hover: {
                filter: {
                    type: 'none'
                }
            }
        },
        stroke: {
            width: 0
        },
        theme: {
            mode: theme.palette.mode
        },
        tooltip: {
            fillSeriesColor: false
        }
    };
};

// const iconMap = {
//     Desktop: (
//         <SvgIcon>
//             <ComputerDesktopIcon />
//         </SvgIcon>
//     ),
//     Tablet: (
//         <SvgIcon>
//             <DeviceTabletIcon />
//         </SvgIcon>
//     ),
//     Phone: (
//         <SvgIcon>
//             <PhoneIcon />
//         </SvgIcon>
//     )
// };

export const PieChart = (props) => {
    const { chartSeries, labels, sx } = props;
    const chartOptions = useChartOptions(labels);
    const navigate = useNavigate();

    return (
        <Card sx={sx}>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Typography sx={{
                    fontWeight: "bold",
                    color: "#000",
                }} variant="h6" >
                Asset Per Office
                </Typography>

                <Button
                disabled ={true}
                    // onClick={() => navigate('/app/cars')}
                    color="inherit"
                    endIcon={(
                        <SvgIcon fontSize="small">
                            <EastIcon />
                        </SvgIcon>
                    )}
                    size="small"
                    variant="text"
                >
                    View all
                </Button>
            </CardActions>
            <CardContent sx={{ display: 'flex', flexWrap: 'wrap',flexDirection: 'row', justifyContent:"center",

      flexGrow: 1, height: '50vh',
       gap: 5,  }}>

                <Charts
                    height="90%"
                    options={chartOptions}
                    series={chartSeries || []}
                    type="donut"
                    width="110%"
                />
                <Stack
                    alignItems="center"
                    direction="column"
                    justifyContent="center"
                    spacing={2}
                    sx={{ mt: 2 }}
                >
                    {chartSeries?.map((item, index) => {
                        const label = labels[index];

                        return (
                            <Box
                                key={label}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row ',
                                    alignItems: 'center'
                                }}>
                                {/* {iconMap[label]} */}
                                <Typography
                                    sx={{ my: 1, whiteSpace: 'nowrap',mr:3 }}
                                // variant="h6"
                                >
                                    {label}:
                                </Typography>
                                <Typography
                                    color="text.secondary"
                                    variant="subtitle2"
                                >
                                    {item}
                                </Typography>
                            </Box>
                        );
                    })}
                </Stack>
            </CardContent>
        </Card>
    );
};

PieChart.propTypes = {
    chartSeries: PropTypes.array.isRequired,
    labels: PropTypes.array.isRequired,
    sx: PropTypes.object,
    css: PropTypes.string
    
};