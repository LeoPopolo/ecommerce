import React from 'react';
import { Nav, LogoTitle, NavbarLink } from '../StyledComponents/NavbarStyled';
import CartContext from '../Context/CartContext';
import { GrCart } from 'react-icons/gr';
import '../Styles/Navbar.css';

const Navbar = () => {
	const { cart } = React.useContext(CartContext);

	return (
		<Nav>
			<div>
				<LogoTitle>Tiendita</LogoTitle>
			</div>
			<div>
				<NavbarLink to={'/cart'} className='cart-link'> <GrCart className='cart'/> <span className='cart-quantity'>{cart.length}</span> </NavbarLink>
				<span className='cart-total'>$12000</span>
			</div>
			<div>
				<NavbarLink to={'/'}>Home</NavbarLink>
				<NavbarLink to={'/about'}>Nosotros</NavbarLink>
				<NavbarLink to={'/contact'}>Contacto</NavbarLink>
			</div>
		</Nav>
	)
}

export default Navbar