<template>
  <nav class="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5]">
    <div class="text-xl">Bappa Flour mill</div>
    <div class="flex md:hidden">
      <button id="hamburger" @click="toggleMenu">
        <img class="block toggle" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40"
          height="40" />
        <img class="hidden toggle" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40"
          height="40" />
      </button>
    </div>
    <div class="hidden w-full mt-5 text-right toggle md:w-auto md:flex text-bold md:mt-0 md:border-none">
      <a href="#home" class="block px-3 py-3 md:inline-block hover:text-blue-500 md:border-none">Home
      </a>
      <a href="#services" class="block px-3 py-3 md:inline-block hover:text-blue-500 md:border-none">Services
      </a>
      <a href="#aboutus" class="block px-3 py-3 md:inline-block hover:text-blue-500 md:border-none">About us
      </a>
      <a href="#gallery" class="block px-3 py-3 md:inline-block hover:text-blue-500 md:border-none">Gallery
      </a>
      <a href="#contactUs" class="block px-3 py-3 md:inline-block hover:text-blue-500 md:border-none">Visit Us
      </a>
    </div>

    <div class="hidden w-full px-2 py-2 toggle text-end md:flex md:w-auto md:rounded">
      <a href="tel:+123">
        <div class="flex justify-end">
          <div class="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
            <!-- Heroicon name: phone -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call now
          </div>
        </div>
      </a>
    </div>

  </nav>
  <!-- hero seciton -->
  <div class="relative w-full h-[320px]" id="home">
    <div class="absolute inset-0 opacity-70">
      <img src="https://image1.jdomni.in/banner/13062021/0A/52/CC/1AF5FC422867D96E06C4B7BD69_1623557926542.png"
        alt="Background Image" class="object-cover object-center w-full h-full" />

    </div>
    <div class="absolute flex flex-col items-center justify-between inset-9 md:flex-row">
      <div class="mb-4 md:w-1/2 md:mb-0">
        <h1 class="mb-2 text-4xl font-medium leading-tight text-grey-700 md:text-5xl">Bappa Flour mill</h1>
        <p class="mt-4 mb-8 text-xl font-regular">One stop solution for flour grinding services</p>
        <a href="#contactUs"
          class="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200">Contact
          Us</a>
      </div>
    </div>
  </div>

  <!-- our services section -->
  <section class="py-10" id="services">
    <div class="container px-4 mx-auto">
      <h2 class="mb-8 text-3xl font-bold text-center text-gray-800">Our Services</h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div class="overflow-hidden bg-white rounded-lg shadow-md">
          <img
            src="https://image3.jdomni.in/banner/13062021/42/5C/B1/45AC18B7F8EE562BC3DDB95D34_1623559815667.png?output-format=webp"
            alt="wheat flour grinding" class="object-cover w-full h-64">
          <div class="p-6 text-center">
            <h3 class="mb-2 text-xl font-medium text-gray-800">Wheat Flour Grinding</h3>
            <p class="text-base text-gray-700">Our wheat flour grinding service provides fresh, high-quality
              flour to businesses and individuals in the area. We use state-of-the-art equipment to grind
              wheat into flour, and we offer a variety of flours to meet the needs of our customers.</p>
          </div>
        </div>
        <div class="overflow-hidden bg-white rounded-lg shadow-md">
          <img
            src="https://images.unsplash.com/photo-1606854428728-5fe3eea23475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhbSUyMGZsb3VyfGVufDB8fDB8fHww"
            alt="Coffee" class="object-cover w-full h-64">
          <div class="p-6 text-center">
            <h3 class="mb-2 text-xl font-medium text-gray-800">Gram Flour Grinding</h3>
            <p class="text-base text-gray-700">Our gram flour is perfect for a variety of uses, including
              baking, cooking, and making snacks. It is also a good source of protein and fiber.Our gram flour
              grinding service is a convenient and affordable way to get the freshest gram flour possible.</p>
          </div>
        </div>
        <div class="overflow-hidden bg-white rounded-lg shadow-md">
          <img
            src="https://image2.jdomni.in/banner/13062021/D2/99/0D/48D7F4AFC48C041DC8D80432E9_1623562146900.png?output-format=webp"
            alt="Coffee" class="object-cover w-full h-64">
          <div class="p-6 text-center">
            <h3 class="mb-2 text-xl font-medium text-gray-800">Jowar Flour Grinding</h3>
            <p class="text-base text-gray-700">Our jowar grinding service is a convenient and affordable way to
              get fresh, high-quality jowar flour. We use state-of-the-art equipment to grind jowar into a
              fine powder, which is perfect for making roti, bread, and other dishes.
            <details>
              <summary>Read More</summary>
              <p>Our jowar flour is also
                a good source of protein and fiber, making it a healthy choice for your family.</p>
            </details>
            </p>

          </div>
        </div>
        <div class="overflow-hidden bg-white rounded-lg shadow-md">
          <img
            src="https://images.unsplash.com/photo-1607672632458-9eb56696346b?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Coffee" class="object-cover w-full h-64">
          <div class="p-6 text-center">
            <h3 class="mb-2 text-xl font-medium text-gray-800">Chilli pounding</h3>
            <p class="text-base text-gray-700">We specializes in the production of high-quality chili powder.
              Our chili powder is made from the finest, freshest chilies, and we use traditional pounding
              methods to ensure that our chili powder retains its full flavor and aroma.
            <details>
              <summary>Read More</summary>
              <p> We offer a variety of chili powder products, including mild, medium, and hot. We also offer
                custom blends to meet the specific needs of our customers.</p>
            </details>
            </p>
          </div>
        </div>
        <!-- special card -->
        <div
          class="bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full">
          <div class="font-medium text-center text-white">Special product</div>
          <img
            src="https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmF3JTIwc3BhZ2hldHRpfGVufDB8fDB8fHww"
            alt="Coffee" class="object-cover w-full h-64 rounded-t-lg">
          <div class="p-6 text-center bg-white rounded-b-lg md:min-h-full">
            <h3 class="mb-2 text-xl font-medium text-gray-800">Flavoured Spaghetti</h3>
            <p class="text-base text-gray-700"><span class="font-medium underline">Our speciality is</span>
              Bappa Flour Mill offers a variety of flavored spaghetti dishes that are sure to tantalize your
              taste
              buds. We use only the freshest ingredients Our
              flavors include: Mango, spinach
            </p>
          </div>
        </div>

        <div class="overflow-hidden bg-white rounded-lg shadow-md">
          <img
            src="https://media.istockphoto.com/id/1265641298/photo/fried-papad.jpg?s=612x612&w=0&k=20&c=e_iEy4CTvU6Thn02zGgKt_TiSYAheCKmgfTF5j52ovU="
            alt="papad" class="object-cover w-full h-64">
          <div class="p-6 text-center">
            <h3 class="mb-2 text-xl font-medium text-gray-800">Rice Papad</h3>
            <p class="text-base text-gray-700">Our company produces high-quality rice papad that is made with
              the finest ingredients. We use traditional methods to make our papad, which gives it a unique
              flavor and texture. Our papad is also gluten-free and vegan.
            <details>
              <summary>Read More</summary>
              <p> We offer a variety of rice papad flavors, including plain, salted, spicy, and flavored. We
                also
                offer a variety of sizes and shapes to choose from. Our papad is available in bulk or in
                individual packages.</p>
            </details>
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- about us -->
  <section class="bg-gray-100" id="aboutus">
    <div class="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div class="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
        <div class="max-w-lg">
          <h2 class="mb-8 text-3xl font-bold text-center text-gray-800">About Us</h2>
          <p class="mt-4 text-lg text-gray-600">
            Bappa flour mill provides our customers with the highest quality products and services. We offer a
            wide variety of flours and spices to choose from, and we are always happy to help our customers find
            the perfect products for their needs.
            We are committed to providing our customers with the best possible experience. We offer competitive
            prices, fast shipping, and excellent customer service. We are also happy to answer any questions
            that our customers may have about our products or services.
            If you are looking for a flour and spices service business that can provide you with the highest
            quality products and services, then we are the company for you. We look forward to serving you!</p>
        </div>
        <div class="mt-12 md:mt-0">
          <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image"
            class="object-cover rounded-lg shadow-md">
        </div>
      </div>
    </div>
  </section>

  <!-- why us  -->
  <section class="mt-10 text-gray-700 body-font">
    <div class="flex justify-center text-3xl font-bold text-center text-gray-800">
      Why Us?
    </div>
    <div class="container px-5 py-12 mx-auto">
      <div class="flex flex-wrap justify-center text-center">
        <div class="p-4 md:w-1/4 sm:w-1/2">
          <div class="px-4 py-6 transition duration-500 transform hover:scale-110">
            <div class="flex justify-center">
              <img
                src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                class="w-32 mb-3">
            </div>
            <h2 class="text-2xl text-gray-900 title-font font-regular">Latest Milling Machinery</h2>
          </div>
        </div>

        <div class="p-4 md:w-1/4 sm:w-1/2">
          <div class="px-4 py-6 transition duration-500 transform hover:scale-110">
            <div class="flex justify-center">
              <img
                src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                class="w-32 mb-3">
            </div>
            <h2 class="text-2xl text-gray-900 title-font font-regular">Reasonable Rates</h2>
          </div>
        </div>

        <div class="p-4 md:w-1/4 sm:w-1/2">
          <div class="px-4 py-6 transition duration-500 transform hover:scale-110">
            <div class="flex justify-center">
              <img
                src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                class="w-32 mb-3">
            </div>
            <h2 class="text-2xl text-gray-900 title-font font-regular">Time Efficiency</h2>
          </div>
        </div>

        <div class="p-4 md:w-1/4 sm:w-1/2">
          <div class="px-4 py-6 transition duration-500 transform hover:scale-110">
            <div class="flex justify-center">
              <img
                src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                class="w-32 mb-3">
            </div>
            <h2 class="text-2xl text-gray-900 title-font font-regular">Expertise in Industry</h2>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- gallery -->
  <section class="text-gray-700 body-font" id="gallery">
    <div class="flex justify-center py-10 text-3xl font-bold text-center text-gray-800">
      Gallery
    </div>

    <div class="grid grid-cols-1 gap-4 p-4 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

      <div class="relative group">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Image 1"
          class="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
      </div>

      <div class="relative group">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Image 1"
          class="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
      </div>

      <div class="relative group">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Image 1"
          class="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
      </div>
      <div class="relative group">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Image 1"
          class="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" />
      </div>



      <!-- Repeat this div for each image -->
    </div>

  </section>

  <!-- Visit us section -->
  <section class="bg-gray-100">
    <div class="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8">
      <div class="max-w-2xl mx-auto text-center lg:max-w-4xl">
        <h2 class="text-3xl font-extrabold text-gray-900" id="contactUs">Visit Our Location</h2>
        <p class="mt-3 text-lg text-gray-500">Let us serve you the best</p>
      </div>
      <div class="mt-8 lg:mt-20">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div class="max-w-full mx-auto overflow-hidden rounded-lg">
              <div class="px-6 py-4 border-t border-gray-200">
                <h3 class="text-lg font-bold text-gray-900">Contact</h3>
                <p class="mt-1 font-bold text-gray-600"><a href="tel:+123">Phone: +91
                    123456789</a></p>
                <a class="flex m-1" href="tel:+919823331842">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-between h-10 p-2 text-white bg-indigo-500 rounded-md w-30">
                      <!-- Heroicon name: phone -->
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      Call now
                    </div>
                  </div>

                </a>
              </div>
              <div class="px-6 py-4">
                <h3 class="text-lg font-medium text-gray-900">Our Address</h3>
                <p class="mt-1 text-gray-600">Sale galli, 60 foot road, Latur</p>
              </div>
              <div class="px-6 py-4 border-t border-gray-200">
                <h3 class="text-lg font-medium text-gray-900">Hours</h3>
                <p class="mt-1 text-gray-600">Monday - Sunday : 2pm - 9pm</p>
              </div>
            </div>
          </div>
          <div class="order-none overflow-hidden rounded-lg sm:order-first">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.7850672491236!2d76.58802159999999!3d18.402630699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83ca88e84341%3A0x841e547bf3ad066d!2zQmFwcGEgZmxvdXIgbWlsbCB8IOCkrOCkquCljeCkquCkviDgpKrgpYDgpKAg4KSX4KS_4KSw4KSj4KWALCDgpK7gpL_gpLDgpJrgpYAg4KSV4KS-4KSC4KSh4KSqIOCkhuCko-CkvyDgpLbgpYfgpLXgpL7gpK_gpL4!5e0!3m2!1sen!2sin!4v1713433597892!5m2!1sen!2sin"
              class="w-full" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>

        </div>
      </div>
    </div>
  </section>
  <!-- footer -->
  <section>
    <footer class="px-3 py-4 text-white bg-gray-200">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <div class="w-full mb-8 md:w-1/2 md:text-center md:mb-4">
          <p class="text-xs text-gray-400 md:text-sm">Copyright 2024 &copy; All Rights Reserved</p>
        </div>
        <div class="w-full mb-8 md:w-1/2 md:text-center md:mb-0">
          <ul class="flex flex-wrap justify-center gap-3 text-xs list-reset md:text-sm">
            <li><a href="#contactUs" class="text-gray-400 hover:text-white">Contact</a></li>
            <li class="mx-4"><a href="/privacy" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  console.log(isMenuOpen.value)
};
</script>