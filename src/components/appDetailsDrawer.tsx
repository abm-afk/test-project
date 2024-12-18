
import React from 'react';
import { Transition } from '@headlessui/react';
import {AppDetails} from "@/types/appDetails.ts";
import ImageWithFallback from "@/components/ui/image.tsx";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table.tsx"
import { daysDiff } from "@/lib/utils.ts";


interface AppDetailsSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    app: AppDetails | null;
}

const AppDetailsSidebar: React.FC<AppDetailsSidebarProps> = ({ isOpen, onClose, app }) => {
    if (!app) return null;

    const numOfUsers = app.users?.length || 0;

    return (
        <div className={`fixed inset-0 z-50 flex justify-end`}>
            {/* Transition for smooth sliding */}
            <Transition
                show={isOpen}
                enter="transition-transform duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition-transform duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
            >
                <div className="w-full sm:w-1/3 bg-white shadow-lg flex flex-col p-7 gap-y-5">
                    {/* Header */}
                    <div className="flex flex-row justify-between">
                        <h2 className="text-lg font-normal">App Overview</h2>
                        <button
                            onClick={onClose}
                            className=" right-4 text-gray-800"
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                    </div>
                    <div className="flex flex-row items-center font-light gap-1">
                        <ImageWithFallback src={app.connector.logo} alt="Logo of the Connector" fallbackSrc="https://static.thenounproject.com/png/583402-200.png"/>
                        {app.name}
                    </div>
                    <div className="w-[656px] h-[200px] bg-customBackgroundColor flex flex-col gap-2 font-light p-4">
                        <p>App name: {app.name}</p>
                        <p>Category: {app.category}</p>
                        <p>Users: {numOfUsers}</p>
                        <p><div className="flex flex-row items-center gap-2">Connector: <ImageWithFallback src={app.connector.logo} alt="Logo of the Connector" fallbackSrc="https://static.thenounproject.com/png/583402-200.png"/></div></p>
                        <p>Last classification: {daysDiff(app.lastClassification)} {'days'}</p>
                    </div>
                    {/* Body */}
                    <Table className="border-2 rounded-xs">
                        <TableHeader>
                            <TableRow className="h-[60px]">
                                <TableHead>Username</TableHead>
                            </TableRow>
                            </TableHeader>
                        <TableBody>
                            {app.users?.map((user) => (
                                <TableRow className=" flex flex-row gap-x-3 h-[60px] p-4 items-center">
                                    <ImageWithFallback src={user.pic!} alt="Logo of the App" fallbackSrc="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" />
                                    {user.name}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Transition>
        </div>
    );
};

export default AppDetailsSidebar;