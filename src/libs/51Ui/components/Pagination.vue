<template>
    <div id="pagination">
        <span v-for="(value,index) in pages" 
            :key="index" 
            @click="changePage(value,index)" 
            :class="{
                activeDot:activeKey==value
            }"
        >
            {{value}}
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
        }
    }
}
</script>

<style scoped>
#pagination{
    border: 1px solid blue;
    display: inline-flex;
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
}
#pagination>.activeDot{
    background: cornflowerblue;
    border: 1px solid cornflowerblue;
    color: #fff;
}
</style>