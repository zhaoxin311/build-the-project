<template>
  <div>
    <Sidebar>侧边栏</Sidebar>
    <div>
      <Navbar></Navbar>
      <Appmain></Appmain>
    </div>
  </div>
</template>
<script>
import { Sidebar, Navbar, Appmain } from "./components";

export default {
  name: "Layout",
  components: { Sidebar, Navbar, Appmain },
};
</script>
