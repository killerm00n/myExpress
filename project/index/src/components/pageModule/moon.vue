<template>
    <section class="page-section page-moon">
        <div class="page-moon_wrap">
            <img class="page-moon_img" src="./../../assets/moon.png" alt="月亮">
        </div>
        <div class="page-moon_stars">
            <span class="page-moon_star" v-for="(star , index) in stars" :style="StarStyle(star)" :key="'star_'+index + '_' + star.id"></span>
        </div>

        <div class="page-links">
            <router-link class="page-link" to="/list?type=articles">随想·创作</router-link>
            <router-link class="page-link" to="/list?type=works">工作·技术</router-link>
            <router-link class="page-link" to="/list?type=ideas">创意·游戏</router-link>
        </div>
        <!-- <h1 class="title">Building...</h1> -->
    </section>
</template>

<script>
export default {
    data(){
        return {
            stars: [],
            starNums: 10,
        }
    },
    created(){
        let tempStars = [];
        for(let i = 0; i < this.starNums; i++){
            let ry = Math.random();
            tempStars.push({
                id: i,
                left: Math.random() * 100,
                top: ry * 100,
                scale: (Math.random() * 0.5 + 0.8).toFixed(2),
                opacity: 1.3 - ry
            })
        }
        this.$set(this,'stars',tempStars)
    },
    methods: {
        StarStyle(star){
            // console.log(star)
            return `left:${star.left}%;top:${star.top}%;-webkit-transform:scale(${star.scale});opacity:${star.opacity};`;
        }
    }
}
</script>

<style scoped>
.page-section{
    height:80vh;
    background:#000;
    position: relative;
}
.page-moon_wrap{
    position: absolute;
    right:0;
    top:5vh;
    z-index: 2;
}
.page-moon{

}
.page-moon_img{
    width:25vw;
    margin:0 10vw 0 0;
}

.moon_stars{
    
}
.page-moon_star{
    position: absolute;
    width:.04rem;
    height:.04rem;
    background:#fff;
    border-radius:.1rem;
    box-shadow: 0 0 3px 1px #fff
}

.title{
    position: fixed;
    z-index: 3;
    top:40vh;
    width:100vw;
    text-align: center;
    color:#fff;
    text-shadow: 0 0 10px #fff;
}

.page-links{
    position: fixed;
    z-index: 5;
    width: 40vw;
    top:30vh;
    left:0;
    right:0;
    margin:auto;
}

.page-link{
    text-decoration: none;
    color:#fff;
    display: block;
    font-size:.5rem;
    font-weight: bold;
    text-shadow: 0 0 10px #fff;
    margin:0 0 .5rem 0;
}
</style>
