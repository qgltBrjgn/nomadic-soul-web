<template>
    <div>
        <h2>menu_child</h2>
        <button @click="getConnectionUrl">getConnectionUrl</button>
    </div>
</template>

<script>
    export default {
        name: 'menu_child',
        props: {
            msg: String
        },
        methods: {
            getConnectionUrl() {
                console.log('click');
                this._UTIL.fpost(this._API.connectionInfo.getConnectionInfo, {}, function (data) {
                        console.log(data);
                    });
            }
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
</style>
