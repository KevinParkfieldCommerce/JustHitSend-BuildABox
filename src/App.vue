<template>
  <div class="BuildBox">
  	<PageBar></PageBar>
  	<keep-alive>
  		<component :is="getSelectedComponent"></component>
  	</keep-alive>
  </div>
</template>

<script>
	import PageBar from './components/PageBar.vue'
	import SelectItems from './components/SelectItems.vue'
	import WriteMessage from './components/WriteMessage.vue'
	import PickRibbon from './components/PickRibbon.vue'
	import Summary from './components/Summary.vue'

	export default {
		computed: {
			getSelectedComponent() {
				return this.$store.state.selectedComponent;
			},
			getMainProd() {
				let mainProd = this.$store.state.mainProduct;
				return mainProd;
			},
			getAddonProd() {
				let mainProd = this.$store.state.addonProducts;
				return mainProd;
			},
			getRibbonProd() {
				let mainProd = this.$store.state.ribbonProducts;
				return mainProd;
			}
		},
		components: {
			PageBar,
			SelectItems,
			WriteMessage,
			PickRibbon,
			Summary
		}
	}
</script>

