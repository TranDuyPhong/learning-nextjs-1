// import React from 'react';
// import Link from 'next/link';

// class Header extends React.Component {
//     render() {
//         const title = this.props.title;
//         return (
//             <React.Fragment>
//                 <p className='classCustom'>{title}</p>
//                 {this.props.children}
//                 <Link href='/'>
//                     <a>Home</a> 
//                 </Link>
//                 <Link href='/about'>
//                     <a>About</a>
//                 </Link>
//                 <Link href='/portfolios'>
//                     <a>Portfolios</a>
//                 </Link>
//                 <Link href='/blogs'>
//                     <a>Blogs</a>
//                 </Link>
//                 <Link href='/cv'>
//                     <a>CV</a>
//                 </Link>
//             </React.Fragment>
//         )
//     }
// }

// export default Header;

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const BsNavLink = (props) => {
    const { route, text } = props; 
    return (
        <Link href={route}>
            <a className='nav-link'>{text}</a>
        </Link>
    )
}

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className='port-navbar port-default abs' color="transparent" light expand="md">
                <NavbarBrand className='port-navbar-brand' href="/">NextJS</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className='port-navbar-item'>
                            <BsNavLink route='/' title='Home' />
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <BsNavLink route='/about' title='About' />
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <BsNavLink route='/portfolios' title='Portfolios' />
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <BsNavLink route='/blogs' title='Blog' />
                        </NavItem>
                        <NavItem className='port-navbar-item'>
                            <BsNavLink route='/cv' title='Cv' />
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;