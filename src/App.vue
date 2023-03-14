<template>    
    <splitpanes class="default-theme" split="vertical">
        <pane>
            <span>1</span>
        </pane>
        <pane>
            <splitpanes horizontal>
                <pane>
                    <select v-model="language"> 
                      <option :value="Python"> Python </option>
                      <option :value="C++"> C++ </option>
                      <option :value="Java"> Java </option>
                    </select>
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
                <pane size = 30>3</pane>
            </splitpanes>
        </pane>
    </splitpanes>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import { defineComponent, ref, shallowRef } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { python } from '@codemirror/lang-python'
import { oneDark } from '@codemirror/theme-one-dark'


export default defineComponent({
    components: {
        Codemirror,
        Splitpanes,
        Pane
    },
    data(){
        return{
            selected: '',
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
        log: console.log
      }
    }
  })

</script>

<style>

html, body, #app {height: 95%; margin: 0;}

</style>
