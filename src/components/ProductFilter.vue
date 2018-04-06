<template>
	<div class="ProductFilter">
		<select v-model="selected" @change="updateFilter">
			<option :value="category+'_all'" selected="">{{ category }}</option>
			<option v-for="option in options" :value="option">{{ filterValue(option) }}</option>
		</select>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				selected:`${this.category}_all`
			};
		},
		props: ['options', 'category'],
		methods: {
			filterValue(option) {
				return option.split('_').pop();
			},
			updateFilter(e) {
				this.$store.commit('updateFilters', e.target.value);				
			}
		}
	}
</script>