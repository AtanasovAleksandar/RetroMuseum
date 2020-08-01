import React from 'react';


// import MenuIcon from '../assets/img/grid.svg'; 

const style: any = {
    logo: {
        float: 'left',
        marginLeft: '10px',
    },
    logoText: {
        fontWeight: '400',
    },
    menu: {
        float: 'right',
        display: 'flex',
        alignItems: 'center',
        margin: '5px 20px',
        '&:hover': {
            background: 'red',
        },
    },
    menuIcon: {
        background: `#303030`,
        width: '15px',
        height: '15px',
        color: 'gray',
    },
    menuText: {
        marginLeft: '10px',
    },
}

export const Header: React.FC<any> = () => {
    return (
        <div style={{width: '100%', height: '80px'}}>
            <h2 style={style.logo}>Retro<span style={style.logoText}>Museum</span></h2>
            <div className="menu">
                <div style={style.menuIcon}></div>
                <h4 style={style.menuText}>MENU</h4>
            </div>
        </div>
    )
}
