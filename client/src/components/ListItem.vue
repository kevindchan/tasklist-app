<template>
  <div class="item-container">
    <div class="item-header">
      <div class="item-title">
        <input class="item-checkbox" type="checkbox" :checked="item.checked" />
        <p>{{item.name}}</p>
      </div>
      <div class="item-actions">
        ...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {

    }
  },
}
</script>

<style lang="less">
.item-container {
  width: 99%;
  height: 30px;
  border: 1px solid blue;
}

.item-header {
  display: flex;
  align-items: center;
  align-content: space-between;
}

.item-title {
  > * {
    display: inline-block;
  }

  .item-checkbox {
    margin: 8px;
  }

  > p {
    margin: 0;
  }
}


</style>