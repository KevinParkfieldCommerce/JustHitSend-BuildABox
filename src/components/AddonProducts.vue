<template>
	<div class="AddonProducts">
		<h1>SELECT FROM THESE ITEMS</h1>
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
	export default {
		computed: {
			addonProducts() {
				return this.$store.getters.getAddonProducts;
			}
		},
		methods: {
			addProduct(product) {
				this.$store.commit('addAddonProduct', product);
			}
		}
	}
</script>