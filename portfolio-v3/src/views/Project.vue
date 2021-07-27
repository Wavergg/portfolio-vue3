<template>
  <div class="project">
    <h1>My Projects</h1>

    <div class="projects-wrapper">
      <div class="card">
        <div class="project-details">
          <h3 class="project-title">Portfolio Website</h3>
          <p>The portfolio website that you are currently at is created with Vue 3 as a Single Page Application.
              A popular javascript framework next to Angular and React JS.</p>
          <div class="badges">
            <div class="badge">
              Vue JS
            </div>
          </div>
        </div>
        <div class="project-image">
          <img src="@/assets/images/portfolio-mobile.png" alt="portfolio-mobile" class="img-mobile"/>
          <img src="@/assets/images/portfolio-desktop.png" alt="portfolio-desktop" class="img-desktop"/>
        </div>
        <div class="project-links">
          <a href="https://github.com/Wavergg/portfolio-vue3" class="btn">
            Source Code
          </a>
          <a href="#" class="btn">
            External link
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(){

  }
};
</script>

<style>
.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-top: 85px;
  height: 100%;
}

.projects-wrapper {
  margin-top: 18px;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 12px;
  width: 100%;
}

.card {
  box-shadow: 0px 0px 9px #eee;
  min-height: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 24px;
  column-gap: 12px;
}

@media only screen and (max-width: 667px) {
  .card {
    display: flex;
    flex-direction: column;
  }

  .project-image {
    order: 1;
    border-bottom: 1px solid #eee;
  }

  .project-details {
    order: 2;
    margin-top: 12px;
    text-align: justify;
  }

  .img-mobile {
    display: block;
  }

  .img-desktop {
    display: none;
  }

  .project-links {
    margin-top: 24px;
    flex-direction: column;
  }
}

@media only screen and (min-width: 667px){
  .img-mobile {
    display: none;
  }

  .img-desktop {
    display: block;
  }
}

.project-details {
  width: 100%; 
  position: relative;
  text-align: center;
}

.project-details p {
  text-align: start;
  font-size:14px;
  margin-top:12px;
}

.project-image {
  grid-row: 1 / 2 span;
  grid-column: 2;
}

.project-image img {
  width: 100%;
}

.project-links {
  order:3;
  display:flex;
  gap: 12px;
  justify-content: space-around;
}

.badges {
    display:flex;
    margin-top:12px;
    gap:4px;
}
</style>