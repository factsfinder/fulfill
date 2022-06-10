import { useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";

import DataTable from "./DataTable";

const tableColumns = [
  { id: 1, label: "id", numeric: true },
  { id: 2, label: "albumId", numeric: true },
  { id: 3, label: "title", numeric: false },
  { id: 3, label: "url", numeric: false },
  { id: 3, label: "thumbnailUrl", numeric: false },
];

function App() {
  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
    //   console.log("checkgin res", res);
    // });
  }, []);

  return (
    <Box>
      <DataTable columns={tableColumns} rows={[]} />
    </Box>
  );
}

export default App;
