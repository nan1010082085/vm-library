<template>
	<div>
		<h1>111</h1>
		<uic-button type="primary" @click="start">start</uic-button>
		<uic-button type="danger" @click="finish">finish</uic-button>
	</div>
</template>
<script>
  import '../src/index'

  export default {
    components: {},
    mixins: [],
    name: 'App',
    data () {
      return {}
    },
    props: {},
    computed: {},
    watch: {},
    methods: {
      start () {
        // Progress.start();
      },
      finish () {
        // Progress.finish();
      },
    },
    mounted () {
    },
    created () {
    },
    filters: {},
    directives: {},
    //keep-alive
    activated () {
    },
    deactivated () {
    },
    //实例销毁
    beforeDestroy () {
    },
    destroyed () {
    }
    //router
    //beforeRouteLeave ( to, from, next ) {
    //}
  }
</script>
<style scoped lang="less">

</style>