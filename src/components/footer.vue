<template>
	<div class="download-app">
        <div class="info">
            <img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" width="48">
            <div class="info-content">
                <strong>豆瓣</strong>
                <div>我们的精神角落</div>
            </div>
        </div>
            <a href="https://www.douban.com/doubanapp/card/log?category=movie_home&amp;cid=&amp;action=click_download&amp;ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_movie_home%26direct_dl%3D1" rel="nofollow">去 App Store 免费下载 iOS 客户端</a>
    </div>
</template>

<script>
	export default {
		name: 'header',
		data () {
			return {
	
			}
		}
	}	

</script>

<style>
.download-app {
	height:2.585365rem;
	padding: 0 0 20px 0;
	margin-top: 100px;
	margin-bottom:100px;
	text-align: center;
	font-size: 0.365853rem;
}
.download-app .info {
    margin: 0 auto 15px;
    overflow: hidden;
    text-align: left;
    font-size: 0.341463rem;
    display: inline-block;
    color: #111;
}
.download-app .info img {
    float: left;
    margin-right: 12px;
}
.download-app .info-content {
    overflow: hidden;
}
.download-app .info strong {
    font-size: 0.585365rem;
    font-weight: normal;
    line-height: 0.682926rem;
}
.download-app .info .info-content div {
    white-space: pre;
    line-height: 0.487804rem;
}
.download-app .info+a {
    display: block;
}
</style>