import React from "react";

type cellProps = {
  cellData: {
    value: string | number | boolean;
    align?: "left" | "center" | "right";
    numeric?: boolean;
    width?: string;
  };
  children?: React.ReactNode | null;
};

function TableCell({ cellData, children }: cellProps) {
  const { width, value, align } = cellData;
  return (
    <div className="table-cell" style={{ width: width ?? "100px" }}>
      {children ?? (
        <p style={{ textAlign: align }} className="table-cell--text">
          {value}
        </p>
      )}
    </div>
  );
}

export default TableCell;
