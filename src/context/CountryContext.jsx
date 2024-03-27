import React, { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import PropTypes from "prop-types";
import ToastContext from "src/context/hot-toast-context/HotToastContext";
import { GetCountry,CreateCountry,UpdateCountry,DeleteCountry  } from "../apis/countryApi";


const CountryContext = React.createContext();
export default CountryContext;

export const CountryProvider = ({ children }) => {

    const [createOpen, setCreateOpen] = React.useState(false);
    const [selectedData, setSelectedData] = React.useState(null);
    const [editable, setEditable] = React.useState(false);
    const [warn, SetWarn] = React.useState(false);
    
    const name = "Country";
    const { showToast } = React.useContext(ToastContext);
    const handleRowClick = (params) => {
        // console.log(params);
        setSelectedData(params);
        // console.log(selectedData);
    };

    const queryResult = useQuery("country", GetCountry);

    const isLoading = queryResult?.isLoading;
    const error = queryResult.error;
    // const sinceLastMonth= queryResult?.data?.count;
    const countryData = queryResult?.data
    // const countedAssets = queryResult?.data?.countedAssets
    console.log("*****************",countryData);
    console.log(isLoading);
    console.log(error);
    console.log("+++++++++++++++++++++",queryResult);
    const refetch = queryResult.refetch;

    const { mutateAsync: createCountry } = useMutation(CreateCountry, {
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

    const { mutateAsync: updateCountry } = useMutation(UpdateCountry, {
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

    const { mutateAsync: deleteCountry } = useMutation(DeleteCountry, {
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
        <CountryContext.Provider
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
                countryData,
                createCountry,
                updateCountry,
                deleteCountry,
                refetch,
            }}
        >
            {children}
        </CountryContext.Provider>
    );
}

CountryProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

