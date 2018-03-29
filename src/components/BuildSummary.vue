<template>
	<div class="BuildSummary">
		<h1>WHAT'S IN YOUR GIFT</h1>
		<p>Pick 3 items for $50, 4 items for $65 or 5 items for $75.</p>
		<div class="BuildSummary__info">
			<ul class="BuildSummary__list">
				<li v-for="product in getSelectedAddons" class="BuildSummary__addonProduct">
					<div class="BuildSummary__itemWrapper">
						<div class="BuildSummary__productOverlay">
							<button>REMOVE</button>
						</div>
						<img :src="product.images[0].src">
					</div>
					<span>{{ product.title }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				itemsLeft: 5
			};
		},
		computed: {
			getSelectedAddons() {
				let addonProds = this.$store.state.selectedAddonProducts;
				this.itemsLeft--;
				return addonProds;
			}
		},
		methods: {

		}
	}
</script>