<template>
	<div class="AddonProducts componentContainer">
		<h1>SELECT FROM THESE ITEMS</h1>
		<div class="Filters">
			<ProductFilter :options="addonFilterOptions(`Who's it for`)" category="Who's it for"></ProductFilter>	<ProductFilter :options="addonFilterOptions(`What’s the occasion`)" category="What’s the occasion"></ProductFilter>		
		</div>
		<ul class="AddonProducts__list">
			<li v-for="product in addonProducts" class="AddonProducts__addonProduct">
				<div class="AddonProducts__wrapper">
					<div class="AddonProducts__overlay">
						<button @click="addProduct(product)">ADD TO GIFT</button>
						<button>QUICK VIEW</button>
					</div>
					<img :src="product.images[0].src">
				</div>
				<span>{{ product.title }}</span>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import ProductFilter from '../components/ProductFilter.vue'

	export default {
		computed: {
			addonProducts() {
				return this.$store.getters.getAddonProducts;
			}
		},
		methods: {
			addProduct(product) {
				this.$store.commit('addAddonProduct', product);
				this.$store.commit('updateMainProductPrice');
			},
			addonFilterOptions(category) {
				let addonProducts = this.$store.getters.getUnfilteredAddons;
				let tags = [];
				for(let i=0; i<addonProducts.length; i++) {
					let tagsToAdd = addonProducts[i].tags.filter(tag => {
						if(tag.indexOf(`${category}_`) > -1) {
							return tags.indexOf(tag) == -1;
						}
					});
					tags = [...tags, ...tagsToAdd];
				}
				return tags; 
			}
		},
		components: {
			ProductFilter
		}
	}
</script>