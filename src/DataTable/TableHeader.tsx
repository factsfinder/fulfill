import React from "react";

type headerProps = {
  columnsInfo: {
    field: string;
    label: string;
    width?: string;
  }[];
  allRowsSelected: boolean;
  onSelectAllRows: React.ChangeEventHandler<HTMLInputElement>;
};

function TableHeader({
  columnsInfo,
  onSelectAllRows,
  allRowsSelected,
}: headerProps): JSX.Element {
  return (
    <div className="flex flex--row table-header">
      <div className="table-header-cell" style={{ minWidth: "50px" }}>
        <input
          type="checkbox"
          className="checkbox"
          checked={allRowsSelected}
          onChange={onSelectAllRows}
        />
      </div>
      {columnsInfo.map(({ field, label, width }: any) => {
        return (
          <div
            className="table-header-cell"
            key={field}
            style={{
              width,
            }}
          >
            <p>{label}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TableHeader;
