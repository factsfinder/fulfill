import { Box } from "@mui/material";

type cellProps = {
  value: string | number | undefined;
};

function TableCell({ value }: cellProps) {
  return <Box>{value}</Box>;
}

export default TableCell;
