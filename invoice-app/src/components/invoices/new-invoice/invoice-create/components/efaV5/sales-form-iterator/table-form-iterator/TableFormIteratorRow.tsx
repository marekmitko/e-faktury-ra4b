import * as React from "react";
import { ReactNode, useState } from "react";


import { ResponsiveTableColumn } from "./types";



const columns2 = [
    {
      field: "name",
      label: "Name"
    },
    {
      field: "surname",
      label: "Surname"
    }
  ];
  
  const data2 = [
    {
      name: "Mark",
      surname: "Garsin"
    },
    {
      name: "Gabriel",
      surname: "Betappi"
    },
    {
      name: "Gustav",
      surname: "Mahler"
    }
  ];
  



const TableFormIteratorRow: React.FC<{
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

export default TableFormIteratorRow ;
