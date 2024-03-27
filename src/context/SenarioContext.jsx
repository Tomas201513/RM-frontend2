import React, { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import PropTypes from "prop-types";
import ToastContext from "src/context/hot-toast-context/HotToastContext";
import { GetSenario, GetSenarioDetail, CreateSenario, UpdateSenario, DeleteSenario} from "../apis/SenarioApi";


const SenarioContext = React.createContext({});
export default SenarioContext;

export const SenarioProvider = ({ children }) => {
    const [createOpen, setCreateOpen] = React.useState(false);
        const [selectedData, setSelectedData] = React.useState(null);
        const [editable, setEditable] = React.useState(false);
        const [warn, SetWarn] = React.useState(false);
        
        const name = "Senario";
        const { showToast } = React.useContext(ToastContext);
        const handleRowClick = (params) => {
            // console.log(params);
            setSelectedData(params);
            // console.log(selectedData);
        };
        const queryResult = useQuery("senario", GetSenario);

        const isLoading = queryResult.isLoading;
        const error = queryResult.error;
        const senarioData = queryResult.data;
        const refetch = queryResult.refetch;
        console.log(isLoading);
        console.log(error);
        console.log(queryResult);

        const { mutateAsync: createSenario } = useMutation(CreateSenario, {
            onSuccess: () => {
                // console.log("User updated successfully");
                setCreateOpen(false);
                
                showToast(`Senario created successfully`, "success", 2000);
                queryResult.refetch();
            },
            onError: (err) => {
                // console.log("User updated successfully");
                showToast(err.response
                    .data.message, "error", 3000);
            },
        });

        const { mutateAsync: updateSenario } = useMutation(UpdateSenario, {
            onSuccess: () => {
                // console.log("User updated successfully");
                setCreateOpen(false);
                
                showToast(`Senario updated successfully`, "success", 2000);
                queryResult.refetch();
            },
            onError: (err) => {
                // console.log("User updated successfully");
                showToast(err.response
                    .data.message, "error", 3000);
            },
        });

        const { mutateAsync: deleteSenario } = useMutation(DeleteSenario, {
            onSuccess: () => {
                // console.log("User updated successfully");
                setCreateOpen(false);
                
                showToast(`Senario deleted successfully`, "success", 2000);
                queryResult.refetch();
            },
            onError: (err) => {
                // console.log("User updated successfully");
                showToast(err.response
                    .data.message, "error", 3000);
            },
        });

        return (
            <SenarioContext.Provider
                value={{
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



                }}
            >
                {children}
            </SenarioContext.Provider>
        );
    };

    SenarioProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };
    
