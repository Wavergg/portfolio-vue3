<template>
  <div class="about">
    <div class="about-self">
      <h1>About me</h1>
      <p>Born and raised in Indonesia, I am pursuing my career here in New Zealand as a software developer after graduating from Southern Institute of Technology with a bachelor degree in IT.
          I am highly adaptable and driven by learning. I am still growing as developer and would like to absorb more knowledges.
      </p>
    </div>
    <div class="stacks">
      
    </div>

    <div class="about-links">
      <a href="https://github.com/Wavergg/" target="_blank" class="github">
        <!-- <p>Github</p> -->
        
      </a>
      <a href="https://www.linkedin.com/in/william-edwin-653899200/" target="_blank" class="linkedIn">
        <!-- <p>LinkedIn</p> -->
        
      </a>
      <a href="/resumeWilliam.docx" class="resume" download>
        <!-- <p>Resume</p> -->
        
      </a>
    </div>
  </div>
</template>

<script>

export default {
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
    margin-top: 85px;
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

  .stacks {
    max-width: 720px;
    width: 720px;
  }

  
  

  .about div h1 {
    text-align: center;
  }

  /* .about-links {
  }

  .about-links-image {
    height: 32px;
  }

  .about-links div p{
    text-align: center;
  } */

  @media only screen and (max-width: 600px){
    .about {
      font-size: 14px;
    }

    .stacks {
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