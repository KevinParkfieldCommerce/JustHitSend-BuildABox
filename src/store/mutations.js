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
	updateMainProductPrice(state) {
		switch (true) {
			case (state.selectedAddonProducts.length == 0):
				state.selectedMainProduct = {};
				break;
			case (state.selectedAddonProducts.length <= 3):
				state.selectedMainProduct = state.mainProduct.variants[0];
				break;
			case(state.selectedAddonProducts.length > 3 && state.selectedAddonProducts.length < 5):
				state.selectedMainProduct = state.mainProduct.variants[1];
				break;
			case(state.selectedAddonProducts.length == 5):
				state.selectedMainProduct = state.mainProduct.variants[2];
				break;
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
	},
	updateMessage(state, payLoad) {
		state.message = payLoad;
	},
	addSelectedRibbon(state, payLoad){
		state.selectedRibbon = payLoad;
	}
};

export default mutations;