<template>
  <div class="card">
        <div class="col s12 m4">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" v-bind:src="cardInfo.url">
                <span class="card-title">{{ cardInfo.name }}</span>
                </div>
                <div class="card-content">
                <span class="card-title activator">{{ cardInfo.name }}<i class="material-icons right">more_vert</i></span>
                
                </div>
                <div class="card-reveal">
                <span class="card-title">{{ cardInfo.name }}<i class="material-icons right">close</i></span>
                <p>{{ cardInfo.info }}</p>
                <p><button @click="moreInfoClick()">{{this.anchorTagString}}</button></p>
                <div v-if="this.displayMoreInfo">
                  dsfjdslgjkdfkldfkldsfkldsjfkldsjflksdfdslkgmlksd
                </div>
                </div>
            </div>
         </div>   
      </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['cardInfo'],
  data () {
    return {
      anchorTagString:'More Info',
      displayMoreInfo: false
    }
  },
  methods: {
    moreInfoClick(event) {
      this.displayMoreInfo = !this.displayMoreInfo;

      if(this.displayMoreInfo){
        this.anchorTagString = "Less Info";
      }
      else {
        this.anchorTagString = "More Info";
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
