import React from 'react';
import "./Footer.css";

const date = new Date();

// const footerStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
// }

// const pStyle = {
//     border: "3px solid blue",
//     textAlign: "center"
// }

function Footer() {
    return (
        <div>
            <footer>
                <p className="footer-title">Copyright@ {date.getFullYear()}</p>
            </footer>
        </div>
    )
}

export default Footer;