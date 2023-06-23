import * as React from "react";
import { ReactNode, useState } from "react";

import { ResponsiveTableColumn } from "../table-form-iterator/types";

const ResposiveTableRow: React.FC<{
  row: Record<string | number, ReactNode>;
  idx: number;
  columns: ResponsiveTableColumn[];
}> = ({ row, idx, columns }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <>
      <div>
        <button onClick={() => setIsOpened(!isOpened)}>open</button>

        <tr
          className={isOpened ? "open" : ""}
          key={`responsive-table-row-${idx}`}
        >
          {columns.map((col, idx) => (
            <td data-label={col.field} key={`responsive-table-value-${idx}`}>
              {row[col.field]}
            </td>
          ))}
          <td>
            <input />
          </td>
        </tr>
      </div>
    </>
  );
};

export { ResposiveTableRow };
