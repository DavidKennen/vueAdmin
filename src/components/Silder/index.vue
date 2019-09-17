<template>
    <div class="silder">
    
          
           <slot></slot>
      
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.silder{
    height: 100%;
    min-height: 700px;
    a:hover{
        .circle{
             background-color: rgba(26, 188, 156, 0.8);
        }
        color: rgba(26, 188, 156, 0.8);
    }
    .router-link-active{
        background-color: #fff;
        .circle{
             background-color: rgba(26, 188, 156, 0.8);
        }
        color: rgba(26, 188, 156, 0.8);
    }
    a{
        .circle{
            display: inline-block;
            width: 6px;
            height: 6px;
            background-color: #666666;
            border-radius: 50%;
        }
        display: block;
        height: 39px;
        line-height: 39px;
        border-bottom: 1px solid rgba(228, 228, 228, 1);
        padding-left: 20px;
        list-style-type: circle;
        color: #666666;
    }
}
</style>