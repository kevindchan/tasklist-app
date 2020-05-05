<template>
  <div id="nav-wrapper">
    <div class="nav-left">
      <p>Tasklist App</p>
      <!-- TODO: Insert breadcrumb component here -->
    </div>

    <div class="nav-right">
      <button @click="logOut()" type="button">Log Out</button>
    </div>
  </div>
</template>

<script>

</script>

<style lang="less">
  #nav-wrapper {
    display: flex;
    width: 100%;
    height: auto;
    border-bottom: 1px solid black;
    background-color: lightblue;
    align-items: center;
    justify-content: space-between;
  }

  .nav-left,
  .nav-right { margin: 10px 15px; }

  .nav-left > p {
    margin: 0;
  }
</style>