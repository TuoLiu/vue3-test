<template>
  <h3>Oops! There was an error:</h3>
  <p>{{ error }}</p>
</template>

<script>
export default {
  props: ['error'],
}
</script>
