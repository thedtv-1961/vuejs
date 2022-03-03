<script>
import Emit from './components/Emit.vue';

export default {
	components: {
		Emit
	},
	methods: {
		parentMethod(msg) {
			console.log('This is parent method called from child component.');
			console.log('Value = ' + msg);
		}
	}
};
</script>

<template>
 <Emit @parent-method="parentMethod" />
 <p>View in console</p>
</template>
