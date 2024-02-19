"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    OnChangeFn,
    PaginationState,
    SortingState,
    Updater,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "./button"
import { Checkbox } from "./checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./table"
import { Stack, Text } from "@chakra-ui/react"
import { Input } from "./input"
import { SkeletonList } from "../Skeleton/SkeletonList/SkeletonList"

export type DataTableDemoProps<T> = {
    title: string;
    columns: ColumnDef<T>[];
    data: T[];
    isLoading?: boolean;
    noResultLabel?: string
    onPaginationChange?: OnChangeFn<PaginationState>;
    setPageIndex?: (defaultState?: boolean) => void
    setPageSize?: (updater: Updater<number>) => void
    pageCount?: number
}

export function DataTableDemo<T>({ title, columns, data, noResultLabel, pageCount, onPaginationChange, setPageIndex, setPageSize, isLoading}: DataTableDemoProps<T>) {
    const [datatable, setDatatable] = React.useState<T[]>([]);

    const [searchValue, setSearchValue] = React.useState<string>('');
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchValue(value);
    };

    React.useEffect(() => {
        const filteredData = data.filter(item => {
            return Object.values(item ?? {}).some((value: any) =>
                value?.toString()?.toLowerCase()?.includes(searchValue?.toLowerCase())
            );
        });
        setDatatable(filteredData)
    }, [data, searchValue])

    const table = useReactTable({
        data: datatable ,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    

    return (
        <SkeletonList isLoading={!isLoading}>
            <div className="w-full">
                <div className="flex items-center py-4">
                    <Stack>
                        <Text fontSize='19px' fontWeight='bold'>{title}</Text>
                        <Input
                            placeholder="Filtrar"
                            value={searchValue}
                            onChange={handleInputChange}
                            className="max-w-sm"
                        />
                    </Stack>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto">
                                Colunas <ChevronDown className="ml-2 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table?.getRowModel()?.rows?.length ? (
                                table?.getRowModel()?.rows?.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        {noResultLabel ?? "Não contém dados"}
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </SkeletonList>
    )
}