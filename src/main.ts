import { createApp } from 'vue'
import App from './App.vue'


import { defineRule } from "vee-validate";
import { required, min, max } from "@vee-validate/rules";

defineRule('required', required);
defineRule('min', min);
defineRule('max', max);


/**
 * startsWithCapital (pocinje sa velikim slovom)
 */
defineRule('startsWithCapital', (value: string) => {

    if(value.length === 0) {
        return 'Input must not be an empty string';
    }

    // toma !== Toma
    if(value[0] !== value[0].toUpperCase()) {
        return 'String must start with a capital letter';
    }

    return true;
});


createApp(App).mount('#app')
