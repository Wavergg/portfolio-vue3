<template>
  <div class="card">
    <div class="project-details">
      <h3 class="project-title">{{singleProject.title}}</h3>
      <p>
        {{singleProject.description}}
      </p>
      <div class="badges">
        <div class="badge" v-for="tag in singleProject.tags" :key="tag">{{tag}}</div>
      </div>
    </div>
    <div class="project-image">
      <img
        @click="showSingle"
        :src="singleProject.thumbnailImageMobile"
        alt="portfolio-mobile"
        class="img-mobile"
      />
      <img
        @click="showSingle"
        :src="singleProject.thumbnailImageDesktop"
        alt="portfolio-desktop"
        class="img-desktop"
      />
    </div>
    <div class="project-links">
      <a v-if="singleProject.sourceCode" :href="singleProject.sourceCode" target="_blank" class="btn">
        Source Code
      </a>
      <a v-if="singleProject.demo" :href="singleProject.demo" target="_blank" class="btn"> Demo </a>
    </div>
  </div>
</template>

<script>
export default {
    props: ['project'],
    setup(props, content) {
        const singleProject = props.project

        const showSingle = () => {
            content.emit('showSingle', singleProject.id)
        }

        return { singleProject , showSingle}
    }
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
        display:flex;
        margin-top:12px;
        flex-wrap: wrap;
        gap:4px;
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

    .project-image:hover {
        cursor: pointer;
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
</style>