import axiosInstance from "@/lib/axios.ts";

import { AppDetails } from "@/types/appDetails.ts"

export const fetchAppDetails = async (): Promise<AppDetails> => {
    const response = await axiosInstance.get<AppDetails>('/appDetails');
    return response.data;
};