import React from "react";
const Header = ({className='header', ...props}) => {
    return(
        <div
            className={className}
            {...props}
        >
            header
        </div>
    )
}

export default Header;