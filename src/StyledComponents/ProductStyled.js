import styled from 'styled-components';

export const Card = styled.div`
    border-top-right-radius: 50px;
    border: 1px solid #ccc;
    padding: 1em;
    transition: all 200ms;

    &:hover {
        box-shadow: 1px 1px 5px 1px #ccc;
        transform: translate(-3px, -3px);
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 20vh;
    overflow: hidden;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 100%;
`;

export const Price = styled.h3`
    text-align: center;
    margin-top: 1em;
    font-weight: 300;
    font-size: 1.5em;
`;

export const Name = styled.h3`
    text-align: center;
    margin-bottom: 1em;
`;

export const AddToCart = styled.button`
    padding: .5em 1em;
    border-radius: 100px;
    font-size: 1em;
    background-color: var(--primary-color);
    color: #fff;
    display: flex;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: .5em;

    transition: all 200ms;

    &:hover {
        box-shadow: 1px 1px 5px 1px #ccc;
        transform: translateY(-5px);
    }
`;