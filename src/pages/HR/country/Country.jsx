import React from 'react';
import Datatable from '../../../components/datatable/Datatable';
import {
    IconButton, Link, Tooltip,
  } from '@mui/material';
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
  import CreateUpdateCountry from './CreateUpdateCountry';
import CountryContext from '../../../context/CountryContext';

function Country() {
    const getRowId = (row) => row._id;

    const {
      selectedData, editable, setEditable, name,
      createOpen,
      setCreateOpen,
      setSelectedData,
      warn,
      SetWarn,
      handleRowClick,
      queryResult,
      isLoading,
      error,
      countryData,
      createCountry,
      updateCountry,
      deleteCountry,
      refetch,
  } = React.useContext(CountryContext);
    const columns = [
        {
            field: '_id',
            headerName: 'ID',
            flex: 0.3,
            minWidth: 30,
            type: 'number',
            hideable: true,
            // fontSize: 12,
        },
        {
            field: 'countryName' ,
            headerName: 'countryName',
            flex: 0.7,
            minWidth: 130,
            editable: true,
            type: 'string',
        },
        {
            field: 'countryCode',
            headerName: 'countryCode',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',

        },
        // {
        //     field: 'countryLocation',
        //     headerName: 'countryLocation',
        //     flex: 0.7,
        //     minWidth: 100,  
        //     editable: true,
        //     type: 'string',
        // },
        {
          field: 'countryCurrency',
          headerName: 'countryCurrency',
          flex: 0.7,
          minWidth: 100,  
          editable: true,
          type: 'string',
        },{
          field: 'timeZone',
          headerName: 'timeZone',
          flex: 0.7,
          minWidth: 100,  
          editable: true,
          type: 'string',
        },{
              field: 'continent',
              headerName: 'continent',
              flex: 0.7,
              minWidth: 100,  
              editable: true,
              type: 'string',
          },{
            field: "actions",
            type: "actions",
            headerName: "ACTIONS",
            flex: 0.7,
            maxWidth: 100,
            minWidth: 60,
            renderCell: (params) => {
              return (
                <Tooltip title="View Details">
                <IconButton>
                  <ArrowForwardIcon
                    style={{ color: "#666666", cursor: "pointer" }}
      
                    onClick={() => handleRowClick(params.row)}
                  />
                </IconButton>
                </Tooltip>
              );
            }
          },
        ];
    return (
        <>
         {createOpen || selectedData ? (
             <CreateUpdateCountry
             name={name}
             selectedData={selectedData}
             editable={editable}
             setEditable={setEditable}
             createOpen={createOpen}
           
            />
            ) : (

                <Datatable
                columns={columns}
                rows={countryData}
                createOpen={createOpen}
                setCreateOpen={setCreateOpen}
                editable={editable}
                setEditable={setEditable}
                getRowId={getRowId}
                isLoading={isLoading}
                error={error}
                name={name}
            />
            )}

        </>
    )
}

export default Country
