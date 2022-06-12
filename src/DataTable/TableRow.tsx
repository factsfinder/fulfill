import { memo } from "react";

import TableCell from "./TableCell";

function TableRow({
  rowData,
  onClick,
  onCheckRow,
  isSelected,
}: any): JSX.Element {
  return (
    <div className="flex flex--row table-row" onClick={onClick} role="listitem">
      <div className="table-cell" style={{ minWidth: "50px" }}>
        <input
          type="checkbox"
          className="checkbox"
          checked={isSelected}
          onChange={onCheckRow}
        />
      </div>
      {rowData.map((cell: any) => (
        <TableCell key={cell.id} cellData={cell} />
      ))}
    </div>
  );
}

export default memo(TableRow);
