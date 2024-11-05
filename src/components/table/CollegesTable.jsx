import { useReactTable } from "@tanstack/react-table";
import mockData from "./MOCK_DATA.json";
import { columnsDef } from "./Columns";

const CollegesTable = () => {
  const tableInstance = useReactTable({
    columns: columnsDef,
    data: mockData
  }) 

  return <table>
    <thead>
      {tableInstance.getHeaderGroups().map}
    </thead>
  </table>;
};

export default CollegesTable;
