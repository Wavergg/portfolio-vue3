<template>
  <div class="footer">
    <div class="footer-container">
        <div class="footer-copyright">
            <!-- <span>William Edwin &copy; 2021</span> -->
            
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .footer {
        position: fixed;
        bottom:0;
        width: 100vw;
        box-sizing: border-box;
        height: 20vh;
        padding: 12px 8px;
    }

    @media only screen and (max-width: 600){
        .footer{
            position: relative;
        }
    }

    .footer-container {
        position: relative;
        height: 100%;
    }
    .footer-copyright {
        position: absolute;
        bottom:0;
        right:0;
        text-align: right;
        margin-right: 20px;
        background-color: white;
        padding: 2px 12px;
    }
</style>