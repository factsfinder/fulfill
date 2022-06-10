import { Box, Typography } from "@mui/material";

type cellProps = {
  value: string | number | undefined;
};

function TableCell({ value }: cellProps) {
  return (
    <Box
      sx={{
        borderLeft: "1px solid rgba(0,0,0, 0.2)",
        bordeRight: "1px solid rgba(0,0,0, 0.2)",
      }}
    >
      <Typography sx={{ padding: "0.5em 0" }}>{value}</Typography>
    </Box>
  );
}

export default TableCell;
