import { Stack } from "@mui/material";

import TableCell from "./TableCell";

export declare interface rowProps {
  columnName: string;
  row: {
    id: number | string;
    albumId?: number;
    title?: string;
    url?: string;
    thumbnailUrl?: string;
  };
}

function TableRow({ columnName, row }: rowProps): JSX.Element {
  return (
    <Stack direction="row">
      {Object.keys(row).map((r: any) => (
        <TableCell key={r.id} value={r["columnName"]} />
      ))}
    </Stack>
  );
}

export default TableRow;
