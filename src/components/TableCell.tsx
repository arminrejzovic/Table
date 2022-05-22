import React from 'react';
import { useTableContext } from "./Table";
import Styles from "./TableCell.module.css";

interface CellProps{
    children: any;
    align: "center" | "right" | "left";
}

function TableCell(props: CellProps) {
    const { size } = useTableContext();

    let cellClass = Styles[`${size}`];

    return (
        <td className={`${Styles.tableCell} ${cellClass}`} style={{textAlign: props.align}}>
            {props.children}
        </td>
    );
}

TableCell.defaultProps = {
    align: "left"
}

export default TableCell;