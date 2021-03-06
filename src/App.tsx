import axios from "axios";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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

const ROWS_PER_PAGE = 15;

function App() {
  const { ref: loadingRef, inView } = useInView();
  const [tableRows, setTableRows] = useState<Array<{}>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoadedAll, setIsLoadedAll] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${ROWS_PER_PAGE}`
      );
      if (res?.data?.length > 0) {
        setTableRows(res.data);
        setCurrentPage(currentPage + 1); // updating the currentpage value for the next fetchdata on scrolldown
      } else {
        setIsLoadedAll(true);
      }
    } catch (err) {
      console.warn("error fetching the data: ", err);
      setIsLoadedAll(true);
    }
  };

  useEffect(() => {
    // `inview` will be `true` if `loading...` text is visible on screen.
    if (inView) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className="container">
      <h2 className="heading">Data Table</h2>
      <DataTable columns={tableColumns} rows={tableRows} />
      {!isLoadedAll && (
        <div ref={loadingRef} style={{ textAlign: "center" }} role="note">
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
}

export default App;
