<template>
  <div class="home">
    <div class="profile">
      <h1>Hi, William Here!</h1>
      <p>I am a software developer with a bachelor degree in IT. I am interested in Web development, desktop application development and cloud related subject.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
  .profile {
    height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .profile p {
    font-size: 18px;
    margin: 8px 4px;
    max-width: 720px;
    letter-spacing: 0.1em;
    text-align: center;
  }
</style>