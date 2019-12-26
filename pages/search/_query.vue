<template>

 <div style="margin-top: 20px;">
    <div class="container">
        <p>sdsdsd</p> 
    </div>
  </div>

</template>

<script>


export default {
  data(){
    return{
    query_string: this.$route.params,
  }
  },
  methods: {




  },
  mounted(){

      console.log("sssssssssssss")
      console.log(this.$route.path)
      console.log(this.$route.fullPath.replace(this.$route.path + "?", ""))
      console.log(this.$route.fullPath)

  }
}

</script>
