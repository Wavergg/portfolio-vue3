<template>
  <div>
    <Navbar @triggerModal="triggerModal" @loadContent="showContent = true"/>
      <div class="content">
        <router-view v-slot="{Component}">
          <transition v-if="showContent" name="content" appear mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    
    <transition appear name="modal">
      <Modal v-if="showModal" @closeModal="showModal = false" :content="modalData">
        <template v-slot:contact>
          <ContactDetails/>
          <ContactForm @triggerToast="triggerToast"/>
        </template>
      </Modal>
    </transition>
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
    const showContent = ref(false)
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
    
    return { triggerModal, triggerToast, showToast, showModal, showContent, modalData, toastData}
  },
}
</script>

<style>
  .content {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 20px 20px;
  }

  /* Transition for toast */
  .toast-enter-from,
  .toast-leave-to {
    opacity: 0;
    transform: translateY(-90px)
  }
  .toast-enter-to,
  .toast-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  .toast-enter-active,
  .toast-leave-active {
    transition: all 0.4s ease-in;
  }

  /* Transition for Content */
  .content-enter-from,
  .content-leave-to,
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
    transform: translateX(-90px)
  }
  .content-enter-to,
  .content-leave-from,
  .modal-enter-to,
  .modal-leave-from {
    opacity: 1;
    transform: translateX(0);
  }
  .content-enter-active,
  .content-leave-active,
  .modal-enter-active,
  .modal-leave-active {
    transition: all 0.4s ease-in;
  }
</style>
