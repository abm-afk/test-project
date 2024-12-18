import { useEffect, useState } from "react";

import { AppsInventoryTable } from "@/components/appsInventoryTable.tsx"

import { useAppDispatch, useAppSelector } from '@/store/hooks.ts';
import { getAppsInventory, fetchAppsInventoryThunk } from "@/store/appsInventory/slices.ts";
import Pagination from "@/components/ui/pagination.tsx";
import AppDetailsDrawer from "@/components/appDetailsDrawer.tsx";
import { fetchAppDetails } from "@/store/appDetails/api.ts";
import { AppDetails } from "@/types/appDetails.ts";

export default function AppsInventory() {
    const dispatch = useAppDispatch();
    const { appsInventory } = useAppSelector(getAppsInventory);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(25);

    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const [selectedApp, setSelectedApp] = useState<AppDetails | null>(null);

    const totalPages = Math.ceil(appsInventory.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = appsInventory.slice(indexOfFirstItem, indexOfLastItem);

    const handleRowClick = async () => {
        const app = await fetchAppDetails()
        setSelectedApp(app);
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (count: number) => {
        setItemsPerPage(count);
        setCurrentPage(1);
    };

    useEffect(() => {
        dispatch(fetchAppsInventoryThunk());
    }, [dispatch])

    return (
        <div className="full p-[86px] flex flex-col gap-y-5">
            <h1 className="text-custom-h1 w-[124px] h-[26px] font-semibold">App Inventory</h1>
            <AppsInventoryTable
                onRowClick={handleRowClick}
                data={currentData} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={handleItemsPerPageChange}

            />
            <AppDetailsDrawer
                isOpen={isDrawerOpen}
                onClose={handleDrawerClose}
                app={selectedApp}
            />
        </div>
    )
}
