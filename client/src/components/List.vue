<template>
  <div class="list-container">
    <div class="list-header">
      <!-- Name -->
      <h2>List Name</h2>
      <!-- Actions -->
    </div>
    <ul class="list-items">
      <template v-for="(item, index) in items">
        <ListItem :item="item" :key="index" />
      </template>
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  name: 'List',

  components: {
    ListItem,
  },

  data() {
    return {
      items: [
        {
          name: 'item 1',
          checked: false,
          children: [],
        },
        {
          name: 'item 2',
          checked: true,
          children: [],
        },
        {
          name: 'item 3',
          checked: false,
          children: [],
        },
      ],
    }
  },
}
</script>

<style lang="less">
.list-container {
  width: 250px;
  height: auto;
  margin: 15px;
  border: 1px solid black;
}

.list-header {
  display: flex;
  width: 99%;
  height: 40px;
  border:1px solid red;
  align-items: center;

  > h2 {
    margin: 0;
    padding: 0 10px;
  }
}

.list-items {
  padding: 0;
  margin: 0;
}
</style>