<template>
    <div id="job_top_menu">
        <div class="job_logo">
            <div></div>
            <div>前程无忧实习生管理平台</div>
        </div>
        <div class="job_operate">
            <div class="job_operate_config">
                <div>
                    <svg t="1629601235340" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2733" xmlns:xlink="http://www.w3.org/1999/xlink" width="38" height="38"><path d="M881.152 512c0-52.224 32.768-96.768 78.848-114.688-10.752-43.008-28.16-83.968-50.176-121.344-45.056 19.968-99.84 11.776-136.704-25.088-36.864-36.864-45.056-91.648-25.088-136.704-37.376-22.016-78.336-39.424-121.344-50.176-17.92 46.08-61.952 78.848-114.688 78.848-52.224 0-96.768-32.768-114.688-78.848-43.008 10.752-83.968 28.16-121.344 50.176 19.968 45.056 11.776 99.84-25.088 136.704s-91.648 45.056-136.704 25.088c-22.528 37.376-39.424 78.336-50.176 121.344 46.08 17.92 78.848 61.952 78.848 114.688 0 52.224-32.768 96.768-78.848 114.688 10.752 43.008 28.16 83.968 50.176 121.344 45.056-19.968 99.84-11.776 136.704 25.088 36.864 36.864 45.056 91.648 25.088 136.704 37.376 22.016 78.336 39.424 121.344 50.176 17.92-46.08 61.952-78.848 114.688-78.848 52.224 0 96.768 32.768 114.688 78.848 43.008-10.752 83.968-28.16 121.344-50.176-19.968-45.056-11.776-99.84 25.088-136.704s91.648-45.056 136.704-25.088c22.528-37.376 39.424-78.336 50.176-121.344-46.08-17.92-78.848-62.464-78.848-114.688zM512 634.88c-68.096 0-122.88-55.296-122.88-122.88s55.296-122.88 122.88-122.88 122.88 55.296 122.88 122.88-54.784 122.88-122.88 122.88z" fill="#8AA3CA" p-id="2734"></path></svg>
                </div>
                <div>设置</div>
                <div class="job_operate_toggle">
                    <p>系统设置</p>
                    <p>个人设置</p>
                </div>
            </div>
            <div class="job_operate_head">
                <div>
                    <svg t="1629601896893" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3624" xmlns:xlink="http://www.w3.org/1999/xlink" width="46" height="46"><path d="M517.075 1002.044a484.977 484.977 0 1 0-484.977-484.97 485 485 0 0 0 484.977 484.97z" fill="#FFFFFF" p-id="3625"></path><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-50.048A461.952 461.952 0 1 0 50.048 512 461.944 461.944 0 0 0 512 973.952z" fill="#8a8a8a" p-id="3626"></path><path d="M155.67 822.136c34.952-94.584 149.512-209.731 252.575-209.731H615.77c103.093 0 208.128 127.119 243.08 221.74-86.686 89.322-222.667 160.957-346.842 160.791-124.176 0.166-269.651-83.448-356.337-172.77z m356.338-256.045a185.36 185.36 0 1 1 184.47-185.359A184.93 184.93 0 0 1 512 566.092z" fill="#8a8a8a" p-id="3627"></path></svg>
                </div>
                <div>admin</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'JobTopMenu'

}
</script>

<style scoped>
#job_top_menu{
    font-family: 'Microsoft Yahei', arial, verdana, helvetica, sans-serif;;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
}
.job_logo{
    display: flex;
    align-items: center;
}
.job_logo>div:nth-child(1){
    width: 70px;height: 70px;
    border-radius: 50%;
    background-image: url(../../../assets/images/job_logo.png);
    background-size: 100% 100%;
}
.job_logo>div:nth-child(2){
    margin-left: 10px;
    font-size: 20px;color: #fa6602;
    font-weight: 600;
}
.job_operate{
    display: flex;
    align-items: center;
}
.job_operate>div:nth-child(1){
    margin-right: 30px;
}

.job_operate_head,.job_operate_config{
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
}
.job_operate_config>div:nth-child(1){
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

}
.job_operate_config:hover .job_operate_toggle{
    height: 80px;
    border-top: 3px solid rgba(244,121,32,0.6);
}
.job_operate_toggle{
    height: 0px;
    width: 120px;
    position: absolute;
    top: 100%;left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.16);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    transition: all 0.3s ease-in-out;
}
.job_operate_toggle>p:nth-child(1){
    margin-bottom: 8px;
}
.job_operate_toggle>p{
    font-size: 15px;
    transition: all 0.2s linear;
}
.job_operate_toggle>p:hover{
    color: rgba(244,121,32,1);
}
.job_operate_head>div:nth-child(1){
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s linear;
}
.job_operate_head>div:nth-child(1):hover{
    background: rgba(138,138,138,0.3);
}
</style>