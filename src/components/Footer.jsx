import React from "react";

function Footer(){
    // We create a new date obj and we get the current year
    const currentYear = new Date().getFullYear();
    // we return the paragraph
    return <footer>
        <p>Copyrights © {currentYear}</p>
    </footer>
}

export default Footer;