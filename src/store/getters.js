let getters = {
	getAddonProducts(state) {
		return state.addonProducts;
	},
	getSelectedAddonProducts(state) {
		return state.selectedAddonProducts;
	},
	getMainProduct(state) {
		return state.mainProduct;
	},
	getMainProductPrice(state) {
		if (Object.keys(state.selectedMainProduct).length === 0) {
			return 0;
		}
		return state.selectedMainProduct.price;
	},
	getRibbons(state) {
		return state.ribbonProducts;
	},
	getSelectedRibbon(state) {
		return state.selectedRibbon;
	},
	getMessage(state) {
		return state.message;
	}
};

export default getters;