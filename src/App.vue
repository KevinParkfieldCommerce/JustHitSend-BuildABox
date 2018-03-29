<template>
  <div class="BuildBox">
  	<BuildSummary></BuildSummary>
	<AddonProducts></AddonProducts>
  </div>
</template>

<script>
import AddonProducts from './components/AddonProducts.vue'
import BuildSummary from './components/BuildSummary.vue'

export default {
	computed: {
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
		AddonProducts,
		BuildSummary
	}
}
</script>

