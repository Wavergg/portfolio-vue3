<template>
  <div class="project">
    <h1>My Projects</h1>

    <div class="projects-wrapper">
    
    <div v-for="project in projects" :key="project.id">
      <Card :project="project" @showSingle="showSingle"/>
    </div>

    <VueEasyLightbox scrollDisabled
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide" />
    </div>
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref } from '@vue/reactivity';

import Card from '../components/Card.vue'

export default {
  components: {
    VueEasyLightbox,
    Card
  },
  setup(){
    //Project Data
    const projects = [
        {
          id: 1,
          title: "Portfolio Website", 
          description: `The portfolio website that you are currently visiting is created with
            Vue JS as a Single Page Application. A popular javascript framework next
            to Angular and React JS.`,
          tags: [
            "Vue JS v3",
          ],
          thumbnailImageMobile: "/images/portfolio-project/portfolio-mobile.png",
          thumbnailImageDesktop: "/images/portfolio-project/portfolio-desktop.png",
          images: [
            { 
              title: 'Contact Modal Preview',
              src: '/images/portfolio-project/portfolio-preview-1.png'
            },
          ],
          sourceCode: "https://github.com/Wavergg/portfolio-vue3",
          demo: "",
        },
        {
          id: 2,
          title: "E-commerce Website", 
          description: `This website is created with an idea to Trying to mimic a real world application. Made with C# ASP.NET Core with Entity framework Identity Authentication. `,
          tags: [
            "C# ASP.NET Core",
            "Bootstrap CSS",
            "SQL Server"
          ],
          thumbnailImageMobile: "/images/ecommerce-project/ecommerce-homepage-mobile.png",
          thumbnailImageDesktop: "/images/ecommerce-project/ecommerce-homepage-desktop.png",
          images: [
            { 
              title: 'Home page',
              src: '/images/ecommerce-project/ecommerce-homepage-desktop.png'
            },
            { 
              title: 'Recipe page',
              src: '/images/ecommerce-project/ecommerce-recipe.png'
            },
            { 
              title: 'Product details',
              src: '/images/ecommerce-project/ecommerce-product-details.png'
            },
            { 
              title: 'Demo Gif',
              src: '/images/ecommerce-project/ecommerce-demo.gif'
            },
          ],
          sourceCode: "https://github.com/Wavergg/721SoftwareEngineering",
          demo: "",
        },
        {
          id: 3,
          title: "Meditrainsouth Website", 
          description: `This static web pages is created with materialize css and created to help the client in promoting her business.`,
          tags: [
            "Materialize CSS",
          ],
          thumbnailImageMobile: "/images/meditrainsouth-project/meditrainsouth-homepage-mobile.png",
          thumbnailImageDesktop: "/images/meditrainsouth-project/meditrainsouth-homepage-desktop.png",
          images: [
            { 
              title: 'Home page',
              src: '/images/meditrainsouth-project/meditrainsouth-homepage-desktop.png'
            },
            { 
              title: 'About us page',
              src: '/images/meditrainsouth-project/meditrainsouth-offers.png'
            },
          ],
          sourceCode: "https://github.com/Wavergg/WebsiteMeditrainSouth",
          demo: "https://meditrainsouth.co.nz/",
        },
    ]

    const imgs = ref(null);
    const visible = ref(false);

    //Emit the images array from individual card
    const showSingle = (id) => {
        const projectClicked = projects.find(project => { return project.id === id})
        imgs.value = projectClicked.images
        show()
    }

    const show = () => {
      visible.value = true
    }

    const handleHide = () => {
        visible.value = false
    }

    return {imgs, showSingle , show, visible, handleHide, projects}
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
</style>