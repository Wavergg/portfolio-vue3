<template>
  <div class="toast-wrapper">
      <div class="toast" :class="{ 'error': !isSuccess }">
            <span v-if="isSuccess">
                Successfully sending an email
            </span>
            <span v-else>
                Ops... Failure in sending message
            </span>
      </div>
  </div>
</template>

<script>
export default {
    props: ['isSuccess'],
}
</script>

<style>
    .toast-wrapper {
        position: fixed;
        top: 50px;
        width: 100%;
    }

    /* ERROR COLOR: rgb(234,144,144) */
    /* SUCCESS COLOR: rgb(199,234,199) */

    .toast {
        padding: 8px 8px;
        margin: 0 auto;
        max-width: 250px;
        border-radius: 12px;
        background: rgb(199,234,199);
        text-align: center;
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.1em;
        box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
    }

    .error {
        background-color: rgb(234,144,144);
    }
</style>