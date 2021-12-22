import React from "react";
import Td from "./Td";

const Tr = ({ rowData, rowIndex, dispatch, cellData }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td
            cellIndex={i}
            rowIndex={rowIndex}
            dispatch={dispatch}
            cellData={rowData[i]}
          >
            {""}
          </Td>
        ))}
    </tr>
  );
};

export default Tr;
