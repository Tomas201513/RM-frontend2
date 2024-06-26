import axios from "axios";
import { TokenJson } from "./token/AuthToken";
import axiosInstance from "src/utils/useAxiosInterceptors";

const api = `https://rm-backend-reop.onrender.com/api/procurement/`;

export const GetSenario = async () => {
    if (localStorage.getItem("accessToken")) {
        const res = await axiosInstance.get(api, TokenJson());
        console.log ('ddddppppppttt',res.data);
    return res.data;
    } else {
        // console.log("No token");
    }
    }

export const GetSenarioDetail = async (id) => {
    if (localStorage.getItem("accessToken") && id) {
        const res = await axiosInstance.get(`${api}${id}/`, TokenJson());
        console.log('==========>',res)
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const CreateSenario = async (values) => {
    console.log('tomas',values)
    if (localStorage.getItem("accessToken")) {
        const res = await axiosInstance.post(api, values, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const UpdateSenario = async (values) => {
    console.log("111111111110",values);

    if (localStorage.getItem("accessToken") && values) {
        const res = await axiosInstance.put(`${api}${values.selectedData}/`, values.values, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const DeleteSenario = async (id) => {
    if (localStorage.getItem("accessToken") && id) {
        const res = await axiosInstance.delete(`${api}${id}/`, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

    