<template>
    <div>
        <span><span>*</span> 所在地区：</span>
        <select v-model="province">
            <option v-for='c in provinces' value={{$index}}>
                {{c.name}}
            </option>
            <option value="province11">
                --省份--
            </option>
        </select>
        <select v-model="city">
            <option v-for='c in citys' value={{$index}}>
                {{c.name}}
            </option>
            <option value="city12">
                --城市--
            </option>
        </select>
        <select v-model="area">
            <option v-for='c in areas' value={{$index}}>
                {{c.name}}
            </option>
            <option value="area13">
                --市区--
            </option>
        </select>
    </div>
</template>
<script type="text/javascript">
	export default{
		vuex:{
			getters:{
				provinces:state => state.city
			}
		},
        data(){
            return {
                province:'province11',
                city:'city12',
                area:'area13',
                citys:[],
                areas:[]
            };
        },
        watch:{
          province(a, b){
            this.city= "city12";
            this.area = 'area13';
            this.citys =[];
            this.areas =[];
            if(this.provinces[a]){
                this.citys = this.provinces[a].children;
            }
          },
          city(a, b){
            this.area = 'area13';
            this.areas =[];
            if(this.citys[a]){
                this.areas = this.citys[a].children;
            }
          },
          area(a, b){
            
          }
        }
	};
</script>