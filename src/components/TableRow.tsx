import React from 'react';
import Styles from "./TableRow.module.css";

export interface RowProps {
    children: any;
    selected: boolean;
}

function TableRow(props: RowProps) {
    return (
        <tr className={props.selected ? Styles.selected : Styles.unselected}>
            {props.children}
        </tr>
    );
}

TableRow.defaultProps = {
    selected: false
}

export default TableRow;