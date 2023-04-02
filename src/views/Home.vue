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
      <td ><router-link :to="'/question/' + question.id">Chase Tail &#x1F4AB;</router-link></td>
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
      question_meta: {}
    }
  },
  async created () {
    if (process.env.NODE_ENV == "production"){
      const response = await axios.get('http://43.201.97.23:10000/getQuestionMeta/')
      console.log(response.data.question_meta);
      this.question_meta = response.data.question_meta
    }else{
      const response = await axios.get('http://127.0.0.1:10000/getQuestionMeta',{headers:{"Accept":"application/json, text/plain, /","Content-Type": "multipart/form-data"}
}).catch(function(error){console.log(error.request, error.config.url)});
      console.log(response.data);
      this.question_meta = response.data.question_meta
    }
  },
};

</script>

<style>
body{
  background-color:hsl(0, 4%, 15%);
}
</style>