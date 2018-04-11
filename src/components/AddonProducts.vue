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
						<button @click="quickView(product)">QUICK VIEW</button>
					</div>
					<img :src="product.images[0].src">
				</div>
				<span>{{ product.title }}</span>
			</li>
		</ul>
		<div v-if="showQuickView" class="QuickView">
			<div class="QuickView__content">
				<div @click="showQuickView = false" class="QuickView__close">
					<i class="fas fa-times"></i>
				</div>
				<div class="QuickView__image">
					<img :src="quickViewProduct.images[0].src">
				</div>
				<div class="QuickView__info">
					<h2>{{ quickViewProduct.title }}</h2>
					<h3>{{ quickViewProduct.vendor }}</h3>
					<button @click="addProduct(quickViewProduct)" class="buildbox-btn active">ADD TO GIFT</button>
					<p>{{ quickViewProduct.body_html }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import ProductFilter from '../components/ProductFilter.vue'

	export default {
		data() {
			return {
				showQuickView: false,
				quickViewProduct: {}
			};
		},
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
			},
			quickView(product) {
				this.showQuickView = true;
				this.quickViewProduct = product;
			}
		},
		components: {
			ProductFilter
		}
	}
</script>