<template>
    <div id="pagination">
        <span 
            :class="{
                noSelect:currentPage<=1
            }" 
            @click="prevPage"
        >
            <svg t="1630630711718" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2175" width="12" height="12"><path d="M254.89 512l448-448 60.417 60.33-448 448L254.89 512z m60.758-60.672L769.10899999 904.533l-60.58599999 60.416-453.12-453.376 60.33-60.33z" p-id="2176" fill="#515151"></path></svg>
        </span>
        <span v-for="(value,index) in pages" 
            :key="index" 
            @click="changePage(value,index)" 
            :class="{
                activeDot:activeKey==value
            }"
        >
            {{value}}
        </span>
        <span
            :class="{
                noSelect:currentPage>=allPages
            }" 
            @click="nextPage"
        >
            <svg t="1630630728439" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2414" width="12" height="12"><path d="M769.109333 512l-448 448-60.416-60.330667 448-448 60.416 60.330667z m-60.757333 60.672L254.890667 119.466667 315.477333 59.050667 768.597333 512.426667l-60.330666 60.330666z" fill="#515151" p-id="2415"></path></svg>
        </span>
    </div>
</template>

<script>
export default {
    name:'Pagination',
    props:{
        totalPages:{
            type:[String,Number],
            default:28
        },
        value:[String,Number]
    },
    data(){
        return{
            currentPage:this.value,
            activeKey:this.value,
            allPages:this.totalPages
        }
    },
    computed:{
        pages(){
            let temPage=this.currentPage;
            let temtotal=this.allPages;
            if(temPage<5&&temPage>0&&temtotal>7){
                return [1,2,3,4,5,'...',temtotal]
            }else if(temPage<temtotal&&temPage>temtotal-4&&temtotal>7){
                return [1,'...',temtotal-4,temtotal-3,temtotal-2,temtotal-1,temtotal]
            }else if(temPage>=5&&temPage<=temtotal-4&&temtotal>7){
                return [1,'...',temPage-2,temPage-1,temPage,temPage+1,temPage+2,'...',temtotal]
            }else if(temtotal<=7){
                let temporaryArr=[]
                for(let i=1;i<=temtotal;i++){temporaryArr.push(i)}
                return temporaryArr
            }else{
                return [1,'...',temtotal-4,temtotal-3,temtotal-2,temtotal-1,temtotal]
            }
        }
    },
    methods:{
        changePage(val,i){
            if(!Number(val)) return;
            this.activeKey=val;
            this.currentPage=val;
            this.$emit('input',val)
        },
        nextPage(){
            if(this.currentPage>=this.allPages) return;
            console.log("下一页");
            this.currentPage=this.currentPage+1;
            this.activeKey=this.currentPage
        },
        prevPage(){
            if(this.currentPage<=1) return;
            console.log("上一页");
            this.currentPage=this.currentPage-1
            this.activeKey=this.currentPage
        }
    }
}
</script>

<style scoped>
#pagination{
    display: inline-flex;
    align-items: center;
}
#pagination>span{
    width: 28px;
    height: 28px;
    border: 1px solid #ccc;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 2px 3px;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    font-size: 14px;
    transition: all 0.2s linear;
}
#pagination>span:hover{
    color: cornflowerblue;
}
#pagination>span:last-child,
#pagination>span:first-child{
    width: 42px;
    height: 25px;
}
#pagination>span:last-child:hover,
#pagination>span:first-child:hover{
    border: 1px solid cornflowerblue;
}
#pagination>.activeDot{
    background: cornflowerblue;
    border: 1px solid cornflowerblue;
    color: #fff !important;
}

.noSelect{
    background: rgb(204, 202, 202);
    cursor: not-allowed !important;
    border: none !important;
}
</style>