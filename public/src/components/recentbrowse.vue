<template>
    <div class="xg-recentBrowse" id="recentBrowse">
        <div class="recentBrowseHead">
            最近浏览 <span>清空</span>
        </div>
        <div class="xg-recentBrowseC">
            <div v-for="r in recentBrowse">
                <div>
                    <img src={{r.img}}>
                </div>
                <div>
                    <div class="xg-recentBrowseCName">
                        {{r.name}}
                    </div>
                    <span class="xg-co">
										¥{{r.unitPrice}}
									</span> 门店价：
                    <s>¥{{r.originalPrice}}</s>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
	vuex:{
 			getters:{
 				recentBrowse: state => state.recentBrowse
 			}
 		}
};
</script>
