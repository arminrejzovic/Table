import React from 'react';

interface BodyProps {
    children: any;
}

function TableBody(props: BodyProps) {
    return (
        <tbody>
            {props.children}
        </tbody>
    );
}

export default TableBody;