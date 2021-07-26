<template>
  <div class="spinner-wrapper" style="position: relative; margin-left: 20px">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
    @keyframes spinner {
        0% {
          transform: translate3d(-50%, -50%, 0) rotate(0deg);
        }
        100% {
          transform: translate3d(-50%, -50%, 0) rotate(360deg);
        }
    }

    .spinner::before {
        animation: 1.5s linear infinite spinner;
        animation-play-state: inherit;
        border: solid 5px #cfd0d1;
        border-bottom-color: #1c87c9;
        border-radius: 50%;
        content: "";
        height: 12px;
        position: absolute;
        top: 10%;
        left: 10%;
        transform: translate3d(-50%, -50%, 0);
        width: 12px;
        will-change: transform;
    }
</style>