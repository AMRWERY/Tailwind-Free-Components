<template>
    <div>
        <div class="relative font-[sans-serif] pt-[70px] h-screen">
            <header
                class='flex shadow-md py-1 px-4 sm:px-7 bg-white min-h-[70px] tracking-wide z-[110] fixed top-0 w-full'>
                <div class='relative flex flex-wrap items-center justify-between w-full gap-4'>
                    <router-link to="">
                        <img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
                    </router-link>

                    <div ref="collapseMenu" id="collapseMenu"
                        class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                        <button ref="toggleClose" id="toggleClose"
                            class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                            <i class="text-black fa-solid fa-xmark fa-lg"></i>
                        </button>

                        <div
                            class="max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                            <div class='flex items-center gap-8 max-lg:flex-col-reverse max-lg:ml-auto'>
                                <div
                                    class='flex w-full bg-gray-100 px-4 py-2.5 rounded outline-none border focus-within:border-blue-600 focus-within:bg-transparent transition-all'>
                                    <input type='text' placeholder='Search something...'
                                        class='w-full text-sm bg-transparent rounded outline-none pe-2' />
                                    <i class="text-gray-400 cursor-pointer fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div class='flex items-center space-x-6 max-lg:flex-wrap'>
                                    <i
                                        class="fa-solid fa-house fa-lg cursor-pointer text-[#333] hover:text-[#077bff]"></i>

                                    <i
                                        class="fa-solid fa-bell fa-lg cursor-pointer text-[#333] hover:text-[#077bff]"></i>

                                    <i
                                        class="fa-regular fa-square-plus fa-lg cursor-pointer text-[#333] hover:text-[#077bff]"></i>
                                </div>

                                <div class="relative flex dropdown-menu shrink-0 group">
                                    <img src="https://readymadeui.com/team-1.webp" alt="profile-pic"
                                        class="border-2 border-gray-300 rounded-full cursor-pointer w-9 h-9 max-lg:w-16 max-lg:h-16" />

                                    <div
                                        class="absolute right-0 hidden w-56 p-2 bg-white rounded-md shadow-md dropdown-content group-hover:block top-9">
                                        <div class="w-full">
                                            <router-link to=""
                                                class="flex items-center p-2 text-sm text-gray-800 transition duration-300 ease-in-out rounded-md cursor-pointer hover:bg-gray-100 dropdown-item">
                                                <i class="fa-solid fa-user fa-lg me-3"></i>
                                                Account
                                            </router-link>
                                            <hr class="my-2 -mx-2" />

                                            <router-link to=""
                                                class="flex items-center p-2 text-sm text-gray-800 transition duration-300 ease-in-out rounded-md cursor-pointer hover:bg-gray-100 dropdown-item">
                                                <i class="fa-solid fa-chart-line fa-lg me-3"></i>
                                                Dashboard
                                            </router-link>

                                            <router-link to=""
                                                class="flex items-center p-2 text-sm text-gray-800 transition duration-300 ease-in-out rounded-md cursor-pointer hover:bg-gray-100 dropdown-item">
                                                <i class="fa-regular fa-square-plus fa-lg me-3"></i>
                                                Posts
                                            </router-link>

                                            <router-link to=""
                                                class="flex items-center p-2 text-sm text-gray-800 transition duration-300 ease-in-out rounded-md cursor-pointer hover:bg-gray-100 dropdown-item">
                                                <i class="fa-regular fa-clock fa-lg me-3"></i>
                                                Schedules
                                            </router-link>

                                            <router-link to=""
                                                class="flex items-center p-2 text-sm text-gray-800 transition duration-300 ease-in-out rounded-md cursor-pointer hover:bg-gray-100 dropdown-item">
                                                <i class="fa-solid fa-right-from-bracket fa-lg me-3"></i>
                                                Logout
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button ref="toggleOpen" id="toggleOpen" class='lg:hidden !ml-7 outline-none'>
                        <i class="fa-solid fa-bars fa-lg"></i>
                    </button>
                </div>
            </header>

            <div>
                <div class="flex items-start">
                    <nav ref="sidebar" id="sidebar" class="lg:min-w-[250px] w-max max-lg:min-w-8">
                        <div ref="sidebarCollapseMenu" id="sidebar-collapse-menu" style="height: calc(100vh - 72px)"
                            class="bg-white shadow-lg h-screen fixed py-6 px-4 top-[70px] left-0 overflow-auto z-[99] lg:min-w-[250px] lg:w-max max-lg:w-0 max-lg:invisible transition-all duration-500">
                            <ul class="space-y-2">
                                <li>
                                    <router-link to=""
                                        class="flex items-center px-4 py-2 text-sm text-gray-800 transition-all rounded-md hover:bg-gray-100">
                                        <i class="fa-solid fa-house-chimney me-3 fa-lg"></i>
                                        <span>Dashboard</span>
                                    </router-link>
                                </li>
                            </ul>

                            <div class="mt-6">
                                <h6 class="px-4 text-sm font-bold text-blue-600">Information</h6>
                                <ul class="mt-3 space-y-2">
                                    <li>
                                        <router-link to=""
                                            class="flex items-center px-4 py-2 text-sm text-gray-800 transition-all rounded-md hover:bg-gray-100">
                                            <i class="fa-solid fa-address-card fa-lg me-3"></i>
                                            <span>Audience</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to=""
                                            class="flex items-center px-4 py-2 text-sm text-gray-800 transition-all rounded-md hover:bg-gray-100">
                                            <i class="fa-solid fa-signs-post fa-lg me-3"></i>
                                            <span>Posts</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to=""
                                            class="flex items-center px-4 py-2 text-sm text-gray-800 transition-all rounded-md hover:bg-gray-100">
                                            <i class="fa-solid fa-calendar-week fa-lg me-3"></i>
                                            <span>Schedules</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to=""
                                            class="flex items-center px-4 py-2 text-sm text-gray-800 transition-all rounded-md hover:bg-gray-100">
                                            <i class="fa-solid fa-rectangle-ad fa-lg me-3"></i>
                                            <span>Promote</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>

                            <div class="mt-6">
                                <h6 class="px-4 text-sm font-bold text-blue-600">Income</h6>
                                <ul class="mt-3 space-y-2">
                                    <li>
                                        <router-link to=""
                                            class="flex items-center px-4 py-2 text-sm text-gray-800 transition-all rounded-md hover:bg-gray-100">
                                            <i class="fa-solid fa-sack-dollar fa-lg me-3"></i>
                                            <span>Earnings and taxes</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to=""
                                            class="flex items-center px-4 py-2 text-sm text-gray-800 transition-all rounded-md hover:bg-gray-100">
                                            <i class="fa-solid fa-hand-holding-dollar fa-lg me-3"></i>
                                            <span>Refunds</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>

                            <div class="mt-6">
                                <h6 class="px-4 text-sm font-bold text-blue-600">General Settings</h6>
                                <ul class="mt-3 space-y-2">
                                    <li>
                                        <router-link to=""
                                            class="flex items-center px-4 py-2 text-sm text-gray-800 transition-all rounded-md hover:bg-gray-100">
                                            <i class="fa-solid fa-shield-halved fa-lg me-3"></i>
                                            <span>Security</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to=""
                                            class="flex items-center px-4 py-2 text-sm text-gray-800 transition-all rounded-md hover:bg-gray-100">
                                            <i class="fa-solid fa-asterisk fa-lg me-3"></i>
                                            <span>Preferences</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to=""
                                            class="flex items-center px-4 py-2 text-sm text-gray-800 transition-all rounded-md hover:bg-gray-100">
                                            <i class="fa-solid fa-bell fa-lg me-3"></i>
                                            <span>Notification Settings</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to=""
                                            class="flex items-center px-4 py-2 text-sm text-gray-800 transition-all rounded-md hover:bg-gray-100">
                                            <i class="fa-solid fa-user fa-lg me-3"></i>
                                            <span>Account Deactivation</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>

                            <div class="mt-6">
                                <h6 class="px-4 text-sm font-bold text-blue-600">Actions</h6>
                                <ul class="mt-3 space-y-2">
                                    <li>
                                        <router-link to=""
                                            class="flex items-center px-4 py-2 text-sm text-gray-800 transition-all rounded-md hover:bg-gray-100">
                                            <i class="fa-regular fa-id-card fa-lg me-3"></i>
                                            <span>Profile</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to=""
                                            class="flex items-center px-4 py-2 text-sm text-gray-800 transition-all rounded-md hover:bg-gray-100">
                                            <i class="fa-solid fa-right-from-bracket fa-lg me-3"></i>
                                            <span>Logout</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <button ref="sidebarToggleBtn" id="toggle-sidebar"
                        class='lg:hidden w-8 h-8 z-[100] fixed top-[74px] left-[10px] cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full outline-none transition-all duration-500'>
                        <i class="text-white fa-solid fa-chevron-right"></i>
                    </button>

                    <!-- body content -->
                    <section class="w-full p-6 overflow-auto main-content">
                        <div class="overflow-x-auto">
                            <table class="min-w-full bg-white">
                                <thead class="bg-gray-800 whitespace-nowrap">
                                    <tr>
                                        <th class="p-4 text-sm font-medium text-left text-white">
                                            Name
                                        </th>
                                        <th class="p-4 text-sm font-medium text-left text-white">
                                            Email
                                        </th>
                                        <th class="p-4 text-sm font-medium text-left text-white">
                                            Role
                                        </th>
                                        <th class="p-4 text-sm font-medium text-left text-white">
                                            Joined At
                                        </th>
                                        <th class="p-4 text-sm font-medium text-left text-white">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody class="whitespace-nowrap">
                                    <tr class="even:bg-blue-50">
                                        <td class="p-4 text-sm text-black">
                                            Jams david
                                        </td>
                                        <td class="p-4 text-sm text-black">
                                            jams@example.com
                                        </td>
                                        <td class="p-4 text-sm text-black">
                                            Candidate
                                        </td>
                                        <td class="p-4 text-sm text-black">
                                            2018-09-04
                                        </td>
                                        <td class="p-4">
                                            <button class="mr-4" title="Edit">
                                                <i
                                                    class="text-blue-500 fa-regular fa-pen-to-square fa-lg hover:text-blue-700"></i>
                                            </button>
                                            <button class="mr-4" title="Delete">
                                                <i
                                                    class="text-red-500 fa-regular fa-trash-can fa-lg hover:text-red-700"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const toggleOpen = ref(null);
const toggleClose = ref(null);
const collapseMenu = ref(null);
const sidebarToggleBtn = ref(null);
const sidebar = ref(null);
const sidebarCollapseMenu = ref(null);

function handleHeaderClick() {
    if (collapseMenu.value) {
        collapseMenu.value.style.display =
            collapseMenu.value.style.display === 'block' ? 'none' : 'block';
    }
}

function handleSidebarToggle() {
    if (sidebarCollapseMenu.value && sidebarToggleBtn.value) {
        if (!sidebarCollapseMenu.value.classList.contains('open')) {
            sidebarCollapseMenu.value.classList.add('open');
            sidebarCollapseMenu.value.style.cssText =
                'width: 250px; visibility: visible; opacity: 1;';
            sidebarToggleBtn.value.style.cssText = 'left: 236px;';
        } else {
            sidebarCollapseMenu.value.classList.remove('open');
            sidebarCollapseMenu.value.style.cssText =
                'width: 32px; visibility: hidden; opacity: 0;';
            sidebarToggleBtn.value.style.cssText = 'left: 10px;';
        }
    }
}

onMounted(() => {
    if (toggleOpen.value) {
        toggleOpen.value.addEventListener('click', handleHeaderClick);
    }
    if (toggleClose.value) {
        toggleClose.value.addEventListener('click', handleHeaderClick);
    }
    if (sidebarToggleBtn.value) {
        sidebarToggleBtn.value.addEventListener('click', handleSidebarToggle);
    }
});

onUnmounted(() => {
    if (toggleOpen.value) {
        toggleOpen.value.removeEventListener('click', handleHeaderClick);
    }
    if (toggleClose.value) {
        toggleClose.value.removeEventListener('click', handleHeaderClick);
    }
    if (sidebarToggleBtn.value) {
        sidebarToggleBtn.value.removeEventListener('click', handleSidebarToggle);
    }
});
</script>