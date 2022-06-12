export function formatRows(rows: any, columns: any) {
  return rows.reduce((accumulator: object[], currentRow: any): any => {
    const acc = accumulator;
    const data = columns.map((col: any): any => ({
      ...col,
      // this will serve as the value of `key` prop when mapping and also to identity the row
      id: `${currentRow.id}-${col.field}`,
      value: currentRow[col.field],
    }));
    acc.push(data);
    return acc;
  }, []);
}
