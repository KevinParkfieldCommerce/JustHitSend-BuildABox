<template>
	<div class="BuildSummary componentContainer">
		<h1>WHAT'S IN YOUR GIFT</h1>
		<p>Pick 3 items for $50, 4 items for $65 or 5 items for $75.</p>
		<div class="BuildSummary__info">
			<ul class="BuildSummary__list">
				<li v-for="product in getSelectedAddons" class="BuildSummary__addonProduct">
					<div class="BuildSummary__itemWrapper">
						<div class="BuildSummary__productOverlay">
							<button @click="removeAddon(product)">REMOVE</button>
						</div>
						<img :src="product.images[0].src">
					</div>
					<span>{{ product.title }}</span>
				</li>
				<li v-for="n in getEmptySlots" class="BuildSummary__emptySlotWrapper">
					<div class="BuildSummary__emptySlot">
						<span>Select an item below</span>
					</div>		
				</li>
			</ul>
			<div class="BuildSummary__total">
				<p>Items: {{ $store.state.selectedAddonProducts.length }}</p>
				<p>Sub Total: ${{ getTotalPrice }}</p>
				<div v-if="enableBtn" class="next-btn">
					<button class="buildbox-btn active" @click="$store.commit('switchComponent', 'WriteMessage')">CONTINUE</button>
				</div>
				<div v-else class="next-btn">
					<button class="buildbox-btn" disabled>CONTINUE</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		computed: {
			getSelectedAddons() {
				return this.$store.state.selectedAddonProducts;
			},
			getEmptySlots() {
				return 5-this.$store.state.selectedAddonProducts.length;
			},
			getTotalPrice() {
				return this.$store.getters.getMainProductPrice;
			},
			enableBtn() {
				return this.$store.state.selectedAddonProducts.length >= 3
			}
		},
		methods: {
			removeAddon(product){
				this.$store.commit('removeSelectedAddon', product);
				this.$store.commit('updateMainProductPrice');
			}
		}
	}
</script>