import React from 'react';
import Chart from 'react-apexcharts';
import CatagoryContext from '../../context/CatagoryContext'

const StackedBarChart = ({key,category,subcategories}) => {

    // const { catagoryData } = React.useContext(CatagoryContext);
    // const assetCategories = catagoryData.map(item => item?.catagory);
    // console.log("aaaaaaaaaaaaaassetCategories",catagoryData, assetCategories);
    console.log("key,category,subcategories",key,category,subcategories);

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
        data: [44, 55, 41, 64, 22, 43, 21]
    }, {
        name: 'In Stock',
        data: [13, 23, 20, 8, 13, 27, 33]
    }, {
        name: 'Under mintenance',
        data: [11, 17, 15, 15, 21, 14, 15]
    }];

    const options = {
        chart: {
            type: 'bar',
            stacked: true,
            height: 350,
        },
        xaxis: {
            categories: ['January', 'February'],
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
        },
    };


    

    return (
        <Chart options={options} series={series} type="bar" height={350} />
    );
};

export default StackedBarChart;
