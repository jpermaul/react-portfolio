import React from 'react';

function Header() {
    const name = "Jeremy Permaul";
    return (
        <header className="header">
            <div className="header-content">
                <h1>{name}</h1>
            </div>
        </header>
    )
} 

export default Header;