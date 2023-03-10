import React from 'react';
import { Card, Wrapper, Image, ImageWrapper, Info, Name, Price, Description, Brand } from '../StyledComponents/ProductDetailStyled';
import '../Styles/ProductDetail.css';
import { GrClose } from 'react-icons/gr';

const ProductDetail = ({product, close}) => {

    const closeModal = () => {
        const modalWrapper = document.getElementById('modal-wrapper');
        const modalCard = document.getElementById('modal-card');
        modalWrapper.style.opacity = '0';
        modalCard.style.opacity = '0';
        modalCard.style.transform = 'scale(0)';

        setTimeout(() => {
            close();
        }, 200);
    }

    return (
        <Wrapper id="modal-wrapper">
            <Card id="modal-card">
                <GrClose onClick={closeModal} className='close-modal'/>
                <ImageWrapper>
                    <Image src={product.image_path}/>
                </ImageWrapper>
                <Info>
                    <Name>{product.name}</Name>
                    <div className='modal-price-brand-wrapper'>
                        <Price>${product.price}</Price>
                        <Brand>{product.brand.name}</Brand>
                    </div>
                    <Description>{product.description}</Description>
                </Info>
            </Card>
        </Wrapper>
    )
}

export default ProductDetail