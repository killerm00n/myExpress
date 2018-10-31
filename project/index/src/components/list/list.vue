<template>
    <section class="page-list">
        <div v-if="!isNone" v-for="(link , index) in list" :key="link.id+index">
            <router-link :to="setLink(link)">{{link.title}}</router-link>
        </div>
        <div v-else>
            敬请期待...
        </div>
    </section>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return {
            isNone: false,
            top: [],
            list: []
        }
    },
    created(){
        let listType = this.$route.query.type;
        axios.get(`/list/${listType}_list.json`).then(res=>{
            this.$set(this,'top',res.data.top);
            this.$set(this,'list',res.data.list);
        }).catch(res=>{
            this.isNone = true;
        });
    },
    methods: {
        setLink(link){
            return `/${link.page}?${link.key}=${link.id}`
        }
    }
}
</script>

<style scoped>
    .page-list{

    }
</style>
