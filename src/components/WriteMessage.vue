<template>
	<div class="WriteMessage">
		<h1 class="heading">WRITE A NOTE</h1>
		<div class="componentContainer">
			<h1>WHAT'S ON YOUR CARD</h1>
			<p>Pick your card and customize your message.</p>
			<div class="WriteMessage__content">
				<div class="WriteMessage__card">
					<img src="../assets/logo.png">
				</div>
				<div class="WriteMessage__message">
					<textarea @input="enterMessage" placeholder="Type your message..."></textarea>
					<button class="buildbox-btn active" @click="$store.commit('switchComponent', 'PickRibbon')">CONTINUE</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		methods: {
			enterMessage(e) {
				this.$store.commit('updateMessage', e.target.value);
			}
		}
	}
</script>
