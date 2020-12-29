<template>
  <div>
    <DarkModeSwitcher />
    <div class="container sm:px-10">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Register Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
          <a href="" class="-intro-x flex items-center pt-5">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="w-6"
              :src="require(`@/assets/images/logo.svg`)"
            />
            <span class="text-white text-lg ml-3">
              Mid<span class="font-medium">One</span>
            </span>
          </a>
          <div class="my-auto">
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="-intro-x w-1/2 -mt-16"
              :src="require(`@/assets/images/illustration.svg`)"
            />
            <div
              class="-intro-x text-white font-medium text-4xl leading-tight mt-10"
            >
              A few more clicks to <br />
              sign up to your account.
            </div>
            <div class="-intro-x mt-5 text-lg text-white dark:text-gray-500">
              Manage all your e-commerce accounts in one place
            </div>
          </div>
        </div>
        <!-- END: Register Info -->
        <!-- BEGIN: Register Form -->

        <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
          <div
            class="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
          >
            <!--            BEGIN: Form create account-->
            <form action="" novalidate @submit.prevent="validataccount">
              <!--            {{$v}}-->
              <h2
                class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
              >
                Inscription
              </h2>
              <div
                class="intro-x mt-2 text-gray-500 dark:text-gray-500 xl:hidden text-center"
              >
                A few more clicks to sign in to your account. Manage all your
                e-commerce accounts in one place
              </div>
              <div class="intro-x mt-8">
                <div
                  class=""
                  :class="{ 'form-group--error': $v.form.username.$error }"
                >
                  <input
                    id="username"
                    v-model.trim="$v.form.username.$model"
                    name="username"
                    type="text"
                    class="intro-x login__input input input--lg border border-gray-300 block mt-4"
                    placeholder="Username"
                  />
                  <!--                  <span v-if="!$v.form.username.required" class="md-error"-->
                  <!--                    >The first name is required</span-->
                  <!--                  >-->
                  <!--                  <span v-else-if="!$v.form.username.minlength" class="md-error"-->
                  <!--                    >At least 3 car</span-->
                  <!--                  >-->
                </div>
                <div
                  v-if="!$v.form.username.required"
                  class="error text-red-500"
                >
                  username is required.
                </div>
                <div
                  v-if="!$v.form.username.minLength"
                  class="error text-red-500"
                >
                  email must have at least
                  {{ $v.form.email.$params.minLength.min }} characters.
                </div>

                <div :class="{ 'form-group--error': $v.form.email.$error }">
                  <input
                    id="email"
                    v-model.trim="$v.form.email.$model"
                    name="email"
                    type="text"
                    class="intro-x login__input input input--lg border border-gray-300 block mt-4"
                    placeholder="Email"
                  />
                </div>
                <div v-if="!$v.form.email.required" class="error text-red-500">
                  email is required.
                </div>
                <div v-if="!$v.form.email.minLength" class="error text-red-500">
                  email must have at least
                  {{ $v.form.email.$params.minLength.min }} characters.
                </div>

                <div
                  class=""
                  :class="{ 'form-group--error': $v.form.password.$error }"
                >
                  <input
                    id="password"
                    v-model.trim="$v.form.password.$model"
                    name="password"
                    type="text"
                    class="intro-x login__input input input--lg border border-gray-300 block mt-4"
                    placeholder="Mot de passe"
                  />
                  <!--              <div class="intro-x w-full grid grid-cols-12 gap-4 h-1 mt-3">-->
                  <!--                <div class="col-span-3 h-full rounded bg-theme-9"></div>-->
                  <!--                <div class="col-span-3 h-full rounded bg-theme-9"></div>-->
                  <!--                <div class="col-span-3 h-full rounded bg-theme-9"></div>-->
                  <!--                <div-->
                  <!--                  class="col-span-3 h-full rounded bg-gray-200 dark:bg-dark-2"-->
                  <!--                ></div>-->
                  <!--              </div>-->
                  <!--              <a-->
                  <!--                href=""-->
                  <!--                class="intro-x text-gray-600 block mt-2 text-xs sm:text-sm"-->
                  <!--                >Mot de passe sur ?</a-->
                  <!--              >-->
                </div>
                <div
                  v-if="!$v.form.password.required"
                  class="error text-red-500"
                >
                  password is required.
                </div>
                <div
                  v-if="!$v.form.password.minLength"
                  class="error text-red-500"
                >
                  password must have at least
                  {{ $v.form.email.$params.minLength.min }} characters.
                </div>
                <div
                  v-if="!$v.form.password.maxLength"
                  class="error text-red-500"
                >
                  Field must have at least
                  {{ $v.form.email.$params.maxLength.min }} characters.
                </div>

                <!--                <div class="">-->
                <!--                  <input-->
                <!--                    type="text"-->
                <!--                    class="intro-x login__input input input&#45;&#45;lg border border-gray-300 block mt-4"-->
                <!--                    placeholder="Confirmation de mot de passe"-->
                <!--                  />-->
                <!--                </div>-->
              </div>
              <div
                class="intro-x flex items-center text-gray-700 dark:text-gray-600 mt-4 text-xs sm:text-sm"
              >
                <input
                  id="remember-me"
                  type="checkbox"
                  class="input border mr-2"
                />
                <label class="cursor-pointer select-none" for="remember-me"
                  >I agree to the Envato</label
                >
                <a class="text-theme-1 dark:text-theme-10 ml-1" href=""
                  >Privacy Policy</a
                >.
              </div>
              <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                <button
                  type="submit"
                  class="button button--lg w-full xl:w-40 text-white bg-theme-1 xl:mr-3 align-top"
                >
                  Créer un compte
                </button>
                <a href="/login">
                  <button
                    class="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 dark:border-dark-5 dark:text-gray-300 mt-3 xl:mt-0 align-top"
                  >
                    Se connecter
                  </button>
                </a>
              </div>
            </form>
            <!--            END: Form create account-->
          </div>
        </div>
        <!-- END: Register Form -->
      </div>
    </div>
  </div>
</template>

<script>
import DarkModeSwitcher from "@/components/DarkModeSwitcher";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  components: {
    DarkModeSwitcher
  },
  mixins: [validationMixin],
  data() {
    return {
      form: {
        username: null,
        email: null,
        password: null
      }
    };
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        minLength: minLength(3)
      },
      password: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(20)
      }
    }
  },
  mounted() {
    cash("body")
      .removeClass("app")
      .addClass("login");
  },
  methods: {
    async validataccount() {
      try {
        const response = await axios({
          method: "post",
          url: "http://neomed-back.neogenuis.com/auth/users/",
          data: {
            username: this.form.username,
            email: this.form.email,
            password: this.form.password,
            password_confirmation: this.form.password_confirmation
          },
          headers: {
            Accept: "application/json"
          },
          dataType: "json"
        });
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
