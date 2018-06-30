<template>
  <div class="jokes">
       <header>
      <span>Handling Ajax Request with Axios in Vue</span>
    </header>
    <main>
        <h2>Click the button to get Random jokes</h2>
        <button id="btn" class="" v-on:click="getJokes">Get Jokes</button>

        <div v-if="loading">
          Loading.....
        </div>

      <div v-for="joke in jokes">
        {{joke.joke}}
        </div>
      <div class="wrapper">
        ... 
      </div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios';
  
export default {
  name: 'Jokes',
  data () {
    return {
      jokes: [],
      loading: false
    }
  }, 
  methods: {
    getJokes: function () {
      this.loading = true;
      axios.get("http://api.icndb.com/jokes/random/10")
      .then((response)  =>  {
        this.loading = false;
        this.jokes = response.data.value;
      }, (error)  =>  {
        this.loading = false;
      })
    }
  },
}
</script>

<style>
  /* Your CSS goes here */
</style>