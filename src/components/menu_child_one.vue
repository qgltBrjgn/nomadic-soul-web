<template>
    <div>
        <h2>menu_child_one</h2>
        <div class="connection">
            <p v-for="item in connectionList" :key="item.id">{{item.connectionIpUrl}}</p>
            <button @click="getConnectionUrl">getConnectionUrl</button>
        </div>
        <div class="connection">
            <p v-if="ipStr !== ''">{{ipStr}}</p>
            <p v-if="nation !== ''">{{nation}}</p>
            <p v-if="province !== ''">{{province}}</p>
            <p v-if="city !== ''">{{city}}</p>
            <p v-if="district !== ''">{{district}}</p>
            <button @click="showConnectionUrlInfo">showConnectionUrlInfo</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'menu_child_one',
        data() {
            return {
                connectionList: [],
                ipStr: '',
                province: '',
                city: '',
                nation: '',
                district: ''
            };
        },
        methods: {
            getConnectionUrl() {
                let that = this;
                this._UTIL.fpost(this._API.connectionInfo.getConnectionInfo, {}, function (data) {
                    that.connectionList = data.connectionList;
                });
            },
            showConnectionUrlInfo() {
                let that = this;
                this._UTIL.fpost(this._API.connectionInfo.getConnectionIpAddr, {}, function (data) {
                    that.ipStr = data.ipStr;
                    if (data.addStr.status === 0) {
                        that.province = data.addStr.result.ad_info.province;
                        that.city = data.addStr.result.ad_info.city;
                        that.nation = data.addStr.result.ad_info.nation;
                        that.district = data.addStr.result.ad_info.district;
                    }
                });
            }
        },
        mounted() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    .connection {
        margin-bottom: 20px;
    }
</style>
