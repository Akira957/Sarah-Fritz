import React from 'react';

const date = new Date();

function Footer() {
    return (
        <div>
            <footer>
                <p style={{ border: "3px solid blue", textAlign: "center" }}>Copyright@ {date.getFullYear()}</p>
            </footer>
        </div>
    )
}

export default Footer;