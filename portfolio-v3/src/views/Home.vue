<template>
  <div class="home">
    <div class="profile">
      <h1>Hi, William Here!</h1>
      <p>I am a software developer with a bachelor degree in IT.
          <span class="interest">I am interested in Web Development, Desktop Application Development and Cloud related subjects.</span>
      </p>
      <AboutLinks style="margin-top:10px"/>
    </div>
  </div>
</template>

<script>
import AboutLinks from '../components/AboutLinks'

export default {
  name: 'Home',
  components: {
    AboutLinks
  }
}
</script>

<style>
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding-top: 85px;
  }

  .profile p{
    font-size: 18px;
    margin: 8px 4px;
    max-width: 720px;
    letter-spacing: 0.1em;
    line-height: 1.7em;
    font-weight: 400;
    text-align: center;
  }

  /* .profile {
    height: 405px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } */

  @media only screen and (max-width: 600px){
    .interest {
      display:none;
    }

  }

  
</style>