<template>
	  <div class="BuildBox">
	  	<PageBar></PageBar>
	  	<div class="BuildBoxContainer">
		  	<keep-alive>
		  		<component :is="getSelectedComponent"></component>
		  	</keep-alive>
	  	</div>
	  </div>
</template>

<script>
	import PageBar from './components/PageBar.vue'
	import SelectItems from './components/SelectItems.vue'
	import WriteMessage from './components/WriteMessage.vue'
	import Summary from './components/Summary.vue'

	export default {
		computed: {
			getSelectedComponent() {
				return this.$store.state.selectedComponent;
			},
			filters() {
				return this.$store.state.selectedFilters;
			}
		},
		components: {
			PageBar,
			SelectItems,
			WriteMessage,
			Summary
		}
	}
</script>

