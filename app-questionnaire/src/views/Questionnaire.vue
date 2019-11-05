<template>
  <div class="Questionnaire">
  <Question/>
  </div>
</template>

<script>

import Question from '@/components/Question.vue'
//Affichage questionnaire, question par question
export default {
  name: 'Questionnaire',
  components: {
	Question
  }
}
</script>
