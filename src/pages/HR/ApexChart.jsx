import React from 'react';
import ReactApexChart from 'react-apexcharts';
import UserContext from '../../context/UserContext';

const ApexChart = (props) => {
  const {userCountByOffice} = React.useContext(UserContext);

  const [options, setOptions] = React.useState({
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: false,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900,
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    title: {
      text: 'Staff Count by Office',
    },
    xaxis: {
      categories: Object.values(userCountByOffice).map(item => item.name),
      labels: {
        // formatter: (val) => val + 'K',
        formatter: (val) => val ,
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    tooltip: {
      y: {
        // formatter: (val) => val + 'K',
        formatter: (val) => val,

      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40,
    },
  });

  const [series, setSeries] = React.useState([
    {
      name: 'Staff Count by Office',
      data: Object.values(userCountByOffice).map(item => item.value)
    },
    // {
    //   name: 'Striking Calf',
    //   data: [53, 32, 33, 52, 13, 43, 32],
    // },
    // {
    //   name: 'Tank Picture',
    //   data: [12, 17, 11, 9, 15, 11, 20],
    // },
    // {
    //   name: 'Bucket Slope',
    //   data: [9, 7, 5, 8, 6, 9, 4],
    // },
    // {
    //   name: 'Reborn Kid',
    //   data: [25, 12, 19, 32, 25, 24, 10],
    // },
  ]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
