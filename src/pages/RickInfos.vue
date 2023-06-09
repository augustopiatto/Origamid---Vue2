<template>
  <div>
    <p>{{ rickInfos }}</p>
  </div>
</template>

<script lang="js">
export default {
  name: "RickInfos",
  props: {
    rickInfos: {
      required: true,
      type: String
    }
  }
}
</script>
