import React from 'react';

interface CellProps{
    children: any;
    align: "center" | "right" | "left";
}

function TableCell(props: CellProps) {
    return (
        <td style={{textAlign: props.align}}>
            {props.children}
        </td>
    );
}

TableCell.defaultProps = {
    align: "left"
}

export default TableCell;