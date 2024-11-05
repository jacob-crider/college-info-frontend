import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import mockData from "./MOCK_DATA.json";
import columns from "./Columns";
import "./CollegesTable.css";
import { useMemo } from "react";

const CollegesTable = () => {
  const finalData = useMemo(() => mockData, []);
  const finalColumnsDef = useMemo(() => columns, []);

  const tableInstance = useReactTable({
    columns: finalColumnsDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {tableInstance.getHeaderGroups().map((headerEl) => {
          return (
            <tr key={headerEl.id}>
              {headerEl.headers.map((columnEl) => {
                return (
                  <th key={columnEl.id} colSpan={columnEl.colSpan}>
                    {flexRender(
                      columnEl.column.columnDef.header,
                      columnEl.getContext()
                    )}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody>
        {tableInstance.getRowModel().rows.map((rowEl) => {
          return (
            <tr key={rowEl.id}>
              {rowEl.getVisibleCells().map((cellEl) => {
                return (
                  <td key={cellEl.id}>
                    {flexRender(
                      cellEl.column.columnDef.cell,
                      cellEl.getContext()
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {tableInstance.getHeaderGroups().map((headerEl) => {
          return (
            <tr key={headerEl.id}>
              {headerEl.headers.map((columnEl) => {
                return (
                  <th key={columnEl.id} colSpan={columnEl.colSpan}>
                    {flexRender(
                      columnEl.column.columnDef.header,
                      columnEl.getContext()
                    )}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </tfoot>
    </table>
  );
};

export default CollegesTable;
