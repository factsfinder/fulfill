import { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

type columnProps = {
  field: string; // should be same as the `key` of a row data object.
  label: string; // Will be the column name on the Table Header
  numeric?: boolean;
  align?: string | "left";
  width?: string;
  cellStyles?: object | undefined;
};

type tableProps = {
  columns: columnProps[];
  rows: {}[];
};

function formatRows(rows: any, columns: any) {
  return rows.reduce((accumulator: object[], currentRow: any): any => {
    const acc = accumulator;
    const data = columns.map((col: columnProps): any => ({
      ...col,
      // this will serve as the value of `key` prop when mapping and also to identity the row
      id: `${currentRow.id}-${col.field}`,
      value: currentRow[col.field],
    }));
    acc.push(data);
    return acc;
  }, []);
}

function DataTable({ columns, rows }: tableProps): JSX.Element {
  const [selectedRows, setSelectedRows] = useState<any>({}); // {row_id: row_value}
  const [formattedRows, setFormattedRows] = useState<any>([]);

  useEffect(() => {
    const updatedRows = formatRows(rows, columns);
    setFormattedRows([...formattedRows, ...updatedRows]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, columns]);

  const handleRowClick = (rowInfo: any) => (event: any) => {
    // console.log(rowInfo, event);
  };

  const handleSelectRow = (rowInfo: any) => (event: any) => {
    let updatedSelectedRows = selectedRows;
    if (event.target.checked) {
      updatedSelectedRows[rowInfo[0].id] = rowInfo[0].value;
    } else {
      delete updatedSelectedRows[rowInfo[0].id];
    }
    setSelectedRows({ ...updatedSelectedRows });
  };

  const handleSelectAllRows = (event: any) => {
    if (event.target.checked) {
      const allRows = selectedRows;
      formattedRows.forEach((row: any) => {
        allRows[row[0].id] = row[0].value;
      });
      setSelectedRows({ ...allRows });
    } else {
      setSelectedRows({});
    }
  };

  const areAllRowsSelected =
    formattedRows.length === Object.keys(selectedRows).length;

  return (
    <div className="container">
      <TableHeader
        columnsInfo={columns}
        allRowsSelected={areAllRowsSelected}
        onSelectAllRows={handleSelectAllRows}
      />
      {formattedRows.map((r: any) => {
        return (
          <TableRow
            key={r[0].id}
            rowData={r}
            isSelected={!!selectedRows[r[0].id]}
            onClick={handleRowClick(r)}
            onCheckRow={handleSelectRow(r)}
          />
        );
      })}
    </div>
  );
}

export default DataTable;
