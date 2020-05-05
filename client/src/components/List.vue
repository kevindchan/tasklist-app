<template>
  <div class="list-container">
    <div class="list-header">
      <!-- Name -->
      <h2>List Name</h2>
      <!-- Actions -->
    </div>
    <ul class="list-items">
      <Draggable v-model="items">
        <template v-for="(item, index) in items">
          <ListItem :item="item" :key="item.id" />
        </template>
      </Draggable>
    </ul>
  </div>
</template>

<script>
import Draggable from 'vuedraggable';
import ListItem from './ListItem.vue';

export default {
  name: 'List',

  components: {
    ListItem,
    Draggable,
  },

  data() {
    return {
      items: [
        {
          id: 1,
          name: 'item 1',
          checked: false,
          children: [],
        },
        {
          id: 2,
          name: 'item 2',
          checked: true,
          children: [],
        },
        {
          id: 3,
          name: 'item 3',
          checked: false,
          children: [],
        },
      ],
    }
  },

  watch: {
    items(newVal, oldVal) {
      alert('something changed')
    }
  }
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