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
						<button @click="addToCart" class="buildbox-btn active">ADD TO CART</button>
					</div>	
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios'
	import { mapGetters } from 'vuex'

	export default {
		data() {
			return {
				isAdding: false
			};
		},
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
		},
		methods: {
			addToCart() {
				let mainProduct = this.$store.getters.getSelectedMainProduct;
				let addonProducts = this.$store.getters.getSelectedAddonProducts;
				let ribbon = this.$store.getters.getSelectedRibbon;
				let cartQueue = [];
				let boxKey = (Math.floor(Math.random() * 1000) + 1).toString();

				function ajaxAdd(queue){
					if (queue.length > 0){
						let currentItem = queue.pop();
						axios.post('/cart/add.js', currentItem)
						.then(response => {
							ajaxAdd(queue);
						})
						.catch(err => {
							console.log(err);
						});
						} else {
							window.location.href = '/cart';
						}
					}
					cartQueue.push({
						id:mainProduct.id,
						quantity: 1,
						properties: {
							'BoxNum': boxKey
						}
					});
					let combinedAddons = {};
					addonProducts.forEach(addon => {
						if (combinedAddons.hasOwnProperty(addon.id)) {
							combinedAddons[addon.id] = combinedAddons[addon.id] + 1;
						} else {
							combinedAddons[addon.id] = 1;
						}
					});
					Object.keys(combinedAddons).forEach(key => {
						cartQueue.push({
							id: key,
							quantity: combinedAddons[key],
							properties: {
								'BoxNum': boxKey
							}
						});
					});
					cartQueue.push({
						id: ribbon.id,
						quantity: 1,
						properties: {
							'BoxNum': boxKey
						}
					});
					ajaxAdd(cartQueue);
				}
			}
		}
</script>