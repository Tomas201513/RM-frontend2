import React from 'react';
// import json from './data.json';
import Chart from 'react-apexcharts';
import CatagoryContext from '../../../context/CatagoryContext'
import { Card } from '@mui/material';

const StackedBarChart = ({key,category,subcategories}) => {

    // const { catagoryData } = React.useContext(CatagoryContext);
    // const assetCategories = catagoryData.map(item => item?.catagory);
    // console.log("aaaaaaaaaaaaaassetCategories",catagoryData, assetCategories);
    // console.log("key,category,subcategories",key,category,subcategories);
    const firstSubcategoryKey = Object.keys(subcategories);

    // const categorizedSubcategories = data.reduce((result, item) => {
    //     const category = item.category.category;
    //     const subCategory = item.subCategory;
        
    //     if (!result[category]) {
    //       result[category] = [];
    //     }
        
    //     result[category].push(subCategory);
        
    //     return result;
    //   }, {});
      
    //   console.log(categorizedSubcategories);
    const series = [{
        name: 'Assigned',
        // data: [subcategories[firstSubcategoryKey[0]].assigned||0, subcategories[firstSubcategoryKey[1]]?.assigned||0]
        data: Object.values(subcategories).map(item => item.assigned||0)
    }, {
        name: 'In Stock',
        data: Object.values(subcategories).map(item => item.in_stock||0)
    }, {
        name: 'Under mintenance',
        data: Object.values(subcategories).map(item => item.in_maintenance||0)
    }];

    const options = {
        chart: {
            type: 'bar',
            stacked: true,
            height: 350,
        },
        xaxis: {
            categories: firstSubcategoryKey,
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
        },
    };

    const sx = {
        flexGrow: 1,
        mb: 2,
        mt: 2,
        mr: 2,
        ml: 2,
        
        border: "none",
        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.05)",
        borderRadius: "10px",
        // transition: "all 0.3s ease-in-out",
        // '&:hover': {
        //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        // }
      }
    

    return (
        <>
        <Card sx={sx} >
        {/* {firstSubcategoryKey} */}
        {category}
        <Chart  options={options} series={series} type="bar" height={350} />
        
        </Card>
        </>
    );
};

export default StackedBarChart;
