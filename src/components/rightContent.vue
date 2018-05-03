<template>
   <div style="height:200px;background:#ccc;">
        <!-- <button class='btn btn-success' v-on:click="counterPlus">click me </button> -->
        <div>
            <button @click="getFn">get</button> 
            <button @click="postFn">Post</button> 
            <button @click="httpFn">Http</button> 
            <span>{{title}}</span>
        </div>
        
        <span>{{msg}}</span>
   </div>
</template>
<script>
    // import axios from 'axios'
    export default{
        name:"rightComponent",
        // props:['num'],
        data(){
            return{
                // num:0,
                title:'rightpage',
                msg:''
            }
            
        },
        mounted:function(){
            this.$axios.interceptors.request.use(function(config){
                console.log('config init');
                return config;
            })
            this.$axios.interceptors.response.use(function(res){
                console.log('res init');
                return res;
            })
        },
        methods:{
            postFn(){
                this.$axios.post('../test.json',{
                    params:{
                        userId:'101',
                    },
                    headers:{
                        token:'sdfjklsfjo',
                    }
                }).then(res=>{
                    this.msg=res.data;
                }).catch(err=>{
                    this.msg=err;
                })      
            }, 
            getFn(){
                this.$axios.get('../test.json',{
                    params:{
                        userId:'101',
                    },
                    headers:{
                        token:'sdfjklsfjo',
                    }
                }).then(res=>{
                    this.msg=res.data;
                }).catch(err=>{
                    this.msg=err;
                })   
            },
            httpFn(){
                this.$axios({
                    url:"package.json",
                    method:'get',
                    data:{
                        userName:'zzg',
                    },
                    headers:{
                        token:'helloAxios',
                    },
                }).then(
                    res=>{
                        this.msg=res.data;
                    }
                ).catch(
                   
                )
            }
        }

    }
</script>