import React from 'react';
import '../Styles/Home.css';
import Product from '../Components/Product';

const Home = () => {
	const products = [
		{
            id: 4,
            name: 'remera negra',
            description: 'remera hardcore para entrenar re piola',
            image_path: 'https://piet.com.ar/wp-content/uploads/piet-remera-negra-cuadrado-blanco-01.jpg',
            stock: 87,
            price: 4400,
            brand: {
                id: 2,
                name: 'Nike'
            }
        },
		{
            id: 5,
            name: 'remera con capucha',
            description: 'remera hardcore con capucha',
            image_path: 'https://static.dafiti.com.ar/p/dogma-4584-27015-1-product.jpg',
            stock: 80,
            price: 5000,
            brand: {
                id: 2,
                name: 'Nike'
            }
        },
		{
            id: 6,
            name: 'pantalón verde',
            description: 'pantalon verdesito facha',
            image_path: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/627/888/products/gabardina-verde11-dba320702c9650549415369432530222-1024-1024.webp',
            stock: 10,
            price: 8500,
            brand: {
                id: 2,
                name: 'Nike'
            }
        },
		{
            id: 7,
            name: 'busito verde',
            description: 'buso anashe',
            image_path: 'https://woker.vtexassets.com/arquivos/ids/197451-800-800?v=637542601882970000&width=800&height=800&aspect=true',
            stock: 1,
            price: 12000,
            brand: {
                id: 2,
                name: 'Nike'
            }
        },
	];

	return (
		<div className='container'>
			{products.map(product => (
				<Product
					product={product}
					key={product.id}
				/>
			))}
		</div>
	)
}

export default Home;