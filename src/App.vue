<template>
  <div>
  
  </div>
</template>

<script>
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
	}
}
</script>

