import react from "react";

export function List({ children }) {
    return (
        <div className="list-overflow">
            <ul className="list-group">{children}</ul>
        </div>
    );
}

export function ListItem({ children }) {
    return <li className="list-group-item">{children}</li>;
}