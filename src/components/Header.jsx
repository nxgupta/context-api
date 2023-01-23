import { Badge, Container, Dropdown, FormControl, Navbar } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import React from 'react'
const Header = () => {
    return (
        <Navbar bg='dark' variant='dark' style={{height:'80px'}}>
            <Container>
                <Navbar.Brand>
                    <Link to='/ '>
                        Shopping Cart
                    </Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl className='m-auto' type='search' placeholder='Search a product' style={{maxWidth: 500}}
                    />
                </Navbar.Text>
                <Dropdown alignRight>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaShoppingCart color="white" fontSize="25px"/>
                    <Badge>10</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{minWidth:370}}>
                    <span style={{padding:10}}>Cart is Empty</span>
                </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    )
}
export default Header