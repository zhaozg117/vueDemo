<template>
   <div>
        <button class='btn btn-success' v-on:click="counterPlus">click me </button>
        <span>{{num}}</span>
   </div>
</template>
<script>
    export default{
        name:"childComponent",
        props:['num'],
        data(){
            return{
                // num:0,
                zzg:'zhaozhigang'
            }
            
        },
        methods:{
            counterPlus(){
                this.$emit("incre");
            }
        }

    }
</script>