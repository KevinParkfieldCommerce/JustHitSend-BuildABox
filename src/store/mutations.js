let mutations = {
	sortAllProducts(state, payLoad) {
		switch(payLoad.product_type) {
			case 'Box':
				state.mainProduct = payLoad;
				break;
			case 'Addon':
				state.addonProducts.push(payLoad);
				break;
			case 'Card':
				state.card = payLoad;
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
		document.body.scrollTop = 0; // For Safari
      	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		state.selectedComponent = payLoad;
	},
	updateMessage(state, payLoad) {
		state.message = payLoad;
	},
	updateFilters(state, payLoad) {
		let category = payLoad.split('_').shift();
		let existingIndex = state.selectedFilters.findIndex(filter => {
			return filter.indexOf(category) > -1;
		});
		if(existingIndex > -1) {
			state.selectedFilters.splice(existingIndex, 1);
		}
		state.selectedFilters.push(payLoad);
	},
	clearFilters(state) {
		state.selectFilters = [];
	}
};

export default mutations;