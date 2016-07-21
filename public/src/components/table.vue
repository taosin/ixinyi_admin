<template>
    <div class="">
        <table class="table" id="table">
            <thead>
                <tr>
                    <th v-for="key in columnsname" class="thead_th" :style="{width:columnswidth[key]}">{{key}}  <i v-show="columnsclickable[key] !== '0'" class="glyphicon" v-bind:class="{ 'glyphicon-sort':issort,'glyphicon-arrow-up':isup,'glyphicon-arrow-down':isdown}" @click="sortby"></i></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="record in newData" @click="rowClick($index)" id="tr_{{$index}}">
                    <td class="grid_td" v-for="key in columnskey" v-gridcell="record[key]">
                    </td>
                </tr>
                
            </tbody>
        </table>
        <div>
          <div class="dataTables_info">
            第{{pageCurrent+1}} /{{pageTotal}}页 每页{{pagesize}}条/共{{total?total:0}}条记录
        </div>
        <ul class="pagination">
            <li v-on:click="clickToPrev()" v-show="isshow" class="paginate_button previous">
                <a>上一页</a>
            </li>
            <li v-on:click="clickToPage(index+startnums-1)" v-for="index in shownums" class="paginate_button">
                <a id="clickToPage_{{$index}}" :class="{paginate_active:activePage==index}">{{index+startnums}}</a></li>
                <li v-on:click="clickToNext()" v-show="show" class="paginate_button next ">
                    <a>下一页</a>
                </li>
            </ul>
        </div>
        <div id="table_expand" style="position:absolute;width:97%;display:none">
            <slot name="table_expand" >
            </slot>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    module.exports = {
        props: ['data', 'url', 'total', 'pagesize', 'columns'],
        inherit: true,
        data() {
            let isshow = true;
            let shownum = 10;
            const pagesize = this.pagesize ? this.pagesize : 10;
            const pagesizetotal = this.getpagenationsize(this.total ? this.total : this.data.length, pagesize);
            if (pagesizetotal <= 10) {
                isshow = false;
                shownum = pagesizetotal;
            }
            const columnObject = this.translateColumns(this.columns);
            return {
                columnsname: columnObject[0],
                columnskey: columnObject[1],
                columnsrender: columnObject[2],
                columnswidth: columnObject[3],
                columnsclickable: columnObject[4],
                show: isshow,
                startnums: 1,
                shownums: shownum,
                rownumstart: 0,
                rownumend: 0,
                pageCurrent: 0,
                activePage: 0,
                showpagination:this.$parent.showpagination,
                newData:this.$deepCopy(this.data),
                sort:1,
                isup:false,
                isdown:false,
                issort:true,
                isopen:1
            };
        },
        computed: {
            pageTotal: {
                get() {
                    return this.getpagenationsize(this.total, this.pagesize);
                }
            }
        },
        watch: {
            data(values) {
             this.newData = Vue.prototype.$deepCopy(values);
             this.renderHtml(this.newData);
         },
         columns(value) {
            const columnObject = this.translateColumns(value);
            this.columnsname = columnObject[0];
            this.columnskey = columnObject[1];
            this.columnsrender = columnObject[2];
            this.columnswidth = columnObject[3];
            this.columnsclickable = columnObject[4];
        },
        total(value) {
            const self = this;
            const pagesize = self.pagesize ? self.pagesize : 10;
            if (!value){
                value = self.total;
            }
            const pagesizetotal = self.getpagenationsize(value, pagesize);
            if (pagesizetotal <= 10) {
                self.isshow = false;
                self.shownums = pagesizetotal;
            } else {
                self.shownums = 10;
                self.isshow = true;
            }
            self.pageCurrent = 0;
        }
    },
    directives: {
        gridcell(html) {
            const cell = document.createElement('DIV');
            cell.innerHTML = html;
            this.vm.$compile(cell);
            this.el.innerHTML = '';
            this.el.appendChild(cell);
        }
    },
    compiled(){
        this.renderHtml(this.newData);
    },
    methods: {
        renderHtml(values) {
         values.forEach((value, index) => {
            Object.keys(this.columnsrender).forEach((key) => {
                if(this.columnsrender[key]){
                  value[key] = this.columnsrender[key](value[key], value, index);
              }
          });
        });
     },
     clickToPage(index) {
        const arr = [];
        this.activePage = index - this.startnums + 1;
        const params = this.$parent.params ? this.$parent.params : {};
        for (let i = 0; i < params.length; i++) {
            const name = params[i];
            arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(params[name]));
        }
                // for (const name in params) {
                //     arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(params[name]));
                // }
                let url = this.$parent.url + '?start=' + index * (this.pagesize ? this.pagesize : 10) + '&limit=' + this.pagesize;
                if (arr.length > 0) {
                    url = url + '&' + arr.join('&');
                }
                this.rownumstart = index * (this.pagesize ? this.pagesize : 10);
                this.rownumend = parseInt((index + 1) * this.pagesize, 0);
                this.pageCurrent = index;
                const self = this;
                this.$http.get(url, (data) => {
                    if (data.code === 100) {
                        self.$parent.gridData = data.data.records;
                    }
                });
            },
            clickToNext() {
                const nextPageIndex = this.startnums + 10;
                const pagesizetotal = this.getpagenationsize(this.total, this.pagesize);
                if (nextPageIndex <= pagesizetotal) {
                    if ((nextPageIndex + 10) >= pagesizetotal) {
                        this.startnums = nextPageIndex;
                        this.shownums = pagesizetotal - this.startnums + 1;
                    } else {
                        this.startnums = nextPageIndex;
                        this.shownums = 10;
                    }
                    this.clickToPage(nextPageIndex - 1);
                }
            },
            clickToPrev() {
                const prevPageIndex = this.startnums - 10;
                if (prevPageIndex >= 0) {
                    this.shownums = 10;
                    this.startnums = prevPageIndex;
                    this.clickToPage(prevPageIndex - 1);
                }
            },
            getpagenationsize(total, pagesize) {
                if (!total) {
                    return 1;
                }
                if (total <= pagesize) {
                    return 1;
                }
                if (parseInt(total % pagesize, 0) === 0) {
                    return parseInt(total / pagesize, 0);
                }
                return parseInt(total / pagesize, 0) + 1;
            },
            translateColumns(columnsMap) {
                const columnsname = [];
                const columnskey = [];
                const columnsrender = {};
                const columnswidth={};
                const columnsclickable = {};
                for (const key in columnsMap) {
                    if (typeof(columnsMap[key]) === 'string') {
                        columnsname.push(columnsMap[key]);
                        columnswidth[key]='100px';
                    } else {
                        columnsname.push(columnsMap[key].text);
                        columnsrender[key] = columnsMap[key].render;
                        columnswidth[columnsMap[key].text]=columnsMap[key].width;
                        columnsclickable[columnsMap[key].text] = columnsMap[key].clickable;
                    }
                    columnskey.push(key);
                }
                return [columnsname, columnskey, columnsrender, columnswidth, columnsclickable];
            },

            // 展开行
            rowClick(index) {
                if (this.$parent.rowClick && this.$isFunc(this.$parent.rowClick)) {
                    this.$parent.rowClick(index);
                }
            },
            edit() {
                if (this.$parent.edit && this.$isFunc(this.$parent.edit)) {
                    this.$parent.edit.apply(this, arguments);
                }
            },
            add() {
                if (this.$parent.add && this.$isFunc(this.$parent.add)) {
                    this.$parent.add.apply(this, arguments);
                }
            },
            del() {
                if (this.$parent.del && this.$isFunc(this.$parent.del)) {
                    this.$parent.del.apply(this, arguments);
                }
            },
            custome(index) {
                if (this.$parent.custome && this.$isFunc(this.$parent.custome)) {
                    // this.$parent.custome.apply(this, arguments);
                    this.$parent.custome(index);
                }
            },
            sortby(){
                if (this.$parent.sortby && this.$isFunc(this.$parent.sortby)) {
                    this.$parent.sortby.apply(this, arguments);
                    this.sort = this.sort * -1;
                    switch(this.sort) {
                        case 1:
                        this.isdown = false;
                        this.isup = true;
                        this.issort = false;
                        break;
                        case -1:
                        this.isdown= true;
                        this.isup= false;
                        this.issort = false;
                        break;
                        default:
                        this.isdown= false;
                        this.isup= false;
                        this.issort = true;
                    }
                }
            },
            openRow(index){
                if (this.$parent.openRow && this.$isFunc(this.$parent.openRow)) {
                    if(document.getElementById('tr_'+index).offsetHeight === document.getElementById('table_expand').offsetHeight + 40){
                        $('tr').removeAttr('style');

                        document.getElementById('table_expand').style.display='none';
                    }else{
                        this.$parent.openRow(index);
                        document.getElementById('table_expand').style.display='block';
                        const sheight= document.getElementById('table_expand').offsetHeight;
                        const height= sheight+40;
                        const height2= (4 * (index+1)) + 120;
                        $('tr').removeAttr('style');
                        document.getElementById('tr_'+index).style.height=height+'px';
                        document.getElementById('table_expand').style.top=height2+'px';
                    }
                }
            }
        }
    };
</script>
<style type="text/css">
    .dataTables_info{
     margin-top: 20px;
 }
 .thead_th{
    text-align: center;
}
.paginate_active{
  border: 1px red solid!important;
  border-radius: 5px;
  z-index: 2;
}

</style>
