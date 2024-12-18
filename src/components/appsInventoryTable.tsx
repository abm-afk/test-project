import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table.tsx"

import { AppsInventory } from "@/types/appsInventory.ts";
import ImageWithFallback from "@/components/ui/image.tsx";

export function AppsInventoryTable({ data, onRowClick }: {data: AppsInventory[], onRowClick: () => Promise<void>} ): JSX.Element {
    return (
        <Table>
            <TableHeader>
                <TableRow className="h-[60px]">
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Connector</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((app: AppsInventory) => (
                    <TableRow
                        key={app.appId}
                        onClick={onRowClick}
                        className="h-[76px] space-x-[200px]"
                    >
                        <TableCell><div className="flex align-middle h-auto items-center gap-x-5"><ImageWithFallback src={app.logos?.app} alt="Logo of the App" fallbackSrc="https://static.thenounproject.com/png/583402-200.png"/>{app.name}</div></TableCell>
                        <TableCell>{app.category}</TableCell>
                        <TableCell><ImageWithFallback src={app.logos?.connector} alt="Logo of the Connector" fallbackSrc="https://static.thenounproject.com/png/583402-200.png"/></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
