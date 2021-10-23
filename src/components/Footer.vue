<template>
<div :class="{
    'text-bold text-xl py-3':true,
    'text-white':this.$store.state.mode == 'dark'
    }">
    &copy; Developed and Designed with 
    <span :class="{
        'icon-heart mx-1 ':true,
        'text-purple-900':this.$store.state.mode !== 'dark',
        'text-purple-500':this.$store.state.mode == 'dark'
        }">
    </span> 
    by 
    <a href="https://www.instagram.com/_zenku__/" :class="{
        'underline':true,
        'text-purple-900':this.$store.state.mode !== 'dark',
        'text-purple-500':this.$store.state.mode == 'dark'
        }">
        Zenku
    </a>
</div>
</template>
