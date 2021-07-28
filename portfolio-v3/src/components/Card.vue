<template>
  <div class="card">
    <div class="project-details">
      <h3 class="project-title">{{ singleProject.title }}</h3>
      <p>
        {{ singleProject.description }}
      </p>
      <div class="badges">
        <div class="badge" v-for="tag in singleProject.tags" :key="tag">
          {{ tag }}
        </div>
      </div>
    </div>
    <div class="project-image" style="position: relative">
            <img
                @click="showSingle"
                :src="singleProject.thumbnailImageMobile"
                alt="portfolio-mobile"
                class="img-mobile"
            />
        <div @mouseenter="showImageOverlay = true" @mouseleave="showImageOverlay = false">
            <img
                :src="singleProject.thumbnailImageDesktop"
                alt="portfolio-desktop"
                class="img-desktop"
            />
            <transition name="image-overlay" mode="out-in">
                <div v-if="showImageOverlay" class="card-image-overlay" @click="showSingle">
                    <div style="color: white">See Images</div>
                </div>
            </transition>
        </div>
    </div>
    <div class="project-links">
      <a
        v-if="singleProject.sourceCode"
        :href="singleProject.sourceCode"
        target="_blank"
        class="btn"
      >
        Source Code
      </a>
      <a
        v-if="singleProject.demo"
        :href="singleProject.demo"
        target="_blank"
        class="btn"
      >
        Demo
      </a>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  props: ["project"],
  setup(props, content) {
    const singleProject = props.project;
    const showImageOverlay = ref(false)

    const showSingle = () => {
      content.emit("showSingle", singleProject.id);
    };

    
    return { singleProject, showSingle , showImageOverlay};
  },
};
</script>

<style>
.card {
  box-shadow: 0px 0px 9px #eee;
  min-height: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 24px;
  column-gap: 12px;
}

.card .btn {
  text-align: center;
}

.badges {
  display: flex;
  margin-top: 12px;
  flex-wrap: wrap;
  gap: 4px;
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

@media only screen and (min-width: 667px) {
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
  font-size: 14px;
  margin-top: 12px;
}

.project-image {
  grid-row: 1 / 2 span;
  grid-column: 2;
}

.project-image:hover {
  cursor: pointer;
}

.project-image img {
  width: 100%;
}

.project-links {
  order: 3;
  display: flex;
  gap: 12px;
  justify-content: space-around;
}

.card-image-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
}

/* Transition Enter for Image Overlay */
.image-overlay-enter-from {
    opacity: 0;
}

.image-overlay-enter-to {
    opacity: 1;
}

.image-overlay-enter-active {
    transition: all 0.3s ease-in;
}

/* Transition Leave for Image Overlay*/
.image-overlay-leave-from {
    opacity: 1;
    
}

.image-overlay-leave-to {
    opacity: 0;
}

.image-overlay-leave-active {
    transition: all 0.3s ease-out;
}
</style>