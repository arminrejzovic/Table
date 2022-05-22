import React, {useContext} from 'react';
import Styles from "./Table.module.css";

interface TableProps{
    children: any;
    style?: object;
    caption?: string;
    captionSide?: "top" | "bottom";
    size: "sm" | "md" | "lg";
}

const TableContext = React.createContext({size: "md"});

export function useTableContext(){
    return useContext(TableContext);
}

function Table(props: TableProps) {
    const defaults = {
        size: props.size
    }
    const tableSize = Styles[`${props.size}`];

    return (
        <TableContext.Provider value={defaults}>
            <table
                className={`${Styles.table} ${tableSize}`}
                style={{...props.style, captionSide: props.captionSide}}
            >
                {props.caption && <caption>{props.caption}</caption>}
                {props.children}
            </table>
        </TableContext.Provider>
    );
}

Table.defaultProps = {
    captionSide: "top",
    size: "md"
}

export default Table;