import React, { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import PropTypes from "prop-types";
import ToastContext from "src/context/hot-toast-context/HotToastContext";
import {GetConn, CreateConn, UpdateConn, DeleteConn} from "../apis/ConnApi"


const ConnContext = React.createContext();
export default ConnContext;

export const ConnProvider = ({ children }) => {

    const [createOpen, setCreateOpen] = React.useState(false);
    const [selectedData, setSelectedData] = React.useState(null);
    const [editable, setEditable] = React.useState(false);
    const [warn, SetWarn] = React.useState(false);
    
    const name = "Connectivity";
    const { showToast } = React.useContext(ToastContext);
    const handleRowClick = (params) => {
        // console.log(params);
        setSelectedData(params);
        // console.log(selectedData);
    };

    const queryResult = useQuery("Conn", GetConn);

    const isLoading = queryResult?.isLoading;
    const error = queryResult.error;
    // const sinceLastMonth= queryResult?.data?.count;
    const connData = queryResult?.data?.conn
    // const countedAssets = queryResult?.data?.countedAssets
    console.log("*****************",connData);
    console.log(isLoading);
    console.log(error);
    console.log("+++++++++++++++++++++",queryResult);
    const refetch = queryResult.refetch;

    const { mutateAsync: createConn } = useMutation(CreateConn, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Asset created successfully", "success", 2000);
            queryResult.refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });

    const { mutateAsync: updateConn } = useMutation(UpdateConn, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Asset updated successfully", "success", 2000);
            queryResult.refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });

    const { mutateAsync: deleteConn } = useMutation(DeleteConn, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Asset deleted successfully", "success", 2000);
            queryResult.refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });

    return (    
        <ConnContext.Provider
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
                connData,
                createConn,
                updateConn,
                deleteConn,
                refetch,
            }}
        >
            {children}
        </ConnContext.Provider>
    );
}

ConnProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
