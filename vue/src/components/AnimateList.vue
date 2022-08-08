<template>
    <TransitionGroup 
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        name="todo">
        <slot></slot>
    </TransitionGroup>
</template>

<script setup>
import gsap from 'gsap';

const prop = defineProps({
    duration: { default: 1 },
    delay: { default: 0.2 }
})

const beforeEnter = el => {
    gsap.set(el, {
        opacity: 0
    });
}

const enter = el => {
    gsap.to(el, {
        opacity: 1,
        duration: prop.duration,
        delay: el.dataset.index * prop.delay
    });
}

</script>

<style lang="scss" scoped>
.todo-leave-to {
    opacity: 0;
    transform: scale(0);
}

.todo-leave-active {
    transition: 1s ease;
    position: absolute;
}

.todo-move {
    transition: all 1s ease;
}
</style>