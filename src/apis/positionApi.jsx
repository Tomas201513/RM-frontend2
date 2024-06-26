import axios from "axios";
import { TokenJson } from "./token/AuthToken";
import axiosInstance from "src/utils/useAxiosInterceptors";

const api = `https://rm-backend-reop.onrender.com/api/positions/`;

export const GetPosition = async () => {
    if (localStorage.getItem("accessToken")) {
        const res = await axiosInstance.get(api, TokenJson());
    return res.data;
    } else {
        // console.log("No token");
    }
    }

export const GetPositionDetail = async (id) => {
    if (localStorage.getItem("accessToken") && id) {
        const res = await axiosInstance.get(`/${api}${id}/`, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const CreatePosition = async (values) => {
    if (localStorage.getItem("accessToken")) {
        const res = await axiosInstance.post(api, values, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const UpdatePosition = async (values) => {

    console.log('-0-0-0-----0--0-0',values.values.values);
    // console.log('11111111111111111',values.values);

    if (localStorage.getItem("accessToken") && values) {
        const res = await axiosInstance.put(`${api}${values.selectedData}/`, values.values, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }

export const DeletePosition = async (id) => {
    if (localStorage.getItem("accessToken") && id) {
        const res = await axiosInstance.delete(`${api}${id}/`, TokenJson());
        return res.data;
    } else {
        // console.log("No token");
    }
    }
    