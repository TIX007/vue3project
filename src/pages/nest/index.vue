<template>
    <div class="ifram">
        <div>三方</div>
        <iframe id="iframe" src="http://www.fengling.xyz/miaomiao/#/movie/NowPlaying" style=" height: 100%" width="100%"
            frameborder="0"></iframe>
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style scoped>
.ifram {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
</style>