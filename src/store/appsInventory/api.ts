import axiosInstance from "@/lib/axios.ts";

import { AppsInventory } from "@/types/appsInventory.ts"

export const fetchAppsInventory = async (): Promise<AppsInventory[]> => {
    const response = await axiosInstance.get<AppsInventory[]>('/appsInventory');
    return response.data;
};