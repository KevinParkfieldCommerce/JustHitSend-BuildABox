import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		selectedComponent: 'SelectItems',
		mainProduct: {},
		addonProducts: [],
		ribbonProducts: [],
		selectedMainProduct: {},
		selectedAddonProducts: [],
		selectedRibbon: {},
		message: '',
		enableSteps: {
			selectItems: true,
			writeMessage: false,
			pickRibbon: false,
			addToCart: false
		} 	
	},
	getters,
	mutations,
	actions
});

export default store;