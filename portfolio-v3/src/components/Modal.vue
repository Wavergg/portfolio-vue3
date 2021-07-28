<template>
  <div class="backdrop" @click.self="closeModal">
      <div class="modal-container">
        <div class="modal-header">
          <span class="modal-title">{{ content }}</span>
          <button class="close" @click="closeModal">Close</button>
        </div>
        <div class="modal-content">
          <!-- Fire different Data based on modal -->
          <slot name="contact"></slot>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
  setup(props, context) {
    const closeModal = () => {
      context.emit("closeModal");
    };

    return { closeModal };
  },
};
</script>

<style>
.backdrop {
  width: 100%;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.6);
  height: 100vh;
  top: 0;
}

.modal-container {
  position: relative;
  margin: 14vh auto;
  max-width: 600px;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  padding: 12px 8px;
}

@media only screen and (max-height: 414px) {
  .modal-container {
    margin: 7vh;
  }
}

@media only screen and (min-height: 414.01px) and (max-height: 568px) {
  .modal-container {
    margin: 7vh 10vh;
  }
}

@media only screen and (min-height: 568.01px) and (max-height: 1114px) and (max-width:768px) {
  .modal-container {
    margin: 13.5vh 20px;
  }
}

.modal-header {
  width: 100%;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-header button {
  min-width: 50px;
}

.modal-content {
  padding: 12px 8px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 12px;
  scroll-behavior: smooth;
}

@media only screen and (max-width: 767.98px) {
  .modal-content {
    display: block;
  }
}


</style>