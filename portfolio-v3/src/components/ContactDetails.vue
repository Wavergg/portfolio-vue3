<template>
  <div class="contact-details">
    <!-- Image? -->
    <!-- <div class="img-placeholder"> </div> -->
    <div class="contact-item">
      <a href="tel:+64276245998">
        <font-awesome-icon :icon="['fas', 'phone']" size="sm" />
        <span>+64 276 245 998</span>
      </a>
    </div>
    <div class="contact-item">
      <a href="mailto:waverdt@gmail.com">
        <font-awesome-icon :icon="['fas', 'at']" size="sm" />
        <span>waverdt@gmail.com</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
    .contact-details {
      display: flex;
      justify-content: center;
      gap: 12px;
      align-items: center;
      flex-direction: column;
    }

    /* I will reconsider placing my pic */
    .img-placeholder {
        background-color: grey;
        width: 72px;
        height: 72px;
        align-self: center;
        border-radius: 50%;
    }

    .contact-item {
        display:flex
    }

    .contact-item a:hover {
        text-decoration: underline;
        color: cadetblue;
    }

    .contact-item a span {
        margin-left:12px;
    }

    @media only screen and (max-width: 767.98px){
        .contact-details {
            display: none;
        }
    }
</style>