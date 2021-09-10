<template>
 <!-- <section> -->
    <div class="container-fluid h-100" id="signup">
    <!-- navbar -->
    <div class="row h-100">
      <div class="col-xs-12 col-sm-12 col-lg-12 theme-secondary-bg">
        <!-- start of main body content -->
        <div class="container py-4">
          <div class="row justify-content-center mb-5">
            <div class="col-xs-12 col-sm-10 col-lg-6 pt-5">
              <h5 class="page-title color-theme mb-5">Shopper</h5>
              <div class="row">
                <div class="col-12">
                   <div class=" alert alert-danger" v-if="error" v-text="error"></div>
                    <div class="alert alert-success" v-if="message" v-text="message"></div>
                  <h5 class="card-subheader mb-4 color-theme">
                    Create your account below
                  </h5>
                </div>
                <div class="col-xs-12 col-sm-12 col-lg-12 text-left">
                  <form  @submit.prevent="register" class="form login-form" action="#" method="post" enctype="multipart/form-data">
                    <div class="form-group row mb-4">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xlg-12">
                        <label class="label color-theme">Full Name</label>
                        <input  v-model="username" type="text" autocomplete="off" class="form-control form-control-lg input_round " name="fname" id="fname" placeholder="Full name">
                      </div>
                    </div>

                    <div class="form-group row mb-4">
                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
                        <label class="label color-theme">Email</label>
                        <input  v-model="email" type="text" autocomplete="off" class="form-control form-control-lg input_round dob" name="dob" id="dob" placeholder="email">
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6 ln">
                        <label class="label color-theme">Phone number</label>
                        <input  v-model="contact" type="tel" autocomplete="off" class="form-control form-control-lg input_round contact" name="contact" id="contact" placeholder="Contact">
                      </div>
                    </div>



                    <div class="form-group row mb-4 py-4">
                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
                        <label class="label color-theme">Password</label>
                        <input  v-model="password" type="password" autocomplete="off" class="form-control form-control-lg input_round password" name="password" id="password" placeholder="Create password">
                        <small id="passwordHelpBlock" class="form-text text-muted">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </small>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xlg-6">
                        <label class="label color-theme">Confirm Password</label>
                        <input  v-model="confirmpass" type="password" autocomplete="off" class="form-control form-control-lg input_round pwd" name="pwd" id="pwd" placeholder="Confirm Password">
                      </div>
                    </div>

                    <div class="row mt-5">
                      <div class="col-xs-12 col-sm-6 col-md-6 offset-md-6 col-lg-6 offset-lg-6 col-xlg-6 col-xlg-6 my-2 text-right">
                        <div class="form-group">
                          <b-button type="submit" class="btn btn-lg btn-theme text-white" id="signup_btn" name="signup_btn">
                            Sign Up
                          </b-button>
                        </div>
                      </div>
                    </div>

                    <div class="row text-center">
                      <div class="col-12 mt-3 text-left">
                        <small class="color-theme">Already have an account? <router-link class="" to="/">Sign In</router-link></small>
                      </div>
                      <div class="col-12 mt-5 text-left">
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
import axios from 'axios'

export default {
  name:"Register",
    data () {
        return {
            email: '',
            password: '',
            contact: '',
            username: '',
            error:null,
            confirmpass:'',
            message:null
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
        register () {
            this.submitted = true;

            const { email, password ,contact,username} = this;

            // console.log(contact)

            if(email=="" || password ==""|| contact=="" || username==""){
              this.error ='All field are required'
            }else if(password!==this.confirmpass){
              this.error = "Passwords dont match"
              
            }else{

              return axios.post(`${apiUrl}/api/v1/auth/register`,{email,password,username,contact}).then(
                  response => {
                    console.log(response.data)

                     if (response.data.success){
                         this.message = response.data.message

                        setTimeout(()=>{
                         
                          this.$router.push('/')
                        },2000)
                       

                     }

                }).catch(e=>{
                  this.error = "Sorry something wrong try again"
                  console.log(e)
                });
                

            }
                
        }
    }
};

</script>

<style scoped>

.btn-theme{
      background: #352C4B;
      
    }
</style>
