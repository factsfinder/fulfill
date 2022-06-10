import { Stack } from "@mui/material";

import TableCell from "./TableCell";

function TableRow({ rowData, onClick }: any): JSX.Element {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ border: "0.5px solid rgba(0,0,0,0.2)", cursor: "pointer" }}
      onClick={onClick}
    >
      {rowData.map((row: any) => (
        <TableCell key={row.id} value={row.value} />
      ))}
    </Stack>
  );
}

export default TableRow;
