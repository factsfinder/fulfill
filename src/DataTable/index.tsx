import { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

type columnProps = {
  field: string;
  label: string;
  numeric?: boolean;
  align?: string | "left";
  width?: string;
  cellStyles?: object | undefined;
};

type tableProps = {
  columns: columnProps[];
  rows: {}[];
};

function DataTable({ columns, rows }: tableProps): JSX.Element {
  const [selectedRows, setSelectedRows] = useState<Array<number>>([]);

  // Todo: memoize using useMemo
  const formattedRows = rows.reduce(
    (accumulator: object[], currentRow: any): any => {
      const acc = accumulator;
      const data = columns.map((col: columnProps): any => ({
        ...col,
        id: `${currentRow.id}-${col.field}`,
        value: currentRow[col.field],
      }));
      acc.push(data);
      return acc;
    },
    []
  );

  const handleRowClick = (rowInfo: any) => (event: any) => {
    // console.log(rowInfo, event);
  };

  const handleSelectRow = (rowInfo: any) => (event: any) => {
    let updatedSelectedRows = [];
    if (event.target.checked) {
      updatedSelectedRows = [...selectedRows, rowInfo?.[0]?.value].filter(
        (x) => x
      );
    } else {
      updatedSelectedRows = selectedRows.filter(
        (r) => r !== rowInfo?.[0]?.value
      );
    }
    setSelectedRows(updatedSelectedRows);
  };

  const handleSelectAllRows = (event: any) => {
    if (event.target.checked) {
      setSelectedRows(formattedRows.map((r: any) => r?.[0]?.value));
    } else {
      setSelectedRows([]);
    }
  };

  return (
    <div className="wrapper">
      <TableHeader
        columnsInfo={columns}
        allRowsSelected={formattedRows.length === selectedRows.length}
        onSelectAllRows={handleSelectAllRows}
      />
      {formattedRows.map((r: any) => {
        return (
          <TableRow
            key={r?.[0]?.id}
            rowData={r}
            isSelected={selectedRows.includes(r?.[0]?.value)}
            onClick={handleRowClick(r)}
            onCheckRow={handleSelectRow(r)}
          />
        );
      })}
    </div>
  );
}

export default DataTable;
