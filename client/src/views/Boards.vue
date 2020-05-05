<template>
  <div class="boards-container">
    Boards
    <ul>

    </ul>
  </div>
</template>

<script>

export default {
  name: 'Boards',

  created() {
    //fetch boards for current user with uuid and axios
    console.log('router: ', this.$router.options.routes)
  },

  props: {
    //how does the board receive it's data?
    //maybe it receives a uuid and makes a call to fetch boards?
  },

  data() {
    return {

    }
  }
}
</script>

<style lang="less">
.boards-container {
  margin: 15px;
}
</style>