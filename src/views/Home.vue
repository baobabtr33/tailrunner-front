<template>
<table class="table table-dark table-borderless">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">질문</th>
      <th scope="col">문제유형</th>
      <th scope="col">Link</th>
    </tr>
  </thead>
  <tbody v-for="question in question_meta" :key="question.id">
    <tr>
      <th scope="row"> {{ question.id }} </th>
      <td>{{ question.title }}</td>
      <td>{{ question.question_tag }}</td>
      <td ><router-link :to="'/question/' + question.id">Chase Tail</router-link></td>
    </tr>
  </tbody>
</table>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      items: [{ message: 'Foo' }, { message: 'Bar' }],
      question_meta: {}
    }
  },
  async created () {
      const response = await axios.get('/questionServer/getQuestionMeta')
      console.log(response.data.question_meta);
      this.question_meta = response.data.question_meta
  },
};

</script>