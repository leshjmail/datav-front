/** 
* ★ Create 2023-10-17
* ★ Author YJ 
* ★ Desc -- */

<template>
  <DatavRender ref="vfDesigner" :options="options"></DatavRender>
</template>

<script>
export default {
  name: '',
  props: {},
  components:{},
  data() {
    return {
      modal: false,
      showClose: false,
      formJson: {},
      formData: {},
      optionData: {},
      options:{
        versionId:""
      }
    };
  },
  created() {},
  beforeMount() {
    const {versionId} = this.$route.query
    this.options.versionId = versionId || "276169455149514752185";
  },
  methods: {}
};
</script>