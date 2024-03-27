import React from 'react';
import Datatable from 'src/components/datatable/Datatable';
import BudgetContext from 'src/context/BudgetContext';
import {
    IconButton, Link, Tooltip,
  } from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CreateUpdateBudget from './CreateUpdateBudget';

function Budget() {
    const getRowId = (row) => row._id;

    const {   
        budgetData,
        isLoading,
        error,
        createOpen,
        setCreateOpen,
        selectedData,
        editable,
        setEditable,
        handleRowClick,
        SetWarn,

        } = React.useContext(BudgetContext);

    const  name = "Budget"

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
            field : 'project',
            headerName: 'Project',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',
            valueGetter: (params) => {
                return params.row?.project?.projectCode;
            }

        },
        {
            field: 'budgetCode' ,
            headerName: 'budgetCode',
            flex: 0.7,
            minWidth: 130,
            editable: true,
            type: 'string',
        },
        {
            field: 'owner' ,
            headerName: 'owner',
            flex: 0.7,
            minWidth: 130,
            editable: true,
            type: 'string',
        },
        {
            field: 'budgetDescription',
            headerName: 'budgetDescription',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',

        },
        {
            field: 'catagory',
            headerName: 'catagory',
            flex: 0.7,
            minWidth: 100,  
            editable: true,
            type: 'string',
        },
        {
            field: 'type',
            headerName: 'type',
            flex: 0.7,
            minWidth: 100,  
            editable: true,
            type: 'string',
        },
        {
            field: 'rule',
            headerName: 'rule',
            flex: 0.7,
            minWidth: 100,  
            editable: true,
            type: 'string',
        },
        {
            field: 'budgetAmount',
            headerName: 'budgetAmount',
            flex: 0.7,
            minWidth: 100,  
            editable: true,
            type: 'string',
        },
        {
            field: 'senario',
            headerName: 'senario',
            flex: 0.7,
            minWidth: 100,  
            editable: true,
            type: 'string',
            valueGetter: (params) => {
                return params.row?.senario?.SenarioCode;
            }
            },
            // {
            //     field: 'budgetStatus',
            //     headerName: 'budgetStatus',
            //     flex: 0.7,
            //     minWidth: 100,  
            //     editable: true,
            //     type: 'string',
            //     },
            
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
                <CreateUpdateBudget
              name={name}
                    selectedData={selectedData}
                    editable={editable}
                    setEditable={setEditable}
                    createOpen={createOpen}
              />
            ) : (
              <Datatable
              columns={columns}
              rows={budgetData}
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

export default Budget

      