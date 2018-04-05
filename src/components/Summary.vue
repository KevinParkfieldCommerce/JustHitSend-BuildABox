<template>
	<div class="Summary">
		<h1 class="heading">ADD TO CART</h1>
		<div class="componentContainer">
			<h1>YOUR CUSTOM GIFT</h1>
			<p>Gifts are delivered within 3-4 business days!</p>
			<div class="Summary__content">
				<ul class="Summary__images">
					<li>
						<img :src="getMainProduct.images[0].src">
					</li>
					<li>
						<img src="../assets/logo.png">
					</li>
					<li v-for="product in getSelectedAddonProducts">
						<img :src="product.images[0].src">
					</li>
				</ul>
				<div class="Summary__list">
					<ul>
						<li class="title">ITEMS:</li>
						<li v-for="(value, key) in listAddons">
							<span>{{ value }}</span>
							<span>{{ key }}</span>
						</li>
						<li class="title messageTitle">MESSAGE:</li>
						<li class="message">{{ getMessage }}</li>
					</ul>
					<div class="Summary__total">
						<span>SUB TOTAL: ${{ getMainProductPrice }}</span>
						<button class="buildbox-btn active">ADD TO CART</button>
					</div>	
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters([
				'getMainProduct',
				'getMainProductPrice',
				'getSelectedAddonProducts',
				'getMessage'
			]),
			listAddons() {
				let productList = {};
				let addons = this.$store.getters.getSelectedAddonProducts;
				let products = addons.map(item => { return item.title });
				products.map(item => {
					if(productList.hasOwnProperty(item)) {
						productList[item] = productList[item] + 1;
					} else {
						productList[item] = 1;
					}
				});
				return productList;
			}
		}
	}
</script>