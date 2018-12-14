<template>
  <div class="l-wrapper">
    <award :award-list="awardList" />
  </div>
</template>

<script>
import script from '../scripts/bingo'

export default {
  mixins: [script]
}
</script>
