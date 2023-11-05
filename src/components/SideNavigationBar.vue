<template>
    <div class="col-auto p-0 bg-dark h-100">
        <div class="d-flex flex-column full">
            <ul class="nav flex-column mt-5 align-items-center align-items-sm-start" id="menu">
                <SideNavigationBarButton 
                    v-for="(btn, idx) in buttons"
                    :key="idx"
                    :icon="btn.iconClass"
                    :title="btn.title"
                    :has-dropdown="btn.hasDropdown"
                    :collapsable="btn.collapsable"
                    :collapse-target="btn.collapseTarget"
                    :dropdown-values="btn.dropdownValues"
                />
            </ul>
        </div>
    </div>
</template>

<style>
.full{
    align-items: stretch;
    width: fit-content;
}
</style>
<script lang="ts">
import SideNavigationBarButton from './SideNavigationBarButton.vue'

export default {
    data() {
        return {
            buttons: [
                { iconClass: 'bi bi-house-door', title: 'Home', hasDropdown: false },
                { iconClass: 'bi bi-book-half', title: 'About', hasDropdown: false },
                { 
                iconClass: 'bi bi-pencil', title: 'Projects', hasDropdown: true, 
                collapsable: "collapse", collapseTarget:"#projects-submenu", dropdownValues: ['rootedinnature', 'fitnessapp'] 
                },
                { iconClass: 'bi bi-globe-americas', title: 'Technology', hasDropdown: false },
                { iconClass: 'bi bi-diagram-3-fill', title: 'Learning', hasDropdown: false }
            ],
        }
    },
    components: {
        SideNavigationBarButton
    }, 
}
</script>