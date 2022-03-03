<template>
  <button @click="btnClick">Call parent method from child component</button>
</template>

<script>
export default {
  emits: ["parentMethod"],
  methods: {
		btnClick() {
			this.$emit('parentMethod', 'abc');
		}
	},
};
</script>
