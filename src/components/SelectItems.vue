<template>
	<div class="SelectItems">
		<h1 class="heading">CHOOSE YOUR ITEMS</h1>
		<BuildSummary></BuildSummary>
		<AddonProducts></AddonProducts>
	</div>
</template>

<script type="text/javascript">
	import AddonProducts from './AddonProducts.vue'
	import BuildSummary from './BuildSummary.vue'

	export default {
		components: {
			AddonProducts,
			BuildSummary
		}
	}
</script>