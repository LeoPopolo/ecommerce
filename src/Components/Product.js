import React from 'react';
import CartContext from '../Context/CartContext';
import { Card, Image, ImageWrapper, AddToCart, Price, Name } from '../StyledComponents/ProductStyled';
import { GrCart } from 'react-icons/gr';
import ProductDetail from '../Components/ProductDetail';
import '../Styles/Product.css';

const Product = ({ product }) => {

	const [ popupIsOpen, setPopupIsOpen ] = React.useState(false);
	const { addToCart } = React.useContext(CartContext);

	const togglePopup = () => {
		setPopupIsOpen(!popupIsOpen);
	}

	const add = (item) => {
		addToCart(item);
	}

	return (
		<>
			{ popupIsOpen && 
				<ProductDetail 
					close={togglePopup} 
					product={product}

				/>
			}
			<Card>
				<ImageWrapper onClick={togglePopup}>
					<Image src={product.image_path} />
				</ImageWrapper>
				<Price>${product.price}</Price>
				<Name>{product.name}</Name>
				<AddToCart onClick={() => addToCart(product)}> <GrCart className='add-to-cart'/> Agregar al carrito</AddToCart>
			</Card>
		</>
	)
}

export default Product