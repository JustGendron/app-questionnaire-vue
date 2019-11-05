<template>
  <div class="Resultat">
  	<!-- <pre>{{$route.params.score}}</pre> -->
    <!-- Affichage résultat -->
    <h1>Résultat</h1>
    <p>
    <h2>Ton score est de  {{$route.params.score}}/12</h2>
    <p>

    <h1 v-if="$route.params.score < 3 ">NUL, {{$route.params.firstName}}, NUL !!</h1>
    <h1 v-if="$route.params.score >= 3 && $route.params.score < 6">T'es mauvais {{$route.params.firstName}}</h1>
    <h1 v-if="$route.params.score >= 6 ">GG WP {{$route.params.firstName}}</h1>




  </div>
</template>
<script>
  name: 'Resultat';
</script>