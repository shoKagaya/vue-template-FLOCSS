<template>
  <section class="p-award">
    <h2 class="c-sectionTitle">Award</h2>
    <ul class="p-award__list">
      <li
        v-for="(item,key,index) in awardList"
        :key="index"
        :class="{'p-award__listItem--clear':item.isClear}"
        class="p-award__listItem">
        {{ item.text }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Award',
  props: {
    awardList: {
      type: Array,
      default: () => []
    }
  }
}
</script>
