'use client'
import * as React from 'react';
import { Button } from '../ui/button';
import { DataTableDemo, DataTableDemoProps } from '../ui/dataTable';

type DataGridTableProps<T> = {
    title?: string
} & DataTableDemoProps<T>

export default function DataGridTable<T>(props: DataGridTableProps<T>) {
    const { columns, title, data } = props;
    return (
        <>
            <DataTableDemo {
                ...{
                    columns, 
                    data, 
                    title
                }
            }
            />
        </>
    );
}