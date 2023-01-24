import { Badge, Button, Container, Dropdown, FormControl, Navbar } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React from 'react'
import { useCartContext } from '../context/AppContext'
import { AiFillDelete } from 'react-icons/ai'
const Header = () => {

    let { state: { cart }, dispatch,productDispatch,productState:{searchQuery} } = useCartContext();

    return (
    <Navbar bg='dark' variant='dark' style={{ height: '80px' }}>
        <Container>
            <Navbar.Brand>
                <Link to='/ '>
                    Shopping Cart
                </Link>
            </Navbar.Brand>
            <Navbar.Text className="search">
                <FormControl className='m-auto' type='search' placeholder='Search a product' value={searchQuery} style={{ width: 400 }} onChange={(e)=>productDispatch({type:'SORT_BY_SEARCH',payload:e.target.value})}/>
            </Navbar.Text>
            <Dropdown alignRight>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaShoppingCart color="white" fontSize="25px" />
                    <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ minWidth: 370 }}>
                    {cart.length > 0 ?
                        (<>
                            {cart.map((prod) => (
                                <span className="cartitem" key={prod.id}>
                                    <img
                                        src={prod.image}
                                        className="cartItemImg"
                                        alt={prod.name}
                                    />
                                    <div className="cartItemDetail">
                                        <span>{prod.name}</span>
                                        <span>₹ {prod.price.split(".")[0]}</span>
                                    </div>
                                    <AiFillDelete
                                        fontSize="20px"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: prod,
                                            })
                                        }
                                    />
                                </span>
                            ))}
                            <Link to="cart">
                                <Button style={{ width: "95%", margin: "0 10px" }}>
                                    Go To Cart
                                </Button>
                            </Link>
                        </>)
                        :
                        (<span style={{ padding: 10 }}>Cart is Empty</span>)}
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    </Navbar>
    )
}
export default Header