import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export declare interface headerProps {
  columnsInfo: {
    label: string;
    width?: string | undefined;
  }[];
}

function TableHeader({ columnsInfo }: headerProps): JSX.Element {
  return (
    <Stack direction="row">
      {columnsInfo.map(({ label, width }: any) => {
        return <Typography key={label}></Typography>;
      })}
    </Stack>
  );
}

export default TableHeader;
