<template>
  <div class="navbar">
      <nav>
            <h1><router-link :to="{name: 'Home'}">William Edwin</router-link></h1>
            <div class="links">
                <router-link :to="{name: 'About'}">About</router-link>
                <router-link :to="{name: 'Project'}">Project</router-link>
                <span>|</span>
                <button @click="openModal('Contact')">Contact</button>
            </div>
      </nav>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    setup(props,context){
        let triggerModal = ref(false)

        const openModal = (value) => {
            triggerModal.value = true
            context.emit('triggerModal', { isOpen: triggerModal.value, dataValue: value })
        }

        return {openModal}
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