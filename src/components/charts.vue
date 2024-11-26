<template>
    <div>
        <div class="chart-container">
            <svg :width="width" :height="height" class="line-chart" viewBox="0 0 500 300">
                <!-- X and Y Axes -->
                <line x1="0" y1="280" x2="500" y2="280" stroke="black" />
                <line x1="40" y1="0" x2="40" y2="300" stroke="black" />

                <!-- X-axis Labels -->
                <text v-for="(label, index) in data.labels" :key="`label-${index}`" :x="getX(index)" y="295"
                    text-anchor="middle" font-size="10">
                    {{ label }}
                </text>

                <!-- Y-axis Labels -->
                <text v-for="y in yTicks" :key="`y-label-${y}`" x="5" :y="getY(y)" font-size="10" text-anchor="end">
                    {{ y }}
                </text>

                <!-- Data Line -->
                <polyline :points="linePoints" fill="none" stroke="#4A5568" stroke-width="2" />
            </svg>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    data: {
        type: Object,
        required: true,
        default: () => ({
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            values: [600, 400, 620, 300, 200, 600],
        }),
    },
    width: {
        type: Number,
        default: 500,
    },
    height: {
        type: Number,
        default: 300,
    },
});

const chartHeight = 280;
const chartWidth = 460;

const yTicks = computed(() => {
    const max = Math.max(...props.data.values);
    const min = Math.min(...props.data.values);
    const step = Math.ceil((max - min) / 5);
    return Array.from({ length: 6 }, (_, i) => min + i * step).reverse();
});

const getX = (index) => (index / (props.data.labels.length - 1)) * chartWidth + 40;
const getY = (value) =>
    chartHeight - ((value - Math.min(...props.data.values)) / Math.max(...props.data.values)) * chartHeight;

const linePoints = computed(() => {
    return props.data.values
        .map((value, index) => `${getX(index)},${getY(value)}`)
        .join(" ");
});
</script>

<style scoped>
.chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: #f9f9f9;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
}

.line-chart {
    background-color: #ffffff;
}
</style>