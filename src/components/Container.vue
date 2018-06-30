<template>
    <div class="cards">
       <div class="row"> 
           <div class="col s12 m8 offset-m2">
              <div v-for="card in cards" v-bind:key="card.id">
                  <app-card :cardInfo="card"></app-card>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'container',
  components: {
    'app-card': Card
  },
  data () {
    return {
      cards: ''
    }
  },
  created: function () {
    
      this.cards = [
        {
          id: 1,
          name: "Bitcoin",
          info: "First crypto"
        },
        {
          id: 2,
          name: "Ethereum",
          info: "Second crypto"
        }
      ];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cards {
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
</style>
