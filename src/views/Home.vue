<template>
  <div class="relative">
    <!-- toggle theme -->
    <button type="button" @click="toggleTheme"
      class="absolute right-0 p-1 mr-4 text-gray-400 rounded-full top-4 hover:text-gray-700">
      <i :class="theme === 'dark' ? 'fa-solid fa-sun fa-xl' : 'fa-solid fa-moon fa-xl'"></i>
    </button>

    <div class="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <!-- components -->
      <!-- Alerts Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Alerts Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="alert in alerts" :key="alert">
          <router-link :to="alert.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ alert.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- E-commerce Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">E-commerce Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="card in commerce" :key="card">
          <router-link :to="card.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ card.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Error 404 Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Error 404 Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="card in error" :key="card">
          <router-link :to="card.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ card.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Hero Section Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Hero Section Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="card in hero" :key="card">
          <router-link :to="card.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ card.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Forms Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Forms Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="form in forms" :key="form">
          <router-link :to="form.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ form.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- User Profile Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">User Profile Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="card in userProfile" :key="card">
          <router-link :to="card.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ card.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Layouts Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Layouts Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="layout in layouts" :key="layout">
          <router-link :to="layout.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ layout.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Carousels Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Carousels Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="carousel in carousels" :key="carousel">
          <router-link :to="carousel.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ carousel.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Others Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Others Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="other in others" :key="other">
          <router-link :to="other.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ other.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Rating Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Rating Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="rate in rating" :key="rate">
          <router-link :to="rate.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ rate.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Tooltip Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Tooltip Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="component in tooltip" :key="component">
          <router-link :to="component.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ component.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Spinner Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Spinner Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="component in spinner" :key="component">
          <router-link :to="component.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ component.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Tables Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Tables Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="component in tables" :key="component">
          <router-link :to="component.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ component.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Banners Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Banners Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="component in banners" :key="component">
          <router-link :to="component.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ component.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Blogs Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Blogs Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="component in blogs" :key="component">
          <router-link :to="component.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ component.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Collections Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Collections Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="component in collections" :key="component">
          <router-link :to="component.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ component.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Content Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Content Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="component in content" :key="component">
          <router-link :to="component.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ component.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Call to Action Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Call to Action Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="component in callToAction" :key="component">
          <router-link :to="component.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ component.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- F-A-Q Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">F-A-Q Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="component in faq" :key="component">
          <router-link :to="component.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ component.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- Contact Components -->
      <span class="text-3xl font-semibold text-blue-600 underline">Contact Components</span>
      <div class="grid grid-cols-1 mt-6 mb-16 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div class="relative group transit" v-for="component in contact" :key="component">
          <router-link :to="component.route">
            <div class="w-full h-20 overflow-hidden bg-gray-200 rounded-md group-hover:opacity-75">
              <div class="flex items-center justify-center h-full">
                <p class="text-2xl font-semibold truncate">{{ component.title }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const theme = ref('light');

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
  sessionStorage.setItem('theme', theme.value);
  updateThemeClasses(theme.value);
};

const updateThemeClasses = (newTheme) => {
  const body = document.querySelector('body');
  if (newTheme === 'dark') {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
};

updateThemeClasses(sessionStorage.getItem('theme') || 'light');

//components
const alerts = ref([
  { title: 'alert-component', route: '/alert-component' },
  { title: 'alert-with-icon', route: '/alert-with-icon' },
  { title: 'popup-component', route: '/popup-component' },
  { title: 'successful-payment', route: '/successful-payment' },
  { title: 'warning-alert', route: '/warning-alert' },
  { title: 'error-alert', route: '/error-alert' },
  { title: 'group-alerts', route: '/group-alerts' },
])

const commerce = ref([
  { title: 'cart-five', route: '/cart-five' },
  { title: 'cart-four', route: '/cart-four' },
  { title: 'cart-three', route: '/cart-three' },
  { title: 'cart-two', route: '/cart-two' },
  { title: 'cart-one', route: '/cart-one' },
  { title: 'checkout-one', route: '/checkout-one' },
  { title: 'checkout-two', route: '/checkout-two' },
  { title: 'product-card-eight', route: '/product-card-eight' },
  { title: 'product-card-five', route: '/product-card-five' },
  { title: 'product-card-four', route: '/product-card-four' },
  { title: 'product-card-nine', route: '/product-card-nine' },
  { title: 'product-card-one', route: '/product-card-one' },
  { title: 'product-card-seven', route: '/product-card-seven' },
  { title: 'product-card-six', route: '/product-card-six' },
  { title: 'product-card-three', route: '/product-card-three' },
  { title: 'product-card-two', route: '/product-card-two' },
  { title: 'product-details-eight', route: '/product-details-eight' },
  { title: 'product-details-five', route: '/product-details-five' },
  { title: 'product-details-four', route: '/product-details-four' },
  { title: 'product-details-nine', route: '/product-details-nine' },
  { title: 'product-details-one', route: '/product-details-one' },
  { title: 'product-details-seven', route: '/product-details-seven' },
  { title: 'product-details-two', route: '/product-details-two' },
  { title: 'product-details-six', route: '/product-details-six' },
  { title: 'product-details-ten', route: '/product-details-ten' },
  { title: 'product-details-three', route: '/product-details-three' },
  { title: 'groceries-product-grid', route: '/groceries-product-grid' },
])

const error = ref([
  { title: 'error-404-five', route: '/error-404-five' },
  { title: 'error-404-four', route: '/error-404-four' },
  { title: 'error-404-one', route: '/error-404-one' },
  { title: 'error-404-seven', route: '/error-404-seven' },
  { title: 'error-404-six', route: '/error-404-six' },
  { title: 'error-404-three', route: '/error-404-three' },
  { title: 'error-404-two', route: '/error-404-two' },
])

const hero = ref([
  { title: 'HeroSectionFive', route: '/hero-section-five' },
  { title: 'HeroSectionFour', route: '/hero-section-four' },
  { title: 'HeroSectionOne', route: '/hero-section-one' },
  { title: 'HeroSectionSix', route: '/hero-section-six' },
  { title: 'HeroSectionThree', route: '/hero-section-three' },
  { title: 'HeroSectionTwo', route: '/hero-section-two' },
  { title: 'HeroSectionSeven', route: '/hero-section-seven' },
  { title: 'hero-section-eight', route: '/hero-section-eight' },
])

const forms = ref([
  { title: 'otp-form', route: '/otp-form' },
  { title: 'form-one', route: '/form-one' },
  { title: 'form-two', route: '/form-two' },
  { title: 'form-three', route: '/form-three' },
  { title: 'credit-card-form', route: '/credit-card-form' },
  { title: 'form-seven', route: '/form-seven' },
  { title: 'newsletter-subscription-form', route: '/newsletter-subscription-form' },
  { title: 'survey-form', route: '/survey-form' },
  { title: 'form-for-editing-items', route: '/form-for-editing-items' },
  { title: 'checkout-form-one', route: '/checkout-form-one' },
  { title: 'checkout-form-two', route: '/checkout-form-two' },
  { title: 'book-appointment-form-one', route: '/book-appointment-form-one' },
  { title: 'book-appointment-form-two', route: '/book-appointment-form-two' },
  { title: 'reservation-form', route: '/reservation-form' },
  { title: 'form-with-img', route: '/form-with-img' },
  { title: 'form-with-img-three', route: '/form-with-img-three' },
  { title: 'login-form-five', route: '/login-form-five' },
  { title: 'login-form-two', route: '/login-form-two' },
  { title: 'login-form-four', route: '/login-form-four' },
  { title: 'login-form-one', route: '/login-form-one' },
  { title: 'login-form-six', route: '/login-form-six' },
  { title: 'login-form-three', route: '/login-form-three' },
  { title: 'LoginFormTwoWithImage', route: '/login-form-two-with-img' },
  { title: 'login-form-seven', route: '/login-form-seven' },
  { title: 'sign-up-form', route: '/sign-up-form' },
  { title: 'forget-password-one', route: '/forget-password-one' },
  { title: 'forget-password-two', route: '/forget-password-two' },
  { title: 'forget-password-three', route: '/forget-password-three' },
])

const userProfile = ref([
  { title: 'UserProfileOne', route: '/user-profile-one' },
  { title: 'UserProfileThreeWithForm', route: '/user-profile-three-with-form' },
  { title: 'UserProfileTwo', route: '/user-profile-two' },
])

const layouts = ref([
  { title: 'navbar', route: '/navbar' },
  { title: 'sidebar-with-navbar', route: '/sidebar-with-navbar' },
  { title: 'FooterSix', route: '/footer-six' },
  { title: 'FooterThree', route: '/footer-three' },
  { title: 'FooterFive', route: '/footer-five' },
  { title: 'FooterTwo', route: '/footer-two' },
  { title: 'sidebar', route: '/sidebar' },
  { title: 'sidebar-two', route: '/sidebar-II' },
  { title: 'FooterFour', route: '/footer-four' },
  { title: 'SidebarTwo', route: '/sidebar-two' },
  { title: 'SidebarFive', route: '/sidebar-five' },
  { title: 'SidebarFour', route: '/sidebar-four' },
  { title: 'SidebarOne', route: '/sidebar-one' },
  { title: 'SidebarThree', route: '/sidebar-three' },
  { title: 'NavbarOne', route: '/navbar-one' },
  { title: 'NavbarTwo', route: '/navbar-two' },
  { title: 'NavbarThree', route: '/navbar-three' },
  { title: 'NavbarFour', route: '/navbar-four' },
  { title: 'NavbarFive', route: '/navbar-five' },
  { title: 'NavbarSix', route: '/navbar-six' },
  { title: 'NavbarSeven', route: '/navbar-seven' },
  { title: 'NavbarEight', route: '/navbar-eight' },
  { title: 'NavbarNine', route: '/navbar-nine' },
  { title: 'NavbarTen', route: '/navbar-ten' },
  { title: 'navbar-eleven', route: '/navbar-eleven' },
  { title: 'navbar-twelve', route: '/navbar-twelve' },
])

const carousels = ref([
  { title: 'carousel-four', route: '/carousel-four' },
  { title: 'carousel-one', route: '/carousel-one' },
  { title: 'carousel-two', route: '/carousel-two' },
  { title: 'carousel-three', route: '/carousel-three' },
])

const others = ref([
  { title: 'BestSelling', route: '/best-selling' },
  { title: 'statistics', route: '/statistics' },
  { title: 'LatestNewsUpdate', route: '/latest-news-update' },
  { title: 'OurServiceComponent', route: '/our-service-component' },
  { title: 'PostsComponent', route: '/posts-component' },
  { title: 'ReviewsComponent', route: '/reviews-component' },
  { title: 'PricingCard', route: '/pricing-card' },
  { title: 'TeamCards', route: '/team-cards' },
  { title: 'BreadcrumbsOne', route: '/breadcrumbs-one' },
  { title: 'Dashboard', route: '/dashboard' },
])

const rating = ref([
  { title: 'BasicRating', route: '/basic-rating' },
  { title: 'DisabledRating', route: '/disabled-rating' },
  { title: 'ColorsRating', route: '/colors-rating' },
  { title: 'SizesRating', route: '/sizes-rating' },
  { title: 'ViewOnlyRating', route: '/view-only-rating' },
])

const tooltip = ref([
  { title: 'BottomTooltip', route: '/bottom-tooltip' },
  { title: 'TopTooltip', route: '/top-tooltip' },
  { title: 'LeftTooltip', route: '/left-tooltip' },
  { title: 'RightTooltip', route: '/right-tooltip' },
  { title: 'WithoutIconTooltip', route: '/without-icon-tooltip' },
])

const spinner = ref([
  { title: 'BasicSpinner', route: '/basic-spinner' },
  { title: 'ColorSpinner', route: '/color-spinner' },
  { title: 'SizeSpinner', route: '/size-spinner' },
  { title: 'WithTextSpinner', route: '/with-text-spinner' },
  { title: 'OnButtonSpinner', route: '/on-button-spinner' },
])

const tables = ref([
  { title: 'TableOne', route: '/table-one' },
  { title: 'TableTwo', route: '/table-two' },
])

const banners = ref([
  { title: 'banner-one', route: '/banner-one' },
  { title: 'banner-two', route: '/banner-two' },
])

const blogs = ref([
  { title: 'blogs-one', route: '/blogs-one' },
  { title: 'blogs-two', route: '/blogs-two' },
  { title: 'blogs-three', route: '/blogs-three' },
  { title: 'blogs-four', route: '/blogs-four' },
  { title: 'blogs-five', route: '/blogs-five' },
  { title: 'blogs-six', route: '/blogs-six' },
  { title: 'blogs-seven', route: '/blogs-seven' },
])

const collections = ref([
  { title: 'collection-one', route: '/collection-one' },
  { title: 'collection-two', route: '/collection-two' },
  { title: 'collection-three', route: '/collection-three' },
])

const content = ref([
  { title: 'content-one', route: '/content-one' },
  { title: 'content-two', route: '/content-two' },
])

const callToAction = ref([
  { title: 'call-to-action', route: '/call-to-action' },
  { title: 'call-to-action-one', route: '/call-to-action-one' },
  { title: 'call-to-action-two', route: '/call-to-action-two' },
  { title: 'call-to-action-three', route: '/call-to-action-three' },
  { title: 'call-to-action-four', route: '/call-to-action-four' },
  { title: 'call-to-action-five', route: '/call-to-action-five' },
  { title: 'call-to-action-six', route: '/call-to-action-six' },
  { title: 'call-to-action-seven', route: '/call-to-action-seven' },
])

const faq = ref([
  { title: 'FaqOne', route: '/faq-one' },
  { title: 'FaqTwo', route: '/faq-two' },
  { title: 'FaqThree', route: '/faq-three' },
  { title: 'FaqFour', route: '/faq-four' },
  { title: 'FaqFive', route: '/faq-five' },
])

const contact = ref([
  { title: 'contact-one', route: '/contact-one' },
  { title: 'contact-two', route: '/contact-two' },
  { title: 'contact-three', route: '/contact-three' },
  { title: 'contact-four', route: '/contact-four' },
  { title: 'contact-five', route: '/contact-five' },
])
</script>