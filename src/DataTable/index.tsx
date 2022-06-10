import { Box } from "@mui/material";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

type columnProps = {
  field: string;
  label: string;
  numeric: boolean;
  width?: string | "auto";
  cellClassName?: string;
};

type tableProps = {
  columns: columnProps[];
  rows: {}[];
};

function DataTable({ columns, rows }: tableProps): JSX.Element {
  const handleRowClick = (rowInfo: any) => () => {};

  const formattedRows = rows.reduce(
    (accumulator: object[], currentRow: any): any => {
      const acc = accumulator;
      const data = columns.map((col: columnProps): any => ({
        ...col,
        id: `${currentRow.id}-${col.field}`,
        value: currentRow[col.field],
      }));
      acc.push(data);
      return acc;
    },
    []
  );

  return (
    <Box>
      <TableHeader columnsInfo={columns} />
      <Box>
        {formattedRows.map((r: any) => {
          return (
            <TableRow key={r?.[0]?.id} rowData={r} onClick={handleRowClick(r)} />
          );
        })}
      </Box>
    </Box>
  );
}

export default DataTable;
