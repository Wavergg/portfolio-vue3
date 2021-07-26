<template>
  <div class="about-links">
      <a href="https://github.com/Wavergg/" target="_blank" class="github">
        <font-awesome-icon  :icon="['fab', 'github']" class="icon-github"/>
        <p>My Github</p>
      </a>
      <a href="https://www.linkedin.com/in/william-edwin-653899200/" target="_blank" class="linkedIn">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
        <p>My LinkedIn</p>
      </a>
      <a href="/resumeWilliam.pdf" class="resume" target="_blank">
        <font-awesome-icon :icon="['fas', 'file-pdf']" />
        <p>My Resume</p>
      </a>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .about-links {
        display: flex;
        justify-content: space-between;
        max-width: 720px;
        width: 720px;
  }

  .about-links a {
    display: flex;
    align-items: center;
  }

  .about-links a:hover > * {
    text-decoration: underline;
    color: cadetblue;
  }

  @media only screen and (max-width: 768px){
    .about-links {
      display: block;
      width: auto;
    }
  }
</style>