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
	},
	addAddonProduct(state, payLoad) {
		if (state.selectedAddonProducts.length < 5){
			state.selectedAddonProducts.push(payLoad);
		}
	},
	removeSelectedAddon(state, payLoad) {
		let index = state.selectedAddonProducts.findIndex( (addon) => {
			return addon.id == payLoad.id;
		});
		state.selectedAddonProducts.splice(index, 1);
	},
	switchComponent(state, payLoad) {
		state.selectedComponent = payLoad;
	}
};

export default mutations;