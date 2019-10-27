<template>
	<div class="uic-loader-fixed" v-show="show">
		<div
			class="uic-loader-back"
			:style="gutter"
		></div>
	</div>
</template>
<script>
  export default {
    name: "UicProgress",
    data () {
      return {
        type: '',
        back: 0,
        inter: '',
      }
    },
    computed: {
      gutter: {
        get () {
          return `width:${ this.back }%;height:${ this.height }px;background-color:${ this.color };`
        }
      }
    },
    props: {
      color: {
        type: String,
        default: '#297dff'
      },
      height: {
        type: [ Number, String ],
        default: '2'
      },
      show: {
        type: Boolean,
        default: false,
      },
      timer: {
        type: Number,
        default: 1000,
      },
      maximum: {
        type: Number,
        default: 80,
      },
    },
    watch: {},
    methods: {
      initAnimate () {
        this.back = 0

        if ( this.type === 'start' ) {
          clearInterval(this.inter)
          let backWidth = 1;

          this.inter = setInterval(() => {
            backWidth++
            this.back = backWidth;
            if ( this.maximum == backWidth ) {
              clearInterval(this.inter)
            }
          }, 100)
        } else if ( this.type === 'finish' ) {
          clearInterval(this.inter)
          this.back = 100
        }

      },
      remove () {
        this.show = false
        if ( this.$el ) {
          document.body.removeChild(this.$el)
          this.$destroy();
        }
      }
    },
    beforeDestroy () {
      clearInterval(this.inter)
    }
  }
</script>
<style scoped>
	.uic-loader-fixed {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
	}

	.uic-loader-back {
		width: 0;
		height: 0;
	}
</style>