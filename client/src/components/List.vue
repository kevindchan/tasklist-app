<template>
  <div class="list-container">
    <Draggable 
      class="list-items" 
      v-model="items" 
      :group="draggableGroupOption" 
      draggable=".list-item"
    >
      <template v-slot:header>
        <div class="list-header">
          <!-- Name -->
          <h2>List Name</h2>
          <!-- Actions -->
          <button @click="addItem">Add</button>
        </div>
      </template>
      
      <template v-for="item in items">
        <ListItem class="list-item" :item="item" :key="item.id" />
      </template>
    </Draggable>
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

  created() {
    let num = Math.floor(Math.random() * 10);
    this.name = num >= 5 ? 'name 1' : 'name 2';
    this.items = num >= 5 
      ? [
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
      ]
      : [
        {
          id: 4,
          name: 'item 4',
          checked: false,
          children: [],
        },
        {
          id: 5,
          name: 'item 5',
          checked: true,
          children: [],
        },
        {
          id: 6,
          name: 'item 6',
          checked: false,
          children: [],
        },
      ]
  },

  data() {
    return {
      items: [],
      name: null,
      draggableGroupOption: { 
        name: this.name,
        pull: true,
        put: true
      },
    }
  },

  methods:{
    addItem() {
      console.log('add item')
    }
  },

  watch: {
    items(newVal, oldVal) {
      //TODO: do something when the list changes order
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
  background-color: white;
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