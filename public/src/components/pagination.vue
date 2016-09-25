<template>
	<div class="paginations" >
		<button type="button" class="btn btn-pagination-up" v-bind:disabled="currentPage == 1 " v-on:click.prevent="(currentPage == 1) ? return : currentPage--"><span aria-hidden="true">上一页</span></button>
		<button type="button" class="btn  btn-pagination {{ currentPage == 1 ?  'active' : '' }}" v-on:click.prevent="currentPage = 1" v-show="showPrev">1</button>
		<span class="btn btn-pagination" v-show="showPrev">...</span>
		<button type="button"
		class="btn btn-pagination {{ $index + diff == currentPage ? 'active' : '' }}"
		v-for="item in pageLinks"
		v-on:click.prevent="currentPage = $index + diff">{{$index + diff}}
	</button>
	<span class="btn btn-pagination" v-show="showNext">...</span>
	<button type="button" class="btn btn-pagination {{ numberOfPages == currentPage ? 'active' : '' }}" v-show="showNext" v-on:click.prevent="currentPage = numberOfPages">{{numberOfPages}}</button>
	<button type="button" class="btn btn-pagination-up" v-bind:disabled="currentPage == numberOfPages" v-on:click.prevent="(currentPage == numberOfPages) ? return : currentPage++"><span aria-hidden="true">下一页</span></button>
	</div>
</template>
<script>
	export default {
		props: {
			currentPage: {
				type: Number,
				default: 1,
				twoWay:true
			},
			limit: {
				type: Number,
				default: 7,
			},
			perPage: {
				type: Number,
				default: 20,
			},
			totalRows: {
				type: Number,
				default: 20,
			}
		},
		replace: true,
		data() {
			return {
				diff: 1,
				showPrev: false,
				showNext: false
			};
		},
		computed: {
			numberOfPages() {
				const result = Math.ceil(this.totalRows / this.perPage);
				return (result < 1) ? 1 : result;
			},
			pageLinks() {
				let result = this.limit;
				if (this.currentPage > this.numberOfPages) {
					this.currentPage = 1;
				}
				this.diff = 1;
				this.showPrev = false;
				this.showNext = false;
				if (this.numberOfPages <= this.limit) {
					return this.numberOfPages;
				}
				if (this.currentPage <= this.limit - 2) {
					this.diff = 1;
					this.showNext = true;
					result = this.limit - 2;
				}

				if (this.currentPage > this.numberOfPages - this.limit + 2) {
					this.diff = this.numberOfPages - this.limit + 3;
					this.showPrev = true;
					result = this.limit - 2;
				}
				if (this.currentPage >= this.limit - 2 && this.currentPage <= this.numberOfPages - this.limit + 2) {
					this.diff = this.currentPage - 1;
					this.showPrev = true;
					this.showNext = true;
					result = this.limit - 4;
				}
				return result;
			},
		}
	};
</script>
<style type="text/css">
	.btn-pagination-up,
	.btn-pagination {
		background: #ffffff;
		border: 1px solid #979797;
		border-radius: 0;
		margin: 0 5px;
		/* height: 35px; */
		transition: 0.8s;
	}
	.btn-pagination.active{
		background: #ddd;
	}
	button.btn.btn-pagination-up,
	button.btn.btn-pagination.active,
	button.btn.btn-pagination{
		outline: none;
	}
	.paginations {
	}
</style>