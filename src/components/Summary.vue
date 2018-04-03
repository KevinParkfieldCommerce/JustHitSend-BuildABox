<template>
	<div class="Summary">
		<h1 class="heading">ADD TO CART</h1>
		<div class="componentContainer">
			<h1>YOUR CUSTOM GIFT</h1>
			<p>Gifts are delivered within 3-4 business days!</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		computed: {
			message() {
				return this.$store.state.message;
			},
			ribbon() {
				return this.$store.state.selectedRibbon;
			}
		}
	}
</script>