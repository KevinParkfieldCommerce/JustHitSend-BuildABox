let getters = {
	getUnfilteredAddons(state) {
		return state.addonProducts;
	},
	getAddonProducts(state) {
		if (state.selectedFilters.length == 0) {
			return state.addonProducts;
		}
		let showAllCheck = state.selectedFilters.filter( filter => filter.indexOf('_all') > -1 );
    	let isFiltered = state.selectedFilters.length != showAllCheck.length;
    	if(isFiltered) {
      		let activeFilters = state.selectedFilters.filter( filter => filter.indexOf('_all') === -1 );
      		return state.addonProducts.filter( product => {
	        let pass = true;
	        for(let i = 0; i < activeFilters.length; i++){
	          if(product.tags.indexOf(activeFilters[i]) === -1){
	            pass = false;
	            break;
	          }
	        }
	        return pass;
	      });
    	} else {
    		return state.addonProducts;
    	}
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
	getMessage(state) {
		return state.message;
	},
	getSelectedMainProduct(state) {
		return state.selectedMainProduct;
	},
	getCardImage(state) {
		return state.card.images[0].src;
	}
};

export default getters;