import { use, useRef } from "react";

export function Modal(props) {
    const dialogRef = useRef(null);

    if (!props.isOpen) {
        return null;
    }
    function handleOverlayClick(e) {
        if (dialogRef.current && !dialogRef.current.contains(e.target)) {
            props.onCloseRequested();
        }
    }
    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            onClick={handleOverlayClick}
        >
            <div ref={dialogRef} className="bg-white p-6 rounded shadow-sm">
                <header className="flex justify-between mb-4">
                    <h1 className="text-lg">{props.headerLabel}</h1>
                    <button
                        aria-label="Close"
                        onClick={props.onCloseRequested}>
                        X
                    </button>
                </header>
                {props.children}
            </div>
        </div>
    )
}