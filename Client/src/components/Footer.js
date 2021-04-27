import React from 'react';

const date = new Date();

const footerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const pStyle = {
    border: "3px solid blue",
    textAlign: "center"
}

function Footer() {
    return (
        <div>
            <footer style={footerStyle}>
                <p style={pStyle}>Copyright@ {date.getFullYear()}</p>
            </footer>
        </div>
    )
}

export default Footer;