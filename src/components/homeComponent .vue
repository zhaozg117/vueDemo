<template>
   <div>
        <!-- <button class='btn btn-success' v-on:click="counterPlus">click me </button> -->
        <span>{{title}}</span>
        <!-- <span>{{$route.params.num}}</span>
        <span>{{$route.params.name}}</span> -->
        <div>
            <router-link to="/home/left">left</router-link>
            <router-link to="/home/right">right</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
        
   </div>
</template>
<script>
    // import  vue-resource from 
    export default{
        name:"homeComponent",
        props:['num'],
        data(){
            return{
                // num:0,
                title:'homepage'
            }
            
        },
        methods:{
            
        }

    }
</script>