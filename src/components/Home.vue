<template>
  <div class="contain">
    <div class="head">
      <h1>Home</h1>
      <router-link to="/history"><button>History</button></router-link>
    </div>
    <div class="frmctrl">
        <form @submit.prevent="jumps(this.x1, this.v1, this.x2, this.v2)">
          <label name="x1">X1</label>
          <input type="number" name="x1" v-model="x1">
          <label name="v1">V1</label>
          <input type="number" name="v1" v-model="v1">
          <label name="x2">X2</label>
          <input type="number" name="x2" v-model="x2">
          <label name="v2">V2</label>
          <input type="number" name="v2" v-model="v2">
          <input type="submit">
        </form>
    </div>
    <div>
      <h3>Results</h3>
      <div>
        <p>X1: {{result.x1}}</p>
        <p>V1: {{result.v1}}</p>
        <p>X2: {{result.x2}}</p>
        <p>V2: {{result.v2}}</p>
        <p>Outcome: {{result.returnVal}}</p>
      </div>   
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      x1: null,
      v1: null,
      x2: null,
      v2: null,
      result: [],
      results: []
    }
  },
  methods:{
       jumps(x1, v1, x2, v2){
        let returnVal = "NO";
       if ((x1 - x2) % (v2 - v1) === 0 && !(x2 > x1 && v2 > v1)) {
       returnVal = "YES";
         }
         this.result = {x1, v1, x2, v2, returnVal}
         this.results.push({x1, v1, x2, v2, returnVal})
         localStorage.setItem('results', JSON.stringify(this.results))    
      }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contain{
  display: flex;
  flex-direction: column;
  .head{
    display: flex;
    justify-content: center;
    align-items: center;
    a{
      padding: 75px;
      
    }
  }
  .frmctrl{
    //width: 400px;
    background: white;
    padding: 20px;
    label{
        font-size: 16px;
        font-weight: 600;
        padding-right: 3px;
    }
    input{
        margin: 8px;
        height: 30px;
        background:  rgba(158, 226, 165, 0.73);
        border: none;
        border-radius: 3px;
        outline: none;
        font-size: 16px;  
    }
       input[type="submit"]{
        height: 30px;
        width: 130px;
        background: #1466DB;
        border-radius: 3px;
        color: white;
        font-size: 16px;
        margin-right: 10px;
    }
  }
  button{
        position: absolute;
        right: 150px;
        width: 88px;
        height: 30px;
        background: #1466DB;
        color: white;
        border: none;
        border-radius: 3px;
  }
}

</style>
