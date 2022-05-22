import React from 'react';


interface TableProps{
    children: any;
    style?: object;
}

function Table(props: TableProps) {
    return (
        <table style={props.style}>
            {props.children}
        </table>
    );
}

export default Table;