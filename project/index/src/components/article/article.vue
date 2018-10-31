<template>
    <section class="page-article">
        <section class="page-article_con" v-html="content"></section>
    </section>
</template>

<script>
import { markdown } from "markdown";
import ajax from "./../../utils/ajax.js";
import axios from "axios";
export default {
    data(){
        return {
            content:"",
        }
    },
    created(){
        let artId = this.$route.query.articleId
        // let _this = this;
        axios.get(`/${artId}.md`, {
            responseType: 'text'
        }).then(res => {
            this.content = markdown.toHTML(res.data);
        })
        // ajax({
        //     url: `/${artId}.md`,
        //     type: 'get',
        //     success(res){
        //         console.log("正文res:" , res);
        //         _this.content = markdown.toHTML(res);
        //     }
        // })
    },
    mounted(){
        
    }
}
</script>

<style scoped>
    .page-article_con{
        font-size:.3rem;
    }
</style>
