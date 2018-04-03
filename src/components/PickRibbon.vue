<template>
	<div class="PickRibbon">
		<div class="heading">PICK YOUR RIBBON</div>
		<div class="componentContainer">
			<p>Add a little something extra to your gift.</p>
			<ul class="PickRibbon__list">
				<li v-for="ribbon in ribbonProducts" class="PickRibbon__ribbon" :class="selectedRibbon.id == ribbon.id ? 'active' : '' " @click="addRibbon(ribbon)">
					<img :src="ribbon.images[0].src">
				</li>
			</ul>
			<button class="buildbox-btn active" @click="$store.commit('switchComponent', 'Summary')">CONTINUE</button>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		computed: {
			ribbonProducts() {
				return this.$store.getters.getRibbons;
			},
			selectedRibbon() {
				return this.$store.getters.getSelectedRibbon;
			}
		},
		methods: {
			addRibbon(ribbon) {
				this.$store.commit('addSelectedRibbon', ribbon);
			}
		}
	}
</script>