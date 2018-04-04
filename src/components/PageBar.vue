<template>
	<div class="PageBar">
		<div class="PageBar__btn" @click="changeStep('SelectItems', $store.state.enableSteps.selectItems)">
			<div class="PageBar__dot"></div>
			<span class="stepTitle">
				STEP 1
			</span>
			<span class="stepHeading">
				Choose Your Items
			</span>
		</div>
		<div class="PageBar__btn" @click="changeStep('WriteMessage', $store.state.enableSteps.writeMessage)">
			<div class="PageBar__dot"></div>
			<span class="stepTitle">
				STEP 2
			</span>
			<span class="stepHeading">
				Write A Note
			</span>
		</div>
		<div class="PageBar__btn" @click="changeStep('PickRibbon', $store.state.enableSteps.pickRibbon)">
			<div class="PageBar__dot"></div>
			<span class="stepTitle">
				STEP 3
			</span>
			<span class="stepHeading">
				Pick Your Ribbon
			</span>
		</div>
		<div class="PageBar__btn" @click="changeStep('Summary', $store.state.enableSteps.addToCart)">
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
			changeStep(component, stateCondition){
				if (stateCondition) {
					this.$store.commit('switchComponent', component);
				}
			}
		}
	}
</script>