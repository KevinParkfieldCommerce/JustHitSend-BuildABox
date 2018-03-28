let mutations = {
	sortAllProducts(state, payLoad) {
		switch(payLoad.product_type) {
			case 'Box':
				state.mainProduct = payLoad;
				break;
			case 'Addon':
				state.addonProducts.push(payLoad);
				break;
			case 'Ribbon':
				state.ribbonProducts.push(payLoad);
				break;
		}
		//console.log(payLoad);
	}
};

export default mutations;