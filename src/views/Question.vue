<template>
    <br>
    <splitpanes class="default-theme" split="vertical">
        <pane>
            <span>
              <div class="card text-bg-dark mb-3" style="height: 100%">
                <div class="overflow-auto">
                  <div class="card-header"><h2>{{ question_info.title }}</h2></div>
                  <div class="card-body">
                    <p class="card-text">{{ question_info.question_content }}</p>
                    <!-- Testcase Here -->
                    <br>
                    <h6> Testcase 1: </h6>
                    <div> &nbsp;&nbsp;Case: {{ question_info.question_example_one_test }} </div>
                    <div> &nbsp;&nbsp;answer: {{ question_info.question_example_one_answer }} </div>
                    <br>
                    <h6> Testcase 2: </h6>
                    <div> &nbsp;&nbsp;Case: {{ question_info.question_example_two_test }} </div>
                    <div> &nbsp;&nbsp;nswer: {{ question_info.question_example_two_answer }} </div>
                  </div>
                </div>
              </div>
            </span>
        </pane>
        <pane>
            <splitpanes horizontal>
                <pane>
                  <div class="inline">Current Language: 
                    <select v-model="language">
                      <option value="Python">Python</option>
                      <option value="C++">C++</option>
                      <option value="Java">Java</option>
                    </select> 
                  </div>
                  <codemirror
                      v-model="code"
                      placeholder="Code goes here..."
                      :style="{ height: '100%' }"
                      :autofocus="true"
                      :indent-with-tab="true"
                      :tab-size="4"
                      :extensions="extensions"
                      @ready="handleReady"
                      @change="log('change', $event)"
                      @focus="log('focus', $event)"
                      @blur="log('blur', $event)"
                  />
                </pane>
                <pane size=30 id="bottom_left_plane">
                  <!--RIGHT BOTTOM CARD-->
                  <!--init color-->
                  <div v-if="this.testResult == 1">
                    <div class="card text-bg-secondary mb-3" style="height: 78%">
                      <div class="overflow-auto">
                        <div class="card-header">Terminal Output</div>
                        <div class="card-body">
                          <p class="card-text"> {{serverLog}} </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-else-if="this.testResult == 2">
                    <div class="card text-bg-danger mb-3" style="height: 70%">
                      <div class="overflow-auto">
                        <div class="card-header">Terminal Output</div>
                        <div class="card-body">
                          <p class="card-text"> {{serverLog}} </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-else>
                    <div class="card text-bg-success mb-3" style="height: 78%">
                      <div class="overflow-auto">
                        <div class="card-header">Terminal Output</div>
                        <div class="card-body">
                          <p class="card-text"> {{serverLog}} </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!--RIGHT BOTTOM BUTTON-->
                  <form v-on:submit.prevent="onSubmit">
                        <button id="submit_buttom" class="btn btn-outline-success" style="height: 20%">Submit Code</button>
                  </form>
                </pane>
            </splitpanes>
        </pane>
    </splitpanes>
    <div>
      {{ question_info }}
    </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import { defineComponent, ref, shallowRef } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { python } from '@codemirror/lang-python'
import { oneDark } from '@codemirror/theme-one-dark'
import 'splitpanes/dist/splitpanes.css'
import axios from 'axios'


export default defineComponent({
    components: {
        Codemirror,
        Splitpanes,
        Pane
    },
    compatConfig: { MODE: 3 },
    data(){
        return{
            selected: '',
            language: 'Python',
            question_info: {},
            serverLog:"",
            testResult: 1
        }
    },
    setup() {
      const code = ref(`class Solution:\n    def submitSolution() -> str:\n        `)
      const extensions = [python(), oneDark]

      // Codemirror EditorView instance ref
      const view = shallowRef()
      const handleReady = (payload) => {
        view.value = payload.view
      }

      // Status is available at all times via Codemirror EditorView    
      return {
        code,
        extensions,
        handleReady,
        log: console.log,
      }
    },
    async beforeMount () {
      await axios.get('/questionServer/getQuestionInfo/'+this.$route.params.questionId)
                 .then(response => (this.question_info = response.data));
      this.code = this.question_info.question_scaffold
    },
    methods: {
      async onSubmit() {
        const response = await axios.post('/fast/'+this.language+'/1', { 
                                                        code: this.code});
        this.serverLog = response.data.msg;
        this.testResult = (response.data.passed ? 3 : 2);
        alert("입력한 값은 " + this.code + this.language + " 입니다.");
        console.log(response);
        alert(response.data+"/n"+this.$route.params.questionId);
      }
    }
  })

</script>

<style>
html, body, #app {height: 96%; margin: 0;}


h1 {
  margin: 0;
    display: inline-block;
}
.submit{
  position: absolute;
  right:    0;
  bottom:   0;
}
#bottom_left_plane {
    position: relative;
}
#submit_buttom {
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>
