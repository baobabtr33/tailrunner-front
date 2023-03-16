<template>
    <br>
    <splitpanes class="default-theme" split="vertical">
        <pane>
            <span>1</span>
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
                <pane size = 30 id="bottom_left_plane">
                  <div id="submit_buttom">
                    <form v-on:submit.prevent="onSubmit">
                          <button>Submit Code</button>
                    </form>
                    <button type="button" class="btn btn-success">Success</button>

                  </div>
                </pane>
            </splitpanes>
        </pane>
    </splitpanes>
   <button type="button" class="btn btn-warning">Warning</button>

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
