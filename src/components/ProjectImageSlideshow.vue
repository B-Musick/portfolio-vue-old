<template>
    <!-- Load in project images (Create separate component) -->
    <div class="project-image" v-for="(image, index) in imageData" :key="index">
    <!-- Loop through the image items and create these objects -->
        <div class="project-image-holder h-100" :class="[{ projectImageHolderActive: index === imageCount }, projectImageHolderInactive]">
            <!-- need require: https://stackoverflow.com/questions/72559017/local-images-not-loading-in-vue -->
            <img class="project-image-item" :src='imageSrc(image)'>
        </div>

        <!-- Dynamically load in the caption associated with an image -->
        <div class="caption-container" :class="[{ projectImageHolderActive: index === imageCount }, projectImageHolderInactive]">
            <p class="caption">
                {{ image.caption }}
            </p>
        </div>    
    </div>
    <a @click="imageCount--" class="project-image-holder-prev position-absolute w-auto px-2 text-white d-flex align-items-center"><div class="slideshow-arrow">❮</div></a>
    <a @click="imageCount++" class="project-image-holder-next position-absolute w-auto px-2 text-white d-flex align-items-center"><div class="slideshow-arrow">❯</div></a>
</template>

<script lang="ts">
export default{
    data(){
        return{
            imageCount: 0,
            projectImageHolderActive: 'projectImageHolderActive',
            projectImageHolderInactive: 'projectImageHolderInactive'
        }
    },
    props: {
        imageData: Object
    },
    methods: {
        imageSrc(image) {
            return new URL('../assets/images/projects/'+image.url, import.meta.url).href;
        }
    },
    watch:{
        imageCount(updatedCount){
            this.imageCount = Math.abs(updatedCount % this.imageData.length)
        }
    }
}
</script>

<style lang="scss">
/**
TODO: get these classes so they can be placed within the sass, and have dashes between */
.projectImageHolderActive{
    display: block !important; 
    height: 70%;

}
.projectImageHolderInactive{
    display: none;
}
.project-image {
    &-holder{        
        &-active{ 
            display: flex;
            justify-content: center;
            width: 100%;
        }

        &-inactive{
            display: none; /* Hide the slideshow images*/
        }

        /* Next & previous buttons  */
        &-prev,
        &-next {
            cursor: pointer;
            top: 0%;
            padding-top: 27%;
            padding-bottom: 27%;
            background-color: rgba(0, 0, 0, 0.2);
            font-size: 12px;
        }

        &-prev{
            left:0;
        }
        /* Position the "next button" to the right */
        &-next {
            right: 0;
        }

        /* On hover, add a black background color with a little bit see-through */
        &-prev:hover,
        &-next:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }
    }

    &-item {
        max-width: 100%;
        height: 100%;
        width: auto\9; /* ie8 */
    }
}

.caption-container{
    height: 115px;
    background-color: rgb(28, 28, 28);
    color:white;
}

.caption{
    margin-block: 0;
    padding: 1em;
}
/****************************************************************************** 
Slideshow classes added
- Source: https: //www.w3schools.com/howto/howto_js_slideshow_gallery.asp
******************************************************************************/
</style>