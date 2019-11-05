<template>
  <div class="home">
    <div>
  	<h1><span class="rouge">App </span> <span class="orange">Qu</span><span class="jaune">es</span><span class="vert">ti</span><span class="bleu">on</span><span class="indigo">na</span><span class="violet">ire</span></h1>
  		
      <!-- Formulaire de Login  -->
  <b-form @submit="onSubmit" v-if="show">
	<div class="wrapper">
	  		<div class="box a">Veuillez saisir votre prénom, votre nom et le nom de votre société</div>
        <!-- Case pour le prénom -->
	  		<div class="box b">
	  			<b-form-group
        id="input-group-1"
        label="Prénom:"
        label-for="input-1" class="cellule">
        <b-form-input class="cellule"
          id="input-1"
          v-model="form.jg_first_name"
          required
          placeholder="Entrer votre prénom"
        ></b-form-input>
      </b-form-group>
  </div>
  <!-- Case pour le nom -->
	  		<div class="box c">
	  			<b-form-group id="input-group-2" label="Nom:" label-for="input-2" class="cellule">
        <b-form-input
          id="input-2"
          v-model="form.jg_name"
          required
          placeholder="Entrer votre nom"
        ></b-form-input>
      </b-form-group>
  </div>
  <!-- Case pour le nom de la société -->
	  		<div class="box d">
	  			<b-form-group id="input-group-3" label="Nom Société:" label-for="input-3" class="cellule">
        <b-form-input 
          id="input-3"
          v-model="form.society"
          required
          placeholder="Entrer le nom de votre société">          	
          </b-form-input>
      </b-form-group>
  </div>
		</div>
    <!-- Le bouton submit -->
              <b-button type="submit" variant="primary">Commencer</b-button>

  </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  jg_name: 'home',
  components: {
  },
  data() {
      return {
        form: {
          jg_first_name: '',
          jg_name: '',
          jg_society: '',
        },
        show: true
      }
    },
    //methode du bouton submit, passage vers le questionnaire
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.$router.push({name: 'questionnaire', params: this.form})
      
      }
    }
}
</script>

<style>

/* Style css */

		.wrapper {
		  display: grid;
		  grid-template-columns: 1fr 1fr 1fr;
		  grid-template-rows: 1fr 2fr;
		  grid-gap: 5px;
		  background-color: #fff;
		  color: #444;
		  margin: 5px;
		}

		.cellule {
			width: 85%;
			margin:auto;
		}

		.box {
		  background-color: #f4f7;
		  color: #000;
		  border-radius: 5px;
		  /*padding: 20px;*/
		  font-size: 150%;
		}

		.a {
			background-color: hsl(118, 65%, 42%);
	        grid-column-start: 1;
	        grid-column-end: 4;
	        grid-row-start: 1;
	        grid-row-end: 2;
	    }

		.b {
	        grid-column-start: 1;
	        grid-column-end: 2;
	        grid-row-start: 2;
	        grid-row-end: 2;
	    }

		.c {
	        grid-column-start: 2;
	        grid-column-end: 3;
	        grid-row-start: 2;
	        grid-row-end: 2;
	    }

		.d {
	        grid-column-start: 3;
	        grid-column-end: 4;
	        grid-row-start: 2;
	        grid-row-end: 2;
	    }

    /* la c'est le rouge */

    .rouge{
      color: rgb(230, 0, 0);
    }
        /* la c'est le orange */

    .orange{
      color: rgb(255, 136, 0);
    }
        /* la c'est le jaune */

    .jaune{
      color: #fffb00;
    }
        /* la c'est le vert */

    .vert{
      color: rgb(21, 255, 0);
    }
        /* la c'est le bleu */

    .bleu{
      color: rgb(0, 81, 255);
    }
        /* la c'est le indigo */

    .indigo{
      color: rgb(98, 0, 255);
    }
        /* la c'est le violet */

    .violet{
      color: rgb(255, 0, 221);
    }
</style>

