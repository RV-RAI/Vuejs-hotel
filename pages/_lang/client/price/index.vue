<template>
  <h1>Index</h1>
</template>

<script>

  export default {
    layout: 'client',
    async asyncData({redirect}) {
      redirect('/')
    }
  }

</script>
