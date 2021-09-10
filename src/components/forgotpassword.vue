<template>
 <div class="container-fluid h-100">
    <!-- navbar -->
    <div class="row h-100">
      <div class="col-xs-12 col-sm-12 col-lg-12 theme-secondary-bg">
        <!-- start of main body content -->
        <div class="container py-4">
          <div class="row justify-content-center mb-5">
            <div class="col-xs-10 col-sm-6 col-lg-4 pt-5">
                <h5 class="page-title color-theme mb-5">Shopper</h5>
              <h5 class="page-title color-theme mb-3 text-muted">Forgot Password ?</h5>
              <div class="row">
                <div class="col-12">
                  <h6 class="card-subheader my-3 color-theme">
                    Enter your email you used to register to verify you and then you can change your password
                  </h6>
                </div>
                <div class="col-xs-12 col-sm-12 col-lg-12 text-left">
                  <form @submit.prevent="handleSubmit" class="form forgot_password-form">
                   
                    <div class="form-group">
                      <label class="label color-theme">Email</label>
                      <input type="tel" class="form-control form-control-lg input_round" name="contact" id="contact" placeholder="Email">
                    </div>
                    <div class="row">
                      <div class="col-12 my-2 text-right">
                        <div class="form-group">
                          <b-button v-model="email" type="submit" class="btn-theme" id="forgot_pwd_btn" name="forgot_pwd_btn">
                            Submit Email
                          </b-button>
                        </div>
                      </div>
                    </div>

                    <div class="row text-center">
                      <div class="col-12 mt-3 text-left">
                        <small class="color-theme">Already have an account?  <router-link class="link success theme-color" to="/">Sign In</router-link></small>
                      </div>
                      <div class="col-12 mt-3 text-left">
                        <small class="text-muted">
                          Copyright © Shopper. All rights reserved.
                        </small>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End of main body content -->
      </div>
    </div>
  </div>

</template>

<script>
// import { mapState, mapActions } from 'vuex'
// import { userService } from '../services/authenticate';
import {apiUrl} from '../services/api';
// import { authHeader } from '../helpers/auth_headers';
import axios from 'axios'

export default {
  name:"forgot",
    data () {
        return {
            email: ''
        }
    },
    computed: {
        // ...mapState('account', ['status'])
    },
    created () {
        // reset login status
        // this.logout();
    },
    methods: {
        // ...mapActions('account', ['login', 'logout']),
        handleSubmit () {
            this.submitted = true;

            const { email } = this;

                        console.log('clicked')
           
                 return axios.post(`${apiUrl}/api/v1/auth/forgotpassword`,{email})
                .then(user => {
                    // login successful if there's a jwt token in the response
                    if (user.data.success) {
                      console.log(user)
                      
                    }else{
                      console.log(user.data.error)
                    }

                    // return user;
                    // this.$router.push('/home')
                }).catch(e=>{
                  this.error ="oops something happened! Try again"
                  console.log(e)
                });
                
        }
    }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btn-theme{
      background: #352C4B;
      
    }
</style>