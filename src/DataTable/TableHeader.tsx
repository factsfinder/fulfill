import { Stack, Typography } from "@mui/material";

type headerProps = {
  columnsInfo: {
    field: string;
    label: string;
    width?: string | undefined;
  }[];
};

function TableHeader({ columnsInfo }: headerProps): JSX.Element {
  return (
    <Stack direction="row" spacing={4}>
      {columnsInfo.map(({ field, label }: any) => {
        return <Typography key={field}>{label}</Typography>;
      })}
    </Stack>
  );
}

export default TableHeader;
