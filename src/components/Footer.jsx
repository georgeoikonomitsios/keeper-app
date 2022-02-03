import React from "react";

function Footer(){
    // We create a new date obj and we get the current year
    const date = new Date();
    const currentYear = date.getFullYear();
    // we return the paragraph
    return <footer>
        <p>Copyrights © {currentYear}</p>
    </footer>
}

export default Footer;