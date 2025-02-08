<template>
    <div>
        <div class="relative inline-block">
            <!-- Read-only date input toggles the calendar popup -->
            <input type="text" readonly :value="formattedDate" @click="toggleCalendar"
                class="w-48 px-4 py-2 border rounded-md cursor-pointer focus:outline-none" placeholder="Select date" />

            <!-- Calendar Popup -->
            <div v-if="showCalendar" class="absolute z-10 p-4 mt-2 bg-white border rounded-md shadow-lg start-0 w-80">
                <!-- Calendar Header -->
                <div class="flex items-center justify-between mb-4">
                    <!-- Prev/Next Month Navigation -->
                    <i class="text-gray-600 fa-solid fa-circle-chevron-left fa-lg hover:text-gray-800 focus:outline-none"
                        @click="prevMonth"></i>
                    <!-- Month-Year Label: Click to toggle the month/year selector -->
                    <div @click="toggleMonthYearSelector" class="text-lg font-medium cursor-pointer">
                        {{ monthYear }}
                    </div>
                    <i class="text-gray-600 fa-solid fa-circle-chevron-right fa-lg hover:text-gray-800 focus:outline-none"
                        @click="nextMonth"></i>
                </div>

                <!-- Conditionally display either the Calendar Grid or the Month-Year Selector -->
                <div v-if="!showMonthYearSelector">
                    <!-- Days of the Week -->
                    <div class="grid grid-cols-7 gap-1 mb-2 text-xs font-medium text-center text-gray-500">
                        <div v-for="(day, index) in daysOfWeek" :key="index">{{ day }}</div>
                    </div>
                    <!-- Dates Grid -->
                    <div class="grid grid-cols-7 gap-1 text-center">
                        <!-- Placeholders for the first week -->
                        <div v-for="n in firstDayOffset" :key="'empty-' + n" class="h-8"></div>
                        <!-- Days -->
                        <button v-for="day in daysInMonth" :key="day" @click="selectDate(day)"
                            class="h-8 rounded-md hover:bg-blue-100 focus:outline-none"
                            :class="{ 'bg-blue-200': isSelected(day) }">
                            {{ day }}
                        </button>
                    </div>
                </div>

                <!-- Month-Year Selector -->
                <div v-else>
                    <!-- Month Selector -->
                    <div class="mb-4">
                        <h4 class="mb-2 font-semibold">Select Month</h4>
                        <div class="grid grid-cols-3 gap-2">
                            <button v-for="(monthName, index) in months" :key="index" @click="selectMonth(index)"
                                class="py-1 rounded" :class="{
                                    'bg-blue-500 text-white': index === currentMonth,
                                    'bg-gray-100 text-gray-700': index !== currentMonth
                                }">
                                {{ monthName }}
                            </button>
                        </div>
                    </div>
                    <!-- Year Selector -->
                    <div>
                        <h4 class="mb-2 font-semibold">Select Year</h4>
                        <select v-model="selectedYear" @change="selectYear" class="w-full p-1 border rounded-md">
                            <option v-for="year in yearsRange" :key="year" :value="year">{{ year }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// State for toggling the calendar popup and the month-year selector view
const showCalendar = ref(false);
const showMonthYearSelector = ref(false);
const selectedDate = ref(null);
const currentDate = ref(new Date());
const selectedYear = ref(currentDate.value.getFullYear());

// Toggle calendar popup visibility
const toggleCalendar = () => {
    showCalendar.value = !showCalendar.value;
    // When opening the calendar, reset the selector view
    if (showCalendar.value === true) {
        showMonthYearSelector.value = false;
    }
};

// Toggle month-year selector view
const toggleMonthYearSelector = () => {
    showMonthYearSelector.value = !showMonthYearSelector.value;
};

// Computed properties for current year and month
const currentYear = computed(() => currentDate.value.getFullYear());
const currentMonth = computed(() => currentDate.value.getMonth());

// Display month and year label (e.g., "August 2023")
const monthYear = computed(() => {
    return new Date(currentYear.value, currentMonth.value).toLocaleString('default', {
        month: 'long',
        year: 'numeric'
    });
});

// Days of the week (adjust as needed)
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Compute the number of days in the current month
const daysInMonth = computed(() => {
    return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
});

// Compute the offset for the first day of the month (0 for Sunday, 1 for Monday, etc.)
const firstDayOffset = computed(() => {
    return new Date(currentYear.value, currentMonth.value, 1).getDay();
});

// Format the selected date for display in the input field
const formattedDate = computed(() => {
    return selectedDate.value ? selectedDate.value.toLocaleDateString() : '';
});

// When a day is selected in the calendar grid
const selectDate = (day) => {
    selectedDate.value = new Date(currentYear.value, currentMonth.value, day);
    showCalendar.value = false;
};

// Check if a given day is selected
const isSelected = (day) => {
    if (!selectedDate.value) return false;
    return (
        selectedDate.value.getFullYear() === currentYear.value &&
        selectedDate.value.getMonth() === currentMonth.value &&
        selectedDate.value.getDate() === day
    );
};

// Navigate to the previous month
const prevMonth = () => {
    currentDate.value = new Date(currentYear.value, currentMonth.value - 1, 1);
    selectedYear.value = currentDate.value.getFullYear();
};

// Navigate to the next month
const nextMonth = () => {
    currentDate.value = new Date(currentYear.value, currentMonth.value + 1, 1);
    selectedYear.value = currentDate.value.getFullYear();
};

// Array of month names
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Compute a range of years (e.g., from current year - 10 to current year + 10)
const yearsRange = computed(() => {
    const base = currentYear.value;
    const start = base - 10;
    const end = base + 10;
    let years = [];
    for (let y = start; y <= end; y++) {
        years.push(y);
    }
    return years;
});

// Handler for selecting a month from the selector
const selectMonth = (monthIndex) => {
    currentDate.value = new Date(currentYear.value, monthIndex, 1);
    showMonthYearSelector.value = false;
};

// Handler for selecting a year from the dropdown
const selectYear = () => {
    currentDate.value = new Date(Number(selectedYear.value), currentMonth.value, 1);
    showMonthYearSelector.value = false;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>