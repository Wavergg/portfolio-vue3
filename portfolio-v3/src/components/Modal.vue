<template>
  <div class="backdrop" @click.self="closeModal">
      <div class="modal-container">
        <div class="modal-header">
          <span class="modal-title">{{content}}</span>
          <button class="close" @click="closeModal">Close</button>
        </div>
        <div class="modal-content">
          <!-- Fire different Data based on modal -->
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['content'],
  setup(props,context){
    
    const closeModal = () => {
      context.emit('closeModal')
    }

    return { closeModal }
  }
}
</script>

<style>
  .backdrop {
    width: 100%;
    position: fixed;
    background-color: rgba(255,255,255,0.6);
    height: 100vh;
    top:0;
  }

  .modal-container {
    position: relative;
    margin: 20vh auto;
    max-width: 600px;
    height:300px;
    background: #fff;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.4);
    border-radius: 12px;
    padding: 12px 8px;
  }

  @media only screen and (max-width: 640px){
    .modal-container {
      margin: 20vh 20px;
    }
  }

  .modal-header {
    width: 100%;
    border-bottom: 1px solid #eee;
    padding-bottom: 8px;
    display:flex;
    align-items: center;
    justify-content: space-between;
  }

  .modal-header button{
    min-width: 50px;
  }

  .modal-content {
    padding: 12px 8px;
    display: flex;
  }
</style>