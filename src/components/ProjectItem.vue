<template>
    <div class="project min-vh-100 w-100 d-flex align-items-center justify-content-end ml-3">
        <div class="container shadow-lg w-75">
            <div class="row px-0">
                <div class="project-grid-left col-8 position-relative">
                    <ProjectImageSlideShow :imageData="project.imageData" />
                </div>
                
                <div class="project-grid-right col-4 p-3 container position-relative">
                    <div class="row">
                        <div class="project-title">{{ project.name }}</div>
                    </div>
                    <div class="row">
                        <div>{{ project.description }}</div>
                    </div>
                    <div class="row w-100 pb-3" style="position: absolute; bottom:0px;">
                        <div class="project-links d-flex">
                        <a :href="project.website">
                            <i class="bi bi-globe text-dark"></i>
                        </a>
                        <!-- Template binding href: https://vuejs.org/guide/essentials/template-syntax.html#shorthand -->
                        <a :href="project.github_link">
                            <i class="bi bi-github text-dark"></i>
                        </a>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import ProjectImageSlideShow from './ProjectImageSlideshow.vue'

export default {
    components: {
        ProjectImageSlideShow
    },
    props: {
        project: Object
    }
}
</script>

<style lang="scss">
.project{
    background-color: rgb(154, 181, 185);

    &-title{
        color:rgb(103, 167, 224);
    }

    &-grid{
        &-left {
            padding: 0 !important;
            margin: 0 !important;
        }
        &-right{
            background-color: aliceblue;
        }
    }

    &-links{
        justify-content: space-evenly;
        font-size: 25px;
        cursor: pointer;
    }
}
</style>