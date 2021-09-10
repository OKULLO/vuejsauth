<template>
<nav class="navbar navbar-expand-lg navbar-dark bg_theme px-2">
                <div class="container-fluid">
                    <a class="navbar-brand" to="/"><i class="fa fa-shopping-cart"></i>Shopper</a>
                    <button class="navbar-toggler bg_toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon text-dark"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                           
                        </ul>
                        <div class="login ml-auto">
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0 mr-2">
                        <li class="nav-item px-1"><router-link class="nav-link mb-2 btn btn-block btn-outline-info text-white" to="/register">Register</router-link></li>
                        <router-link :to="{name:'login'}" class="nav-link px-3  btn btn-block btn-outline-warning text-white">Login </router-link>

                        <!-- <li class="nav-item"><a  href="#programs">Sign In</a></li> -->
                           
                        </ul>
                    </div>
                    </div>
                    
                </div>
            </nav>
            <!-- Header-->
</template>

<script>

export default {
  name:'navbar',
   
}
</script>
<style scoped>
    .bg_theme{
      background: #352C4B;
      height: 10vh;
    }
    .link_text{
        color: #fff;
    }
</style>>


