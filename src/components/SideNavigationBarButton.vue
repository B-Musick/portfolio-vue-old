<template>
    <div style="width: 100%;">
        <a
            class="nav-link fs-5 w-100 side-navbar-button" 
            data-bs-toggle="collapse"
            href="#projects-menu"
            aria-current="page"
        >
            <i :class="icon"><span class="d-none d-lg-inline px-2">{{ title }}</span></i>
        </a>
        <ul v-if="hasDropdown" class="collapse flex-column bg-light list-group rounded-0" id="projects-menu">
            <li v-for="(val, index) in dropdownValues" class="fs-6 side-navbar-button list-group-item px-3" :key="index">
                <router-link 
                    :to="'/'+title.toLowerCase()+'/'+val" 
                    class="nav-link p-0 navy-font"
                >
                <i :class="icon"><span class="d-none d-lg-inline">{{ val.slice(0,1).toUpperCase() + val.slice(1,) }}</span></i>
                </router-link >
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    props:{
        // https://vuejs.org/guide/components/props.html
        title: String,
        icon: String,
        hasDropdown: Boolean,
        collapsable: String,
        collapseTarget: String,
        dropdownValues: Array
    }
}
</script>