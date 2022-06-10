import { Box } from "@mui/material";
import TableHeader from "./TableHeader";

import { rowProps } from "./TableRow";

type tableProps = {
  columns: {
    id: string | number;
    label: string;
    numeric: boolean;
    width?: string | "auto";
    cellClassName?: string;
  }[];
  rows: rowProps[];
};

function DataTable({ columns, rows }: tableProps): JSX.Element {
  return (
    <Box>
      <TableHeader columnsInfo={columns} />
    </Box>
  );
}

export default DataTable;
