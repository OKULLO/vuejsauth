<template>
 <!-- <section> -->
        <div class="container-fluid h-100">
          <div class="row h-100">
            <div class="col-xs-12 col-sm-12 col-lg-12">
              <!-- start of main body content -->
              <div class="container-fluid py-4">
                <div class="row mb-5">
                  <div class="col-xs-12 col-sm-8 offset-sm-2 col-lg-4 offset-lg-4 col-xlg-4 offset-xlg-4 pt-4">
                      <div class=" alert alert-danger" v-if="error" v-text="error"></div>
                    <div class="alert alert-success" v-if="message" v-text="message"></div>
                    <h5 class="page-title color-theme">Sign In</h5>
                    <div class="row">
                      <div class="col-12 mt-4">
                        <h5 class="card-subheader mb-3 color-theme">
                          Enter your account details to sign in
                        </h5>
                      </div>
                      <div class="col-xs-12 col-sm-12 col-lg-12 text-left">
                        <form @submit.prevent="handleSubmit" class="form login-form">
                          <div class="form-group">
                            <label class="label color-theme ">Username</label>
                            <input  v-model="email" type="text" autocomplete="off" class="form-control form-control-lg input_round" name="u_username" id="username" placeholder="Username">
                          </div>
                          <div class="form-group">
                            <label class="label color-theme">Password</label>
                            <input  v-model="password" type="password" class="form-control form-control-lg input_round" name="u_password" id="u_password" placeholder="Password">
                          </div>
                          <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-12 col-lg-6 col-xlg-6 my-2">
                              <small class="text-muted">
                                  <router-link class="link success theme-color" to="/forgotpassword">Forgot Password ?</router-link></small>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-12 col-lg-6 col-xlg-6 my-2 text-right">
                              <div class="form-group">
                                <b-button type="submit" class="btn btn-lg btn-theme text-white" id="login_btn" name="login_btn">
                                  Sign In
                                </b-button>
                              </div>
                            </div>
                          </div>

                          <div class="row text-center">
                            <!-- <div class="col-12 mt-3 text-left">
                              <small class="color-theme">For any assistance, contact the adminstrator.</small>
                             </div> -->
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
  name:"Login",
    data () {
        return {
            email: '',
            password: '',
            submitted: false,
            message: null,
            error: null
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

            const { email, password } = this;

                        console.log('clicked')
           
                 return axios.post(`${apiUrl}/api/v1/auth/login`,{email: email,password:password})
                .then(user => {
                    // login successful if there's a jwt token in the response
                    // console.log(user)
                    if (user.data.token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('user', JSON.stringify(user));

                        this.message = "Login successful";
                           setTimeout(()=>{
                         
                          this.$router.push('/home')
                        },2000)
                      this.error = user.data.error
                    }

                    // return user;
                    
                }).catch(e=>{
                  this.error ="sorry something went wrong";
                  console.log(e)
                });
                
        }
    }
};

</script>

<style scoped>

.btn-theme{
      background: #352C4B;
      
    }
</style>
