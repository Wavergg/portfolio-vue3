<template>
  <div>
    <Navbar @triggerModal="triggerModal"/>
    <div class="content">
      <router-view/>
    </div>
    <Modal v-if="showModal" @closeModal="showModal = false" :content="modalData"/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'
import { ref } from '@vue/reactivity'

export default {
  components: {
    Navbar,
    Modal,
    Footer
  },
  setup() {
    const showModal = ref(false)
    const modalData = ref('')

    const triggerModal = (data) => {
      showModal.value = data.isOpen
      modalData.value = data.dataValue
    }
    
    return { triggerModal, showModal , modalData}
  },
}
</script>

<style>
  .content {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 20px;
  }
</style>
