<template>
  <div class="h-100 d-flex flex-column align-items-end w-100">
    <!-- <router-link class="nav-item" @click="scrollToElement" to="/projects/rootedinnature">rooted</router-link> -->
    <ProjectItem v-for="project in projects" :ref="project.name" :id="project.name" :key="project.name" :project="project" />
  </div>
</template>

<script lang="ts">
import ProjectItem from '@/components/ProjectItem.vue';
import projectsJSON from '../projects.json';

export default{
  updated() {
      this.$nextTick(() => {
          this.scrollToElement();
      })
  },
  data(){
      return {
          projects: projectsJSON['projects']
      }
  },
  components: {
      ProjectItem
  }, 
  methods: {
      scrollToElement() {
          // let ref = String(this.$route.params.id);
          console.log(this.$route.params)
          const el = document.getElementById(this.$route.params.id);
          console.log(el);
          if (el) {
              // https://stackoverflow.com/questions/40730116/scroll-to-bottom-of-div-with-vue-js
              // Use el.scrollIntoView() to instantly scroll to the element
              el.scrollIntoView({ behavior: 'smooth' });
          }

      }
  },
  beforeRouteUpdate(to, from) {
      // https://stackoverflow.com/questions/43461882/update-vuejs-component-on-route-change
      this.$nextTick(() => {
          // https://stackoverflow.com/questions/60619183/this-refs-or-document-are-not-visible-in-mounted-unless-i-use-settimeout
          if(to.params.id !== from.params.id)
              this.scrollToElement();
      })
  }
}
</script>