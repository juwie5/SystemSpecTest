<template>
 <div class="contain">
     <div class="head">
         <h1>History</h1>
        <router-link to="/"><button>Home</button></router-link>
     </div>
    <div class="tab">
        <table>
            <tr>
                <th>X1</th>
                <th>V1</th>
                <th>X2</th>
                <th>V2</th>
                <th>Outcome</th>
            </tr>
            <tr v-for="item in outcomes" :key="item">
                <td>{{item.x1}}</td>
                <td>{{item.v1}}</td>
                <td>{{item.x2}}</td>
                <td>{{item.v1}}</td>
                <td>{{item.returnVal}}</td>
            </tr>  
        </table>
    </div>
    <div class="his">
        <button @click="getStorage">Refresh</button>
        <button @click="clearStorage">Reset</button> 
     </div>
 </div>   
</template>

<script>
export default {
    name: 'History',
    data(){
        return{
            outcomes:[{x1: 0, v1: 0, x2: 0, v2: 0, returnVal: "NO"},
                    {x1: 1, v1: 1, x2: 1, v2: 1, returnVal:"NO"}
            ]
        }
    },
    methods:{
        getStorage(){
            let rest = localStorage.getItem('results')
            let storedResults = (JSON.parse(rest))
            this.outcomes.push(...storedResults)
        },
        clearStorage(){
            localStorage.clear()
        }
    },
    created(){
        this.getStorage()
    }
    
}
</script>

<style lang="scss"> 
  

</style>