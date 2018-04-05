<template>
	<div class="PageBar">
		<div class="PageBar__btn" 
		:class="$store.state.selectedComponent == 'SelectItems' ? 'active' : '' " 
		@click="changeStep('SelectItems')">
			<div class="PageBar__dot"></div>
			<span class="stepTitle">
				STEP 1
			</span>
			<span class="stepHeading">
				Choose Your Items
			</span>
		</div>
		<div class="PageBar__btn" 
		:class="$store.state.selectedComponent == 'WriteMessage' ? 'active' : '' " 
		@click="changeStep('WriteMessage')">
			<div class="PageBar__dot"></div>
			<span class="stepTitle">
				STEP 2
			</span>
			<span class="stepHeading">
				Write A Note
			</span>
		</div>
		<div class="PageBar__btn" 
		:class="$store.state.selectedComponent == 'PickRibbon' ? 'active' : '' " 
		@click="changeStep('PickRibbon')">
			<div class="PageBar__dot"></div>
			<span class="stepTitle">
				STEP 3
			</span>
			<span class="stepHeading">
				Pick Your Ribbon
			</span>
		</div>
		<div class="PageBar__btn" 
		:class="$store.state.selectedComponent == 'Summary' ? 'active' : '' " 
		@click="changeStep('Summary')">
			<div class="PageBar__dot"></div>
			<span class="stepTitle">
				ADD TO CART
			</span>
			<span class="stepHeading">
				See Your Gifts
			</span>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		methods: {
			changeStep(component){
				switch (component) {
					case 'SelectItems':
						this.$store.commit('switchComponent', component);
						break;
					case 'WriteMessage':
						if (this.$store.state.selectedAddonProducts.length >= 3) {
						this.$store.commit('switchComponent', component);	
						}
						break;
					case 'PickRibbon':
						if (this.$store.getters.getMessage.length > 0 && this.$store.state.selectedAddonProducts.length >= 3) {
						this.$store.commit('switchComponent', component);	
						}
						break;
					case 'Summary':
						if (this.$store.getters.getSelectedRibbon.hasOwnProperty('id') && this.$store.getters.getMessage.length > 0 && this.$store.state.selectedAddonProducts.length >= 3) {
						this.$store.commit('switchComponent', component);	
						}
						break;
				}
			}
		}
	}
</script>