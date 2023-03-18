<template>
    <br>
    <splitpanes class="default-theme" split="vertical">
        <pane>
            <span>
              <div class="card text-bg-dark mb-3" style="height: 100%">
                <div class="overflow-auto">
                  <div class="card-header"><h3>Question Name</h3></div>
                  <div class="card-body">
                    <p class="card-text">Some quicd title and make uptitle and make uptitle and make uptitle and make uptitle and make uptitle and make uptitle and make uptitle and make uptitle and make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick example text to build on the card title and make up tome quick example text to build on the card title and make up tome quick example text to build on the card title and make up tome quick example text to build on the card title and make up tome quick example text to build on the card title and make up tome quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                  <div class="card text-bg-secondary mb-3" style="height: 80%">
                    <div class="overflow-auto">
                      <div class="card-header">Header</div>
                      <div class="card-body">
                        <p class="card-text">Some quicd title and make uptitle and make uptitle and make uptitle and make uptitle and make uptitle and make uptitle and make uptitle and make uptitle and make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick make up tome quick example text to build on the card title and make up tome quick example text to build on the card title and make up tome quick example text to build on the card title and make up tome quick example text to build on the card title and make up tome quick example text to build on the card title and make up tome quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                  </div>
                  </div>
                  <!--RIGHT BOTTOM BUTTON-->
                  <div id="submit_buttom" type="button" class="btn btn-outline-success" style="height: 20%">
                    <form v-on:submit.prevent="onSubmit">
                          <button >Submit Code</button>
                    </form>
                  </div>
                </pane>
            </splitpanes>
        </pane>
    </splitpanes>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import { defineComponent, ref, shallowRef } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { python } from '@codemirror/lang-python'
import { oneDark } from '@codemirror/theme-one-dark'
import 'splitpanes/dist/splitpanes.css'


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
            language: 'Python'
        }
    },
    setup() {
      const code = ref(`console.log('Hello, world!')`)
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
    methods: {
      onSubmit() {
        alert("입력한 값은 " + this.code + this.language + " 입니다.");
      }
    }
  })

</script>

<style>

html, body, #app {height: 95%; margin: 0;}

#main {
  width: 200px;
  border: 1px dotted black;
}
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
