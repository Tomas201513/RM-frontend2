import React from 'react';
import Datatable from 'src/components/datatable/Datatable';
import ItContext from 'src/context/ItContext';
import {
    IconButton, Link, Tooltip,
  } from '@mui/material';
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
  import CreateUpdateIt from './CreateUpdateIt'
import CreateUpdateEndpoint from "./CreateUpdateEndpoint";

function It() {
    const getRowId = (row) => row._id;

    const {
      itData,
        isLoading,
        error,
        createOpen,
        setCreateOpen,
        selectedData,
        editable,
        setEditable,
        handleRowClick,
        SetWarn
      } = React.useContext(ItContext);
  const name ='Endpoint'
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
          headerName: 'Type',
          // flex: 0.7,
          // minWidth: 100,
          editable: true,
          type: 'string',
          hideable: true,
          
          valueGetter: (params) => {
              return params.row?.asset?.type;
              },

          }, {
            field: 'country' ,
            headerName: 'Country',
            flex: 0.7,
            minWidth: 130,
            editable: true,
            type: 'string',
            valueGetter: (params) => {
              return params.row?.asset?.currentUser?.office?.country?.countryName;
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
          field: 'officeAreaName' ,
          headerName: 'officeAreaName',
          flex: 0.7,
          minWidth: 130,
          editable: true,
          type: 'string',
          valueGetter: (params) => {
            return params.row?.asset?.currentUser?.office?.officeAreaName;
            },

        },  
        {
        field: 'tag' ,
        headerName: 'tag',
        flex: 0.7,
        minWidth: 130,
        editable: true,
        type: 'string',
        valueGetter: (params) => {
          return params.row?.asset?.tag;
          },

      }, 
        {
            field: 'computerName' ,
            headerName: 'computerName',
            flex: 0.7,
            minWidth: 130,
            editable: true,
            type: 'string',
        },
        {
        field: 'serialNumber' ,
        headerName: 'serialNumber',
        flex: 0.7,
        minWidth: 130,
        editable: true,
        type: 'string',
        valueGetter: (params) => {
          return params.row?.asset?.serialNumber;
          },

      },
      {
        field: 'windowsLicenseStatus',
        headerName: 'windowsLicenseStatus',
        flex: 0.7,
        minWidth: 100,  
        editable: true,
        type: 'string',
    }, 
        {
            field: 'windowsVersion',
            headerName: 'windowsVersion',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',

        },
      //   {
      //     field: 'officeEdition',
      //     headerName: 'officeEdition',
      //     flex: 0.7,
      //     minWidth: 100,  
      //     editable: true,
      //     type: 'string',
      // },
      {
        field: 'officeLicenseStatus',
        headerName: 'officeLicenseStatus',
        flex: 0.7,
        minWidth: 100,  
        editable: true,
        type: 'string',
    },{
        field: 'officeVersion',
        headerName: 'officeVersion',
        flex: 0.7,
        minWidth: 100,  
        editable: true,
        type: 'string',
    },{
    field: 'antivirusInstalled',
    headerName: 'antivirusInstalled',
    flex: 0.7,
    minWidth: 100,  
    editable: true,
    type: 'string',
},
// {
//   field: 'antivirusLicenseStatus',
//   headerName: 'antivirusLicenseStatus',
//   flex: 0.7,
//   minWidth: 100,  
//   editable: true,
//   type: 'string',
// },
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
              <CreateUpdateEndpoint
                name={name}
                selectedData={selectedData}
                editable={editable}
                setEditable={setEditable}
                createOpen={createOpen}
              />
            ) : (
      
              <Datatable
              columns={columns}
              rows={itData}
              createOpen={createOpen}
              setCreateOpen={setCreateOpen}
              editable={editable}
              setEditable={setEditable}
              getRowId={getRowId}
              isLoading={isLoading}
              error={error}
              name={name}
              SetWarn={SetWarn}

              />
      
            )}
          </>
        );
      }
      export default It;
      
      
      
      
    