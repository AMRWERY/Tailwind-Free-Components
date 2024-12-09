import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    // alerts
    {
      path: "/alert-component",
      name: "alert-component",
      component: () => import("../components/alerts/alert-component.vue"),
    },
    {
      path: "/alert-with-icon",
      name: "alert-with-icon",
      component: () => import("../components/alerts/alert-with-icon.vue"),
    },
    {
      path: "/popup-component",
      name: "popup-component",
      component: () => import("../components/alerts/popup-component.vue"),
    },
    {
      path: "/successful-payment",
      name: "successful-payment",
      component: () => import("../components/alerts/successful-payment.vue"),
    },
    {
      path: "/warning-alert",
      name: "warning-alert",
      component: () => import("../components/alerts/warning-alert.vue"),
    },
    {
      path: "/error-alert",
      name: "error-alert",
      component: () => import("../components/alerts/error-alert.vue"),
    },
    {
      path: "/group-alerts",
      name: "group-alerts",
      component: () => import("../components/alerts/group-alerts.vue"),
    },

    //e-commerce
    {
      path: "/payment-form-one",
      name: "payment-form-one",
      component: () =>
        import("../components/e-commerce/payment/payment-form-one.vue"),
    },
    {
      path: "/payment-form-two",
      name: "payment-form-two",
      component: () =>
        import("../components/e-commerce/payment/payment-form-two.vue"),
    },
    {
      path: "/payment-form-three",
      name: "payment-form-three",
      component: () =>
        import("../components/e-commerce/payment/payment-form-three.vue"),
    },
    {
      path: "/payment-form-four",
      name: "payment-form-four",
      component: () =>
        import("../components/e-commerce/payment/payment-form-four.vue"),
    },
    {
      path: "/payment-form-five",
      name: "payment-form-five",
      component: () =>
        import("../components/e-commerce/payment/payment-form-five.vue"),
    },
    {
      path: "/cart-six",
      name: "cart-six",
      component: () => import("../components/e-commerce/cart/cart-six.vue"),
    },
    {
      path: "/cart-five",
      name: "cart-five",
      component: () => import("../components/e-commerce/cart/cart-five.vue"),
    },
    {
      path: "/cart-four",
      name: "cart-four",
      component: () => import("../components/e-commerce/cart/cart-four.vue"),
    },
    {
      path: "/cart-three",
      name: "cart-three",
      component: () => import("../components/e-commerce/cart/cart-three.vue"),
    },
    {
      path: "/cart-two",
      name: "cart-two",
      component: () => import("../components/e-commerce/cart/cart-two.vue"),
    },
    {
      path: "/cart-one",
      name: "cart-one",
      component: () => import("../components/e-commerce/cart/cart-one.vue"),
    },
    {
      path: "/checkout-one",
      name: "checkout-one",
      component: () =>
        import("../components/e-commerce/checkout/checkout-one.vue"),
    },
    {
      path: "/checkout-two",
      name: "checkout-two",
      component: () =>
        import("../components/e-commerce/checkout/checkout-two.vue"),
    },
    {
      path: "/checkout-three",
      name: "checkout-three",
      component: () =>
        import("../components/e-commerce/checkout/checkout-three.vue"),
    },
    {
      path: "/product-card-eight",
      name: "product-card-eight",
      component: () =>
        import("../components/e-commerce/product-card/product-card-eight.vue"),
    },
    {
      path: "/product-card-five",
      name: "product-card-five",
      component: () =>
        import("../components/e-commerce/product-card/product-card-five.vue"),
    },
    {
      path: "/product-card-four",
      name: "product-card-four",
      component: () =>
        import("../components/e-commerce/product-card/product-card-four.vue"),
    },
    {
      path: "/product-card-nine",
      name: "product-card-nine",
      component: () =>
        import("../components/e-commerce/product-card/product-card-nine.vue"),
    },
    {
      path: "/product-card-one",
      name: "product-card-one",
      component: () =>
        import("../components/e-commerce/product-card/product-card-one.vue"),
    },
    {
      path: "/product-card-seven",
      name: "product-card-seven",
      component: () =>
        import("../components/e-commerce/product-card/product-card-seven.vue"),
    },
    {
      path: "/product-card-six",
      name: "product-card-six",
      component: () =>
        import("../components/e-commerce/product-card/product-card-six.vue"),
    },
    {
      path: "/product-card-three",
      name: "product-card-three",
      component: () =>
        import("../components/e-commerce/product-card/product-card-three.vue"),
    },
    {
      path: "/product-card-two",
      name: "product-card-two",
      component: () =>
        import("../components/e-commerce/product-card/product-card-two.vue"),
    },
    {
      path: "/product-details-eight",
      name: "product-details-eight",
      component: () =>
        import(
          "../components/e-commerce/product-details/product-details-eight.vue"
        ),
    },
    {
      path: "/product-details-five",
      name: "product-details-five",
      component: () =>
        import(
          "../components/e-commerce/product-details/product-details-five.vue"
        ),
    },
    {
      path: "/product-details-four",
      name: "product-details-four",
      component: () =>
        import(
          "../components/e-commerce/product-details/product-details-four.vue"
        ),
    },
    {
      path: "/product-details-nine",
      name: "product-details-nine",
      component: () =>
        import(
          "../components/e-commerce/product-details/product-details-nine.vue"
        ),
    },
    {
      path: "/product-details-one",
      name: "product-details-one",
      component: () =>
        import(
          "../components/e-commerce/product-details/product-details-one.vue"
        ),
    },
    {
      path: "/product-details-seven",
      name: "product-details-seven",
      component: () =>
        import(
          "../components/e-commerce/product-details/product-details-seven.vue"
        ),
    },
    {
      path: "/product-details-two",
      name: "product-details-two",
      component: () =>
        import(
          "../components/e-commerce/product-details/product-details-two.vue"
        ),
    },
    {
      path: "/product-details-six",
      name: "product-details-six",
      component: () =>
        import(
          "../components/e-commerce/product-details/product-details-six.vue"
        ),
    },
    {
      path: "/product-details-ten",
      name: "product-details-ten",
      component: () =>
        import(
          "../components/e-commerce/product-details/product-details-ten.vue"
        ),
    },
    {
      path: "/product-details-three",
      name: "product-details-three",
      component: () =>
        import(
          "../components/e-commerce/product-details/product-details-three.vue"
        ),
    },
    {
      path: "/groceries-product-grid",
      name: "groceries-product-grid",
      component: () =>
        import("../components/e-commerce/groceries-product-grid.vue"),
    },

    //error-404
    {
      path: "/error-404-five",
      name: "error-404-five",
      component: () => import("../components/error-404/error-404-five.vue"),
    },
    {
      path: "/error-404-four",
      name: "error-404-four",
      component: () => import("../components/error-404/error-404-four.vue"),
    },
    {
      path: "/error-404-one",
      name: "error-404-one",
      component: () => import("../components/error-404/error-404-one.vue"),
    },
    {
      path: "/error-404-seven",
      name: "error-404-seven",
      component: () => import("../components/error-404/error-404-seven.vue"),
    },
    {
      path: "/error-404-six",
      name: "error-404-six",
      component: () => import("../components/error-404/error-404-six.vue"),
    },
    {
      path: "/error-404-three",
      name: "error-404-three",
      component: () => import("../components/error-404/error-404-three.vue"),
    },
    {
      path: "/error-404-two",
      name: "error-404-two",
      component: () => import("../components/error-404/error-404-two.vue"),
    },
    {
      path: "/error-404-eight",
      name: "error-404-eight",
      component: () => import("../components/error-404/error-404-eight.vue"),
    },
    {
      path: "/error-404-nine",
      name: "error-404-nine",
      component: () => import("../components/error-404/error-404-nine.vue"),
    },
    {
      path: "/error-404-ten",
      name: "error-404-ten",
      component: () => import("../components/error-404/error-404-ten.vue"),
    },
    {
      path: "/error-404-eleven",
      name: "error-404-eleven",
      component: () => import("../components/error-404/error-404-eleven.vue"),
    },
    {
      path: "/error-404-twelve",
      name: "error-404-twelve",
      component: () => import("../components/error-404/error-404-twelve.vue"),
    },

    //hero-section
    {
      path: "/hero-section-five",
      name: "HeroSectionFive",
      component: () => import("../components/hero-section/HeroSectionFive.vue"),
    },
    {
      path: "/hero-section-four",
      name: "HeroSectionFour",
      component: () => import("../components/hero-section/HeroSectionFour.vue"),
    },
    {
      path: "/hero-section-one",
      name: "HeroSectionOne",
      component: () => import("../components/hero-section/HeroSectionOne.vue"),
    },
    {
      path: "/hero-section-six",
      name: "HeroSectionSix",
      component: () => import("../components/hero-section/HeroSectionSix.vue"),
    },
    {
      path: "/hero-section-three",
      name: "HeroSectionThree",
      component: () =>
        import("../components/hero-section/HeroSectionThree.vue"),
    },
    {
      path: "/hero-section-two",
      name: "HeroSectionTwo",
      component: () => import("../components/hero-section/HeroSectionTwo.vue"),
    },
    {
      path: "/hero-section-seven",
      name: "HeroSectionSeven",
      component: () =>
        import("../components/hero-section/HeroSectionSeven.vue"),
    },
    {
      path: "/hero-section-eight",
      name: "hero-section-eight",
      component: () =>
        import("../components/hero-section/hero-section-eight.vue"),
    },

    //forms
    {
      path: "/otp-form",
      name: "otp-form",
      component: () => import("../components/forms/otp-form.vue"),
    },
    {
      path: "/form-one",
      name: "form-one",
      component: () => import("../components/forms/contact-form/form-one.vue"),
    },
    {
      path: "/form-two",
      name: "form-two",
      component: () => import("../components/forms/contact-form/form-two.vue"),
    },
    {
      path: "/form-three",
      name: "form-three",
      component: () =>
        import("../components/forms/contact-form/form-three.vue"),
    },
    {
      path: "/credit-card-form",
      name: "credit-card-form",
      component: () => import("../components/forms/credit-card-form.vue"),
    },
    {
      path: "/form-seven",
      name: "form-seven",
      component: () => import("../components/forms/form-seven.vue"),
    },
    {
      path: "/newsletter-subscription-form",
      name: "newsletter-subscription-form",
      component: () =>
        import("../components/forms/newsletter-subscription-form.vue"),
    },
    {
      path: "/survey-form",
      name: "survey-form",
      component: () => import("../components/forms/survey-form.vue"),
    },
    {
      path: "/checkout-form-one",
      name: "checkout-form-one",
      component: () => import("../components/forms/checkout-form-one.vue"),
    },
    {
      path: "/checkout-form-two",
      name: "checkout-form-two",
      component: () => import("../components/forms/checkout-form-two.vue"),
    },
    {
      path: "/book-appointment-form-one",
      name: "book-appointment-form-one",
      component: () =>
        import("../components/forms/book-appointment-form-one.vue"),
    },
    {
      path: "/book-appointment-form-two",
      name: "book-appointment-form-two",
      component: () =>
        import("../components/forms/book-appointment-form-two.vue"),
    },
    {
      path: "/reservation-form",
      name: "reservation-form",
      component: () => import("../components/forms/reservation-form.vue"),
    },
    {
      path: "/form-for-editing-items",
      name: "form-for-editing-items",
      component: () => import("../components/forms/form-for-editing-items.vue"),
    },
    {
      path: "/form-with-img",
      name: "form-with-img",
      component: () =>
        import("../components/forms/auth-form/form-with-img.vue"),
    },
    {
      path: "/form-with-img-three",
      name: "form-with-img-three",
      component: () =>
        import("../components/forms/auth-form/form-with-img-three.vue"),
    },
    {
      path: "/login-form-five",
      name: "login-form-five",
      component: () =>
        import("../components/forms/auth-form/login-form-five.vue"),
    },
    {
      path: "/login-form-four",
      name: "login-form-four",
      component: () =>
        import("../components/forms/auth-form/login-form-four.vue"),
    },
    {
      path: "/login-form-one",
      name: "login-form-one",
      component: () =>
        import("../components/forms/auth-form/login-form-one.vue"),
    },
    {
      path: "/login-form-six",
      name: "login-form-six",
      component: () =>
        import("../components/forms/auth-form/login-form-six.vue"),
    },
    {
      path: "/login-form-two",
      name: "login-form-two",
      component: () =>
        import("../components/forms/auth-form/login-form-two.vue"),
    },
    {
      path: "/login-form-three",
      name: "login-form-three",
      component: () =>
        import("../components/forms/auth-form/login-form-three.vue"),
    },
    {
      path: "/login-form-two-with-img",
      name: "login-form-two-with-img",
      component: () =>
        import("../components/forms/auth-form/login-form-two-with-img.vue"),
    },
    {
      path: "/login-form-seven",
      name: "login-form-seven",
      component: () =>
        import("../components/forms/auth-form/login-form-seven.vue"),
    },
    {
      path: "/sign-up-form",
      name: "sign-up-form",
      component: () => import("../components/forms/auth-form/sign-up-form.vue"),
    },
    {
      path: "/forget-password-one",
      name: "forget-password-one",
      component: () =>
        import("../components/forms/forget-password/forget-password-one.vue"),
    },
    {
      path: "/forget-password-two",
      name: "forget-password-two",
      component: () =>
        import("../components/forms/forget-password/forget-password-two.vue"),
    },
    {
      path: "/forget-password-three",
      name: "forget-password-three",
      component: () =>
        import("../components/forms/forget-password/forget-password-three.vue"),
    },

    //user-profile
    {
      path: "/user-profile-one",
      name: "UserProfileOne",
      component: () => import("../components/user-profile/UserProfileOne.vue"),
    },
    {
      path: "/user-profile-three-with-form",
      name: "UserProfileThreeWithForm",
      component: () =>
        import("../components/user-profile/UserProfileThreeWithForm.vue"),
    },
    {
      path: "/user-profile-two",
      name: "UserProfileTwo",
      component: () => import("../components/user-profile/UserProfileTwo.vue"),
    },

    //layouts
    {
      path: "/navbar",
      name: "navbar",
      component: () => import("../components/layouts/navbar.vue"),
    },
    {
      path: "/sidebar-with-navbar",
      name: "sidebar-with-navbar",
      component: () => import("../components/layouts/sidebar-with-navbar.vue"),
    },
    {
      path: "/footer-six",
      name: "FooterSix",
      component: () => import("../components/layouts/FooterSix.vue"),
    },
    {
      path: "/footer-three",
      name: "FooterThree",
      component: () => import("../components/layouts/FooterThree.vue"),
    },
    {
      path: "/footer-five",
      name: "FooterFive",
      component: () => import("../components/layouts/FooterFive.vue"),
    },
    {
      path: "/footer-two",
      name: "FooterTwo",
      component: () => import("../components/layouts/FooterTwo.vue"),
    },
    {
      path: "/sidebar",
      name: "sidebar",
      component: () => import("../components/layouts/sidebar.vue"),
    },
    {
      path: "/sidebar-II",
      name: "sidebar-two",
      component: () => import("../components/layouts/sidebar-two.vue"),
    },
    {
      path: "/footer-four",
      name: "FooterFour",
      component: () => import("../components/layouts/FooterFour.vue"),
    },
    {
      path: "/sidebar-two",
      name: "SidebarTwo",
      component: () => import("../components/layouts/SidebarTwo.vue"),
    },
    {
      path: "/sidebar-five",
      name: "SidebarFive",
      component: () => import("../components/layouts/SidebarFive.vue"),
    },
    {
      path: "/sidebar-four",
      name: "SidebarFour",
      component: () => import("../components/layouts/SidebarFour.vue"),
    },
    {
      path: "/sidebar-one",
      name: "SidebarOne",
      component: () => import("../components/layouts/SidebarOne.vue"),
    },
    {
      path: "/sidebar-three",
      name: "SidebarThree",
      component: () => import("../components/layouts/SidebarThree.vue"),
    },
    {
      path: "/sidebar-three",
      name: "SidebarThree",
      component: () => import("../components/layouts/SidebarThree.vue"),
    },
    {
      path: "/sidebar-six",
      name: "sidebar-six",
      component: () => import("../components/layouts/sidebar-six.vue"),
    },
    {
      path: "/navbar-one",
      name: "NavbarOne",
      component: () => import("../components/layouts/NavbarOne.vue"),
    },
    {
      path: "/navbar-two",
      name: "NavbarTwo",
      component: () => import("../components/layouts/NavbarTwo.vue"),
    },
    {
      path: "/navbar-three",
      name: "NavbarThree",
      component: () => import("../components/layouts/NavbarThree.vue"),
    },
    {
      path: "/navbar-four",
      name: "NavbarFour",
      component: () => import("../components/layouts/NavbarFour.vue"),
    },
    {
      path: "/navbar-five",
      name: "NavbarFive",
      component: () => import("../components/layouts/NavbarFive.vue"),
    },
    {
      path: "/navbar-six",
      name: "NavbarSix",
      component: () => import("../components/layouts/NavbarSix.vue"),
    },
    {
      path: "/navbar-seven",
      name: "NavbarSeven",
      component: () => import("../components/layouts/NavbarSeven.vue"),
    },
    {
      path: "/navbar-eight",
      name: "NavbarEight",
      component: () => import("../components/layouts/NavbarEight.vue"),
    },
    {
      path: "/navbar-nine",
      name: "NavbarNine",
      component: () => import("../components/layouts/NavbarNine.vue"),
    },
    {
      path: "/navbar-ten",
      name: "NavbarTen",
      component: () => import("../components/layouts/NavbarTen.vue"),
    },
    {
      path: "/navbar-eleven",
      name: "navbar-eleven",
      component: () => import("../components/layouts/navbar-eleven.vue"),
    },
    {
      path: "/navbar-twelve",
      name: "navbar-twelve",
      component: () => import("../components/layouts/navbar-twelve.vue"),
    },
    {
      path: "/navbar-thirteen",
      name: "navbar-thirteen",
      component: () => import("../components/layouts/navbar-thirteen.vue"),
    },
    {
      path: "/navbar-fourteen",
      name: "navbar-fourteen",
      component: () => import("../components/layouts/navbar-fourteen.vue"),
    },
    {
      path: "/navbar-fifteen",
      name: "navbar-fifteen",
      component: () => import("../components/layouts/navbar-fifteen.vue"),
    },

    //carousel
    {
      path: "/carousel-four",
      name: "carousel-four",
      component: () => import("../components/carousels/carousel-four.vue"),
    },
    {
      path: "/carousel-one",
      name: "carousel-one",
      component: () => import("../components/carousels/carousel-one.vue"),
    },
    {
      path: "/carousel-two",
      name: "carousel-two",
      component: () => import("../components/carousels/carousel-two.vue"),
    },
    {
      path: "/carousel-three",
      name: "carousel-three",
      component: () => import("../components/carousels/carousel-three.vue"),
    },

    //other
    {
      path: "/charts",
      name: "charts",
      component: () => import("../components/charts.vue"),
    },
    {
      path: "/tabs",
      name: "tabs",
      component: () => import("../components/tabs.vue"),
    },
    {
      path: "/landing-page",
      name: "landing-page",
      component: () => import("../components/landing-page.vue"),
    },
    {
      path: "/best-selling",
      name: "BestSelling",
      component: () => import("../components/BestSelling.vue"),
    },
    {
      path: "/statistics",
      name: "statistics",
      component: () => import("../components/statistics.vue"),
    },
    {
      path: "/latest-news-update",
      name: "LatestNewsUpdate",
      component: () => import("../components/LatestNewsUpdate.vue"),
    },
    {
      path: "/our-service-component",
      name: "OurServiceComponent",
      component: () => import("../components/OurServiceComponent.vue"),
    },
    {
      path: "/posts-component",
      name: "PostsComponent",
      component: () => import("../components/PostsComponent.vue"),
    },
    {
      path: "/reviews-component",
      name: "ReviewsComponent",
      component: () => import("../components/ReviewsComponent.vue"),
    },
    {
      path: "/pricing-card",
      name: "PricingCard",
      component: () => import("../components/PricingCard.vue"),
    },
    {
      path: "/team-cards",
      name: "TeamCards",
      component: () => import("../components/TeamCards.vue"),
    },
    {
      path: "/breadcrumbs-one",
      name: "breadcrumbs-one",
      component: () => import("../components/breadcrumbs-one.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("../components/Dashboard.vue"),
    },
    {
      path: "/daily-growth-chart",
      name: "daily-growth-chart",
      component: () => import("../components/daily-growth-chart.vue"),
    },
    {
      path: "/range-slider",
      name: "range-slider",
      component: () => import("../components/range-slider.vue"),
    },
    {
      path: "/skeleton-loader",
      name: "skeleton-loader",
      component: () => import("../components/skeleton-loader.vue"),
    },
    {
      path: "/skeleton-loader-two",
      name: "skeleton-loader-two",
      component: () => import("../components/skeleton-loader-two.vue"),
    },
    {
      path: "/progress-bar",
      name: "progress-bar",
      component: () => import("../components/progress-bar.vue"),
    },
    {
      path: "/scroll-to-top",
      name: "scroll-to-top",
      component: () => import("../components/scroll-to-top.vue"),
    },

    //rating
    {
      path: "/basic-rating",
      name: "BasicRating",
      component: () => import("../components/rating/BasicRating.vue"),
    },
    {
      path: "/disabled-rating",
      name: "DisabledRating",
      component: () => import("../components/rating/DisabledRating.vue"),
    },
    {
      path: "/colors-rating",
      name: "ColorsRating",
      component: () => import("../components/rating/ColorsRating.vue"),
    },
    {
      path: "/sizes-rating",
      name: "SizesRating",
      component: () => import("../components/rating/SizesRating.vue"),
    },
    {
      path: "/view-only-rating",
      name: "ViewOnlyRating",
      component: () => import("../components/rating/ViewOnlyRating.vue"),
    },

    //tooltip
    {
      path: "/bottom-tooltip",
      name: "BottomTooltip",
      component: () => import("../components/tooltip/BottomTooltip.vue"),
    },
    {
      path: "/top-tooltip",
      name: "TopTooltip",
      component: () => import("../components/tooltip/TopTooltip.vue"),
    },
    {
      path: "/left-tooltip",
      name: "LeftTooltip",
      component: () => import("../components/tooltip/LeftTooltip.vue"),
    },
    {
      path: "/right-tooltip",
      name: "RightTooltip",
      component: () => import("../components/tooltip/RightTooltip.vue"),
    },
    {
      path: "/without-icon-tooltip",
      name: "WithoutIconTooltip",
      component: () => import("../components/tooltip/WithoutIconTooltip.vue"),
    },

    //spinner
    {
      path: "/basic-spinner",
      name: "BasicSpinner",
      component: () => import("../components/spinner/BasicSpinner.vue"),
    },
    {
      path: "/color-spinner",
      name: "ColorSpinner",
      component: () => import("../components/spinner/ColorSpinner.vue"),
    },
    {
      path: "/size-spinner",
      name: "SizeSpinner",
      component: () => import("../components/spinner/SizeSpinner.vue"),
    },
    {
      path: "/with-text-spinner",
      name: "WithTextSpinner",
      component: () => import("../components/spinner/WithTextSpinner.vue"),
    },
    {
      path: "/on-button-spinner",
      name: "OnButtonSpinner",
      component: () => import("../components/spinner/OnButtonSpinner.vue"),
    },

    //tables
    {
      path: "/table-one",
      name: "TableOne",
      component: () => import("../components/tables/TableOne.vue"),
    },
    {
      path: "/table-two",
      name: "TableTwo",
      component: () => import("../components/tables/TableTwo.vue"),
    },

    //banners
    {
      path: "/banner-one",
      name: "banner-one",
      component: () => import("../components/banners/banner-one.vue"),
    },
    {
      path: "/banner-two",
      name: "banner-two",
      component: () => import("../components/banners/banner-two.vue"),
    },

    //blogs
    {
      path: "/blogs-one",
      name: "blogs-one",
      component: () => import("../components/blogs/blogs-one.vue"),
    },
    {
      path: "/blogs-two",
      name: "blogs-two",
      component: () => import("../components/blogs/blogs-two.vue"),
    },
    {
      path: "/blogs-three",
      name: "blogs-three",
      component: () => import("../components/blogs/blogs-three.vue"),
    },
    {
      path: "/blogs-four",
      name: "blogs-four",
      component: () => import("../components/blogs/blogs-four.vue"),
    },
    {
      path: "/blogs-five",
      name: "blogs-five",
      component: () => import("../components/blogs/blogs-five.vue"),
    },
    {
      path: "/blogs-six",
      name: "blogs-six",
      component: () => import("../components/blogs/blogs-six.vue"),
    },
    {
      path: "/blogs-seven",
      name: "blogs-seven",
      component: () => import("../components/blogs/blogs-seven.vue"),
    },

    //collections
    {
      path: "/collection-one",
      name: "collection-one",
      component: () => import("../components/collections/collection-one.vue"),
    },
    {
      path: "/collection-two",
      name: "collection-two",
      component: () => import("../components/collections/collection-two.vue"),
    },
    {
      path: "/collection-three",
      name: "collection-three",
      component: () => import("../components/collections/collection-three.vue"),
    },

    //content
    {
      path: "/content-one",
      name: "content-one",
      component: () => import("../components/content/content-one.vue"),
    },
    {
      path: "/content-two",
      name: "content-two",
      component: () => import("../components/content/content-two.vue"),
    },

    //call to action
    {
      path: "/call-to-action",
      name: "call-to-action",
      component: () =>
        import("../components/call-to-action/call-to-action.vue"),
    },
    {
      path: "/call-to-action-one",
      name: "call-to-action-one",
      component: () =>
        import("../components/call-to-action/call-to-action-one.vue"),
    },
    {
      path: "/call-to-action-two",
      name: "call-to-action-two",
      component: () =>
        import("../components/call-to-action/call-to-action-two.vue"),
    },
    {
      path: "/call-to-action-three",
      name: "call-to-action-three",
      component: () =>
        import("../components/call-to-action/call-to-action-three.vue"),
    },
    {
      path: "/call-to-action-four",
      name: "call-to-action-four",
      component: () =>
        import("../components/call-to-action/call-to-action-four.vue"),
    },
    {
      path: "/call-to-action-five",
      name: "call-to-action-five",
      component: () =>
        import("../components/call-to-action/call-to-action-five.vue"),
    },
    {
      path: "/call-to-action-six",
      name: "call-to-action-six",
      component: () =>
        import("../components/call-to-action/call-to-action-six.vue"),
    },
    {
      path: "/call-to-action-seven",
      name: "call-to-action-seven",
      component: () =>
        import("../components/call-to-action/call-to-action-seven.vue"),
    },

    //f-a-q
    {
      path: "/faq-one",
      name: "FaqOne",
      component: () => import("../components/f-a-q/FaqOne.vue"),
    },
    {
      path: "/faq-two",
      name: "FaqTwo",
      component: () => import("../components/f-a-q/FaqTwo.vue"),
    },
    {
      path: "/faq-three",
      name: "FaqThree",
      component: () => import("../components/f-a-q/FaqThree.vue"),
    },
    {
      path: "/faq-four",
      name: "FaqFour",
      component: () => import("../components/f-a-q/FaqFour.vue"),
    },
    {
      path: "/faq-five",
      name: "FaqFive",
      component: () => import("../components/f-a-q/FaqFive.vue"),
    },

    //contact
    {
      path: "/contact-one",
      name: "contact-one",
      component: () => import("../components/contact/contact-one.vue"),
    },
    {
      path: "/contact-two",
      name: "contact-two",
      component: () => import("../components/contact/contact-two.vue"),
    },
    {
      path: "/contact-three",
      name: "contact-three",
      component: () => import("../components/contact/contact-three.vue"),
    },
    {
      path: "/contact-four",
      name: "contact-four",
      component: () => import("../components/contact/contact-four.vue"),
    },
    {
      path: "/contact-five",
      name: "contact-five",
      component: () => import("../components/contact/contact-five.vue"),
    },

    //store buttons
    {
      path: "/store-buttons-one",
      name: "store-buttons-one",
      component: () => import("../components/buttons/store-buttons-one.vue"),
    },
    {
      path: "/store-buttons-two",
      name: "store-buttons-two",
      component: () => import("../components/buttons/store-buttons-two.vue"),
    },
    {
      path: "/store-buttons-three",
      name: "store-buttons-three",
      component: () => import("../components/buttons/store-buttons-three.vue"),
    },
    {
      path: "/gradient-button",
      name: "gradient-button",
      component: () => import("../components/buttons/gradient-button.vue"),
    },
    {
      path: "/social-buttons",
      name: "social-buttons",
      component: () => import("../components/buttons/social-buttons.vue"),
    },
    {
      path: "/sign-in-with-buttons",
      name: "sign-in-with-buttons",
      component: () => import("../components/buttons/sign-in-with-buttons.vue"),
    },
    {
      path: "/buttons-with-icon",
      name: "buttons-with-icon",
      component: () => import("../components/buttons/buttons-with-icon.vue"),
    },
    {
      path: "/fancy-leaf-like-button",
      name: "fancy-leaf-like-button",
      component: () =>
        import("../components/buttons/fancy-leaf-like-button.vue"),
    },
  ],

  // scrollBehavior() {
  //   return { top: 0, left: 0, behavior: "instant" };
  // },
});

export default router;
