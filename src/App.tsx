import { useEffect, useState } from "react";
import axios from "axios";

import DataTable from "./DataTable";

const tableColumns = [
  { field: "id", label: "id", numeric: true, align: "right" },
  { field: "albumId", label: "Album Id", numeric: true, align: "center" },
  { field: "title", label: "Title", width: "200px" },
  { field: "url", label: "Url", width: "300px", align: "center" },
  {
    field: "thumbnailUrl",
    label: "Thumbnail Url",
    width: "300px",
  },
];

function App() {
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        const rowsData = res.data?.slice(0, 15) ?? [];
        setTableRows(rowsData);
      })
      .catch((err) => {
        console.log("error fetching the data: ", err);
      });
  }, []);

  return (
    <div className="container flex flex--column">
      <DataTable columns={tableColumns} rows={tableRows} />
    </div>
  );
}

export default App;
