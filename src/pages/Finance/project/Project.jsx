import React from 'react';
import Datatable from 'src/components/datatable/Datatable';
import ProjectContext from 'src/context/ProjectContext';
import {
    IconButton, Link, Tooltip,
  } from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


import CreateUpdateProject from './CreateUpdateProject';

function Project() {
    const getRowId = (row) => row._id;

    const {
       
        projectData,
        isLoading,
        error,
        createOpen,
        setCreateOpen,
        selectedData,
        editable,
        setEditable,
        handleRowClick,
        SetWarn
        } = React.useContext(ProjectContext);
    const  name = "Project"
    const columns = [
        {
            field: '_id',
            headerName: 'ID',
            flex: 0.3,
            minWidth: 30,
            type: 'number',
            hideable: true,
            // fontSize: 12,
        },{
          field : 'projectTitle',
          headerName: 'Project Title',
          flex: 0.7,
          minWidth: 100,
          editable: true,
          type: 'string',

      },
        {
            field : 'donorName',
            headerName: 'Donor',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',

        }, {
          field : 'backDonor',
          headerName: 'back Donor',
          flex: 0.7,
          minWidth: 100,
          editable: true,
          type: 'string',

      },
      {
        field : 'projStartDate',
        headerName: 'projStartDate',
        flex: 0.7,
        minWidth: 100,
        editable: true,
        type: 'string',

    },
    {
      field : 'projEndDate',
      headerName: 'projEndDate',
      flex: 0.7,
      minWidth: 100,
      editable: true,
      type: 'string',

  },{
    field: 'projectCode',
    headerName: 'projectCode',
    flex: 0.7,
    minWidth: 100,
    editable: true,
    type: 'string',

},
        {
            field: 'donorCode' ,
            headerName: 'Donor Code',
            flex: 0.7,
            minWidth: 130,
            editable: true,
            type: 'string',
        },
        {
            field: 'totalBudget',
            headerName: 'totalBudget',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',

        }, {
          field: 'projectManager',
          headerName: 'projectManager',
          flex: 0.7,
          minWidth: 100,
          editable: true,
          type: 'string',
          valueGetter: (params) => {
            return params.row?.projectManager?.email
            }

           },

        {
            field: 'country',
            headerName: 'country',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',
            valueGetter: (params) => {
              return params.row?.country?.countryName
              }
  
          

        },  {
          field: 'status',
          headerName: 'status',
          flex: 0.7,
          minWidth: 100,
          editable: true,
          type: 'string',

      },{
          field: 'comment',
          headerName: 'comment',
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
              <CreateUpdateProject
              name={name}
                    selectedData={selectedData}
                    editable={editable}
                    setEditable={setEditable}
                    createOpen={createOpen}
                />

            ) : (
                <Datatable
                columns={columns}
                rows={projectData}
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
    )
}

export default Project


