<template>
  <form action="https://www.google.com/search" class="searchform" method="get" name="searchform" target="_blank">
    <a href="http://google.com" class="logo">
      <img alt="Google" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png">
    </a>
    <div class="bar">
      <input
        autocomplete="on"
        name="q"
        class="searchbar"
        type="text"
        title="Search"
        
        placeholder="Search on Google.com"
        >
      <!-- <a href="#"> <img class="voice" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png" title="Search by Voice"></a> -->
    </div>
    <div class="buttons">
      <button type="submit" class="button">Google Search</button>
    </div>
  </form>
</template>
<script>
export default {
  data: function() {
    return {}
  }
}
</script>
<style scoped lang="scss">
ul {
  list-style-type: none;
  overflow: hidden;
}

li {
  float: right;
}

li a {
  color: #000;
  display: block;
  text-align: center;
  padding: 10px 10px;
  text-decoration: none;
  font-size:14px;
}
li a:hover {
  text-decoration: underline;
}
.grid{
  height:23px;
  position:relative;
  bottom:4px;
}
.signbutton{
  background-color: #4885ed;
  color: #fff;
  border:none;
  border-radius:3px;
  padding:7px 10px;
  position:relative;
  bottom:7px;
  font-weight:bold;
}
.logo{
  display: flex;
  justify-content: center;
  margin-top:18px;
  margin-bottom:12px;
  > img {
    width: 160px;
  }
}
.bar{
  margin:0 auto;
  width: 380px;
  border-radius:30px;
  border:1px solid #dcdcdc;
}
.bar:hover{
  box-shadow: 1px 1px 8px 1px #dcdcdc;
}
.bar:focus-within{
  box-shadow: 1px 1px 8px 1px #dcdcdc;
  outline:none;
}
.searchbar{
  height:45px;
  border:none;
  font-size:16px;
  outline: none;
  margin-left: 19px;
  width: 338px;
}
.voice{
  height:20px;
  position:relative;
  top:5px;
  left:10px;
}
.buttons{
  margin-top: 16px;
  display: flex;
  justify-content: center;
}
.button{
  background-color: #f5f5f5;
  border:none;
  color:#707070;
  font-size:15px;
  padding: 10px 20px;
  margin:5px;
  border-radius:4px;
  outline:none;
}
.button:hover{
  border: 1px solid #c8c8c8;
  padding: 9px 19px;
  color:#808080;
}
.button:focus{
  border:1px solid #4885ed;
  padding: 9px 19px;
}


</style>