import React from 'react';
import Datatable from 'src/components/datatable/Datatable';
import ConnContext from 'src/context/ConnContext';
import {
    IconButton, Link, Tooltip,
  } from '@mui/material';
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
  import CreateUpdateConn from './CreateUpdateConn';

function Conn() {
    const getRowId = (row) => row._id;

    const {
      createOpen,
      setCreateOpen,
      selectedData,
      setSelectedData,
      editable,
      setEditable,
      warn,
      SetWarn,
      handleRowClick,
      queryResult,
      isLoading,
      error,
      connData,
      createConn,
      updateConn,
      deleteConn,
      refetch,
      } = React.useContext(ConnContext);
  const name ='Connectivity'
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
          field : 'asset',
          headerName: 'asset',
          // flex: 0.7,
          // minWidth: 100,
          editable: true,
          type: 'string',
          hideable: true,
          valueGetter: (params) => {
              return params.row?.asset?.type;
              },

          },
          {
            field: 'country' ,
            headerName: 'Country',
            flex: 0.7,
            minWidth: 130,
            editable: true,
            type: 'string',
            valueGetter: (params) => {
              return params.row?.asset?.currentUser?.office?.country;
              },
          },
          {
            field: 'officeLocation' ,
            headerName: 'officeLocation',
            flex: 0.7,
            minWidth: 130,
            editable: true,
            type: 'string',
            valueGetter: (params) => {
              return params.row?.asset?.currentUser?.office?.officeLocation;
              },
          },
        {
            field: 'actedPremises' ,
            headerName: 'actedPremises',
            flex: 0.7,
            minWidth: 130,
            editable: true,
            type: 'string',
        },
        {
          field: 'officeSubAreaName' ,
          headerName: 'officeSubAreaName',
          flex: 0.7,
          minWidth: 130,
          editable: true,
          type: 'string',
          valueGetter: (params) => {
            return params.row?.asset?.currentUser?.office?.officeSubAreaName;
            },

        }, 
        {
            field: 'userN',
            headerName: 'userN',  
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',

        },{
            field: 'internetLink',
            headerName: 'internetLink',
            flex: 0.7,
            minWidth: 100,  
            editable: true,
            type: 'string',
        },{
          field: 'isp',
          headerName: 'isp',
          flex: 0.7,
          minWidth: 100,  
          editable: true,
          type: 'string',
      },
        {
          field: 'uploadSpeed',
          headerName: 'uploadSpeed',
          flex: 0.7,
          minWidth: 100,  
          editable: true,
          type: 'string',
      },{
        field: 'downloadSpeed',
        headerName: 'downloadSpeed',
        flex: 0.7,
        minWidth: 100,  
        editable: true,
        type: 'string',
    },{
      field: 'contentionRatio',
      headerName: 'contentionRatio',
      flex: 0.7,
      minWidth: 100,  
      editable: true,
      type: 'string',
  },{
    field: 'purpose',
    headerName: 'purpose',
    flex: 0.7,
    minWidth: 100,  
    editable: true,
    type: 'string',
},{
  field: 'device',
  headerName: 'device',
  flex: 0.7,
  minWidth: 100,  
  editable: true,
  type: 'string',
},
        {
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
              <CreateUpdateConn
                name={name}
                selectedData={selectedData}
                editable={editable}
                setEditable={setEditable}
                createOpen={createOpen}
              />
            ) : (
      
              <Datatable
                columns={columns}
                rows={connData}
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
        );
      }
      export default Conn; 
      
      
      
      
    