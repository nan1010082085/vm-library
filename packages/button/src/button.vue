<template>
	<button
		class="uic-button"
		@click="handleClick"
		:disabled="buttonDisabled || loading"
		:autofocus="autofocus"
		:class="[
		type ? 'uic-button-' + type : '',
		buttonSize ? 'uic-button-' + buttonSize : '',
		{
			'uic-plain':plain,
			'uic-disabled':buttonDisabled,
			'uic-loading':loading,
			'uic-round':round,
			'uic-square':square,
			'uic-circle':circle
		}
	]">
		<i class="uic-button-icon-loading"></i>
		<i :class="icon" v-if="icon && !loading"></i>
		<span v-if="$slots.default"><slot></slot></span>
	</button>
</template>
<style scoped lang="less">
	@import "../../style/button";
</style>
<script>
  export default {
    computed: {
      buttonSize () {
        return this.size
      },
      buttonDisabled () {
        return this.disabled
      },
    },
    methods: {
      handleClick ( evt ) {
        this.$emit('click', evt);
      }
    },
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      autofocus: Boolean,
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      round: Boolean,
      square: Boolean,
      circle: Boolean,
    },
    name: "UicButton",
  }
</script>