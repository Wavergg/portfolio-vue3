<template>
  <div class="container" @submit.prevent="sendMessage">
        <form autocomplete="off">
          <label for="sender-name">Name</label>
          <input v-model="senderName" autocomplete="new-password" id="sender-name" placeholder="Your Name" type="text">
          <label for="sender-email">Email</label>
          <input v-model="senderEmail" autocomplete="new-password" id="sender-email" placeholder="Your Email" type="email">
          <label for="Message">Message</label>
          <textarea v-model="senderMessage" id="Message" placeholder="Message"></textarea>
          
          <div style="display:flex; align-items:center;">
              <button class="button-send">Send Message </button>
              <Spinner v-if="isSending"/>
          </div>
        </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import Spinner from './Spinner.vue'
import { ref } from '@vue/reactivity';

export default {
    components: {
        Spinner
    },
    setup(props,context){
        const senderName = ref('')
        const senderEmail = ref('')
        const senderMessage = ref('')
        const isSending = ref(false)
        
        //NYD: turn this into composable later.
        const sendMessage = () => {
            isSending.value = true
            // console.log('senderName: '+ senderName.value + '|senderEmail: '+ senderEmail.value + '|senderMessage: ' + senderMessage.value)
            var templateParams = {
                to_name: 'William',
                from_name: senderName.value,
                from_email: senderEmail.value,
                message: senderMessage.value,
            };
            
            emailjs.send('service_44k4qhd', 'template_ulhvcdq', templateParams, 'user_c5BRo5sfnmrsfwh9SlIyX')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                context.emit('triggerToast', { isSuccess: true })
                isSending.value = false
                senderName.value = ''
                senderEmail.value = ''
                senderMessage.value = ''
            }, function(error) {
                console.log('FAILED...', error);
                context.emit('triggerToast', { isSuccess: false })
                isSending.value = false
            });
        }

        return { sendMessage, senderName,senderEmail,senderMessage , isSending}
    }
}
</script>

<style>

    .container {
        width:100%;
        overflow-y: auto;
    }

    @media only screen and (max-height: 414px){
        .container {
            height: 40vh;
        }
    }

    @media only screen and (min-height: 414.01px) and (max-height: 568px) {
        .container {
            height: 50vh;
        }
    }

    label {
        display: inline-block;
        font-size: 0.6em;
    }

    input,textarea{
        display:block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
        margin-bottom: 10px;
    }

    input:focus, textarea:focus {
        outline: none;
    }

    .button-send {
        border: 1px solid #eee;
    }

    .button-send:hover {
        border: 1px solid #eee;
    }
</style>