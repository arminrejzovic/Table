import React from 'react';
import Styles from './Modal.module.css'

interface ModalProps{
    open: boolean;
    title?: string;
    size: "sm" | "md" | "lg";
    children?: any;
    actionLeft?: Function;
    actionLeftText?: string;
    actionRight?: Function;
    actionRightText?: string;
}

function Modal(props: ModalProps) {
    if(props.open){
        document.body.style.overflow = "hidden";
    }

    const modalClass = Styles[`${props.size}`];

    return (
        props.open ?
        <div className={Styles.backdrop} style={{top: document.documentElement.scrollTop, left: 0}}>
            <div className={`${modalClass} ${Styles.modal}`}>
                <div>TITLE</div>
                <div>{props.children}</div>
                <div>
                    {
                        props.actionLeft &&
                        <button
                            onClick={() => props.actionLeft()}
                        >
                            {props.actionLeftText ? props.actionLeftText : "ACTION 1"}
                        </button>
                    }
                    {
                        props.actionRight &&
                        <button
                            onClick={() => props.actionRight()}
                        >
                            {props.actionRightText ? props.actionRightText : "ACTION 2"}
                        </button>
                    }
                </div>
            </div>
        </div>
            : null
    );
}

Modal.defaultProps = {
    open: false,
    size: "md"
}

export default Modal;