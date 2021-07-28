<template>
  <div class="navbar">
      <nav>
            <h1><router-link :to="{name: 'Home'}">William Edwin</router-link></h1>
            <transition-group tag="div" appear @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" class="links">
                <router-link :to="{name: 'About'}" :key="'about-link'" :data-index="0">About</router-link>
                <router-link :to="{name: 'Project'}" :key="'project-link'" :data-index="1">Project</router-link>
                <span :key="'separator'" :data-index="2">|</span>
                <button @click="openModal('Contact')" :key="'contact-link'" :data-index="3">Contact</button>
            </transition-group>
      </nav>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import gsap from 'gsap'

export default {
    setup(props,context){
        let triggerModal = ref(false)

        const openModal = (value) => {
            triggerModal.value = true
            context.emit('triggerModal', { isOpen: triggerModal.value, dataValue: value })
        }

        const beforeEnter = (el) => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(-60px)'
        }

        const enter = (el, done) => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                onComplete: done,
                delay: el.dataset.index * 0.2
            })
        }

        const afterEnter = () => {
            context.emit('loadContent')
        }

        return {openModal, beforeEnter, enter, afterEnter}
    }
}
</script>

<style>
    .navbar {
        padding: 8px 12px;
        background-color: #fff;
    }
    nav {
        display:flex;
        align-items:center;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
    }

    nav .links {
        display: flex;
        align-items:center;
        gap:15px;
    }

    @media only screen and (max-width: 600px) {
        nav {
            display: block;
            text-align: center;
        }

        nav .links {
            justify-content: center;
            margin-top: 8px;
        }
    }

    nav a{
        width: 80px;
        text-align: center;
    }
</style>