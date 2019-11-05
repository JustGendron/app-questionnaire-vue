<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div class="Question">
  	<!-- <pre>{{$route.params}}</pre> -->
  	<h2>Questionnaire</h2>
  	<!-- <p>{{ form }}</p> -->
  	<div>
    <b-form-group :label="questions[i].enoncer" >    	

      <b-form-radio  v-for="reponse in questions[i].reponses" v-model="selected" name="some-radios" v-bind:value="reponse">{{reponse}}</b-form-radio>
      </b-form-radio-group>
    </b-form-group>
    

    <div class="mt-3">Réponse choisie: <strong>{{ selected }}</strong></div>
    <b-button type="submit" variant="primary" @click="onSubmit">Question Suivante</b-button>
  </div>
  <!-- <h1> Score = {{score}}</h1> -->
  <!-- <pre>{{form}}</pre> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Question',
  data() {
  	return {
  		selected :'',
  		questions : {},
  		i:0,
  		form: {
          firstName: this.$route.params.firstName,
          name: this.$route.params.name,
          society: this.$route.params.society,
  		  score:0,
        },
  	}
  },
  created: function(){
  	this.fetchData()

  },
  methods: {
	  //affichage des questions 1 par 1
  	fetchData: function(){
  		this.questions = require("../assets/questions.json");

  	// console.log(this.questions)
  	},
  	onSubmit(evt) {
		  //méthode pour le bouton question suivante, passage à la question suivante, si il y a plus de question, affichage du résultat
  			// console.log(this.questions[this.i]);
  		if ( this.selected == this.questions[this.i].correction) {
  			this.form.score++;
  		}
  		if (this.selected != '') {
  			if (this.i < 11) {
        	this.i++
    		} else {
    			this.$router.push({ name: 'resultat', params: this.form})
    		}
    	}
    	this.selected='';
        // alert(JSON.stringify(this.form))
     },
  }
}
</script>