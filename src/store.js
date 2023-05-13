import { reactive } from "vue";

export const store = reactive({
    Name: '',
    Email: '',
    Phone: '',
    //creo le sezioni our in modo che se dovessero essere modificate si possa fare una volta e venga modificato in tutto il sito
    OurPhone: '+1(305)1234-5678',
    OurEmail: 'hello@example.com'
})