<template>
  <div class="about">
    <div class="about-self">
      <h1>About me</h1>
      <p>Born and raised in Indonesia, I am pursuing my career here in New Zealand as a software developer after graduating from Southern Institute of Technology with a bachelor degree in IT.
          I am highly adaptable and driven by learning. I am still growing as developer and would like to absorb more knowledges.
      </p>
    </div>
    <!-- Links to External Pages -->
    <AboutLinks/>
    <div class="technologies">
      <h1>Technologies that I've worked with</h1>
      <div class="technologies-container">
        <div class="languages" >
          <div class="stacks" >
            <div class="stack-item">
              <span>C#</span>
            </div>
            <div class="stack-item">
              <span>HTML5</span>
            </div>
            <div class="stack-item">
              <span>CSS</span> 
            </div>
            <div class="stack-item">
              JavaScript
            </div>
            <div class="stack-item">
              SQL
            </div>
            <div class="stack-item">
              PHP
            </div>
          </div>
        </div>
        <div class="framework" >
          <div class="stacks" style="direction: rtl;">
            <div class="stack-item">
              Net Core
            </div>
            <div class="stack-item">
              Bootstrap
            </div>
            <div class="stack-item">
              Materialize CSS
            </div>
            <div class="stack-item">
              Vue JS
            </div>
            <div class="stack-item">
              CodeIgniter
            </div>
            <div class="stack-item">
              Firebase
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutLinks from '../components/AboutLinks.vue'

export default {
  components: { AboutLinks },
  setup(){
  }
}
</script>

<style>
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding-top: 85px;
  }

  .about p{
    font-size: 18px;
    margin: 8px 4px;
    max-width: 720px;
    letter-spacing: 0.1em;
    line-height: 1.7em;
    font-weight: 400;
    text-align: justify;
  }

  .technologies {
    max-width: 720px;
    width: 720px;
    margin-top: 15px;
  }

  .technologies-container {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr;
    margin-top: 25px;
  }

  .technologies-container div{
    text-align: center;
  }

  .about div h1 {
    text-align: center;
  }

  .stacks {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 4px;
    position: relative;
  }

  .stack-img {
    width: calc(100% - 20px);
  }

  .stack-item{
    width: 72px;
    height: 72px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }

  @media only screen and (max-width: 600px){
    .about {
      font-size: 14px;
    }

    .technologies {
      width: auto;
    }

    .about p{
      font-size: 14px;
      margin: 8px 4px;
      max-width: 720px;
      letter-spacing: 0.1em;
      line-height: 1.7em;
      font-weight: 400;
      text-align: left;
    }
  }

</style>