import axios from 'axios'

const STORE_URL = 'https://www.justhitsendgifts.com';

let actions = {
	getProducts(context) {
		axios.get(`${STORE_URL}/collections/create/products.json?limit=250`)
			.then(response => {
				response.data.products.forEach(product => {
					if(product.variants[0].available) {
						context.commit('sortAllProducts', product);
					}
				});
			})
			.catch(error => {
				console.log('Error fetching products');
			});
	}
};

export default actions;