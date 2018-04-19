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
		card: {},
		selectedMainProduct: {},
		selectedAddonProducts: [],
		message: '',
		selectedFilters: []
	},
	getters,
	mutations,
	actions
});

export default store;