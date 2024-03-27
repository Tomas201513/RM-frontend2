import React from 'react';
import Datatable from 'src/components/datatable/Datatable';
import {
  IconButton, Link, Tooltip,
} from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CreateUpdateSenario from './CreateUpdateSenario';
import SenarioContext from '../../../../context/SenarioContext';

function Senario() {
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
      name,
      handleRowClick,
      queryResult,
      isLoading,
      error,
      
      senarioData,
      createSenario,
      updateSenario,
      deleteSenario,
      refetch, 
        } = React.useContext(SenarioContext);

        console.log("$$$$$$$$$$$$$$$$-",senarioData)
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
            field : 'SenarioCode',
            headerName: 'SenarioCode',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',

          }, {
          field : 'SenarioPrice',
          headerName: 'SenarioPrice',
          flex: 0.7,
          minWidth: 100,
          editable: true,
          type: 'string',

        },{
          field : 'SenarioProcedure',
          headerName: 'SenarioProcedure',
          flex: 0.7,
          minWidth: 100,
          editable: true,
          type: 'string',

        }, {
        field : 'comment',
        headerName: 'comment',
        flex: 0.7,
        minWidth: 100,
        editable: true,
        type: 'string',

      }, {
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
          {(createOpen || selectedData) && senarioData ? (
        <CreateUpdateSenario
          name={name}
          selectedData={selectedData}
          editable={editable}
          setEditable={setEditable}
          createOpen={createOpen}
        />
          ) : (
            <Datatable
          columns={columns}
          rows={senarioData}
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

export default Senario