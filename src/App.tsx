import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";

import DataTable from "./DataTable";

const tableColumns = [
  { field: "id", label: "id", numeric: true },
  { field: "albumId", label: "Album Id", numeric: true },
  { field: "title", label: "Title", numeric: false, width: "200px" },
  { field: "url", label: "Url", numeric: false, width: "300px" },
  {
    field: "thumbnailUrl",
    label: "Thumbnail Url",
    numeric: false,
    width: "300px",
  },
];

function App() {
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        const rowsData = res.data?.slice(0, 10) ?? [];
        setTableRows(rowsData);
      })
      .catch((err) => {
        console.log("error fetching the data: ", err);
      });
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "2em auto",
      }}
    >
      <DataTable columns={tableColumns} rows={tableRows} />
    </Box>
  );
}

export default App;
