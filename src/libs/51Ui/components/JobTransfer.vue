<template>
    <div class="job_transfer">
        <div class="job_transfer_top"></div>

        <div class="job_transfer_content">
            <div class="job_content_origin">
                
            </div>
            <div class="job_content_select">

            </div>
            <button class="job_btn_add">向右</button>
            <button class="job_btn_reduce">向左</button>
        </div>

        <div class="job_transfer_btn"></div>
    </div>
</template>

<script>
export default {
    name:'JobTransfer'

}
</script>

<style scoped>
.job_transfer{
    width: 480px;
    height: 320px;
    border-radius: 8px;
    border: 2px solid #ccc;
    position: fixed;
    top: 50%;left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
}
.job_transfer_top{
    height: 42px;
    border: 1px solid cyan;
}



.job_transfer_content{
    flex: 1 1;
    border: 1px solid blue;
    padding: 5px 15px;
    display: flex;
    position: relative;
}
.job_transfer_content>div{
    border: 1px solid red;
    flex: 1 1;
    /* margin: 5px; */
}
.job_content_origin{
    margin-right: 15px;
}
.job_content_select{
    margin-left: 15px;
}

.job_btn_add{
    position: absolute;
    left: 50%;top: 30%;
    transform: translateX(-50%);
}
.job_btn_reduce{
    position: absolute;
    left: 50%;top: 70%;
    transform: translateX(-50%);
}



.job_transfer_btn{
    height: 42px;
    border: 1px solid green;
}
</style>