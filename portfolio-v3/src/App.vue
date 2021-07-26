<template>
  <div>
    <Navbar @triggerModal="triggerModal"/>
    
    <div class="content">
      <router-view/>
    </div>
    <Modal v-if="showModal" @closeModal="showModal = false" :content="modalData">
      <template v-slot:contact>
        <ContactDetails/>
        <ContactForm @triggerToast="triggerToast"/>
      </template>
    </Modal>
    <transition name="toast">
      <Toast v-if="showToast" :isSuccess="toastData"/>
    </transition>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'
import Toast from './components/Toast.vue'
import ContactForm from './components/ContactForm.vue'
import ContactDetails from './components/ContactDetails.vue'
import { ref } from '@vue/reactivity'

export default {
  components: {
    Navbar,
    Modal,
    Toast,
    Footer,
    ContactForm,
    ContactDetails
  },
  setup() {
    const showModal = ref(false)
    const showToast = ref(false)
    const modalData = ref('')
    const toastData = ref(null)

    const triggerModal = (data) => {
      showModal.value = data.isOpen
      modalData.value = data.dataValue
    }

    const triggerToast = (data) => {
      toastData.value = data.isSuccess
      showToast.value = true
      setTimeout(() => {
        showToast.value = false
      }, 5000);
    }
    
    return { triggerModal, triggerToast, showToast, showModal , modalData, toastData}
  },
}
</script>

<style>
  .content {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 20px;
  }

  /* Transition enter for toast */
  .toast-enter-from {
    opacity: 0;
    transform: translateY(-90px)
  }
  .toast-enter-to {
    opacity: 1;
    transform: translate(0);
  }
  .toast-enter-active {
    transition: all 0.4s ease-in;
  }
  /* Transition leave for toast */
  .toast-leave-from {
    opacity: 1;
    transform: translate(0);
  }
  .toast-leave-to {
    opacity: 0;
    transform: translateY(-90px)
  }
  .toast-leave-active {
    transition: all 0.4s ease-in;
  }
</style>
