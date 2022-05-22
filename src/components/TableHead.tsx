import React from 'react';
import Styles from "./TableHead.module.css";
import {RowProps} from "./TableRow";

interface HeadProps{
    children: React.ReactElement<RowProps> | Array<React.ReactElement<RowProps>>;
}

function TableHead(props: HeadProps){
    return (
        <thead className={Styles.thead}>
            {props.children}
        </thead>
    );
}

export default TableHead;