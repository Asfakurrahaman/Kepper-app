import React from "react";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return(
        <div className="footer">
            <p>Copyright {year}</p>
        </div>
    );
}
export default Footer;