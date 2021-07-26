<template>
  <div class="container">
        <form autocomplete="off">
          <label for="sender-name">Name</label>
          <input autocomplete="new-password" id="sender-name" placeholder="Your Name" type="text">
          <label for="sender-email">Email</label>
          <input autocomplete="new-password" id="sender-email" placeholder="Your Email" type="email">
          <label for="Message">Message</label>
          <textarea id="Message" placeholder="Message"></textarea>
          <button class="button-send">Send Message</button>
        </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

    .container {
        width:100%;
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