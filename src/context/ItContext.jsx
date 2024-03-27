import React, { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import PropTypes from "prop-types";
import ToastContext from "src/context/hot-toast-context/HotToastContext";
import { GetIt, CreateIt, UpdateIt, DeleteIt } from "../apis/ItApi";

const ItContext = React.createContext({});
export default ItContext;


export const ItProvider = ({ children }) => {
    const [createOpen, setCreateOpen] = React.useState(false);
    const [selectedData, setSelectedData] = React.useState(null);
    const [editable, setEditable] = React.useState(false);
    const [warn, SetWarn] = React.useState(false);
    
    const name = "Endpoint";
    const { showToast } = React.useContext(ToastContext);
    const handleRowClick = (params) => {
        // console.log(params);
        setSelectedData(params);
        // console.log(selectedData);
    };
    
    // GetUsers
    const queryResult = useQuery("it", GetIt);
    
    const isLoading = queryResult.isLoading;
    const error = queryResult.error;
    const refetch = queryResult.refetch;
    const itData = queryResult?.data?.it || [];
    console.log('ititititititiitititiData', itData);

    const { mutateAsync: createIt } = useMutation(CreateIt, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Endpoint created successfully", "success", 2000);
            refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });

    const { mutateAsync: updateIt } = useMutation(UpdateIt, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Endpoint updated successfully", "success", 2000);
            refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });

    const { mutateAsync: deleteIt } = useMutation(DeleteIt, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Endpoint deleted successfully", "success", 2000);
            refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });
    

    return (
        <ItContext.Provider
        value={{
            handleRowClick,
            selectedData,
            setSelectedData,
            createOpen,
            setCreateOpen,
            editable,
            setEditable,
            warn,
            SetWarn,
            name,
            isLoading,
            error,
            refetch,
            itData,
            createIt, 
            updateIt, 
            deleteIt,
            
        }}
    >
        {children}
    </ItContext.Provider>
);

};

ItProvider.propTypes = {
children: PropTypes.node.isRequired,
};
