<template>
	<div class="WriteMessage">
		<h1 class="heading">WRITE A NOTE</h1>
		<div class="componentContainer">
			<h1>WHAT'S ON YOUR CARD</h1>
			<p>Pick your card and customize your message.</p>
			<div class="WriteMessage__content">
				<div class="WriteMessage__card">
					<img :src="$store.getters.getCardImage">
				</div>
				<div class="WriteMessage__message">
					<textarea @input="enterMessage" placeholder="Type your message..."></textarea>
					<div v-if="enableBtn" class="next-btn">
						<button class="buildbox-btn active" @click="$store.commit('switchComponent', 'PickRibbon')">CONTINUE</button>
					</div>
					<div v-else class="next-btn">
						<button class="buildbox-btn" disabled>CONTINUE</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		computed: {
			enableBtn() {
				return this.$store.getters.getMessage.length > 0;
			}
		},
		methods: {
			enterMessage(e) {
				this.$store.commit('updateMessage', e.target.value);
			}
		}
	}
</script>
