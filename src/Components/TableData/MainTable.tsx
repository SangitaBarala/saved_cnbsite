import React, {useMemo} from "react";
import {useTable} from "react-table";
import {COLUMNS} from "./Columns";
import TableData from './TableData.json'
import './Table.css'

const MainTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => TableData, [])
    // @ts-ignore
    const tableInstance = useTable({columns, data})
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance

    return (
        <div id="table">
            <table {...getTableProps}>
                <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>{
                            headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>{
                            row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })
                        }
                        </tr>
                    )
                })}
                </tbody>
            </table>

        </div>
    )
}
export default MainTable