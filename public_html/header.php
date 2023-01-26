
<script type="text/javascript">
function day(){
    document.body.style.background = "black";
    document.body.style.color = "white";
    document.getElementById("day").style.display="none";
    document.getElementById("night").style.display="inline";

}
function night(){
   document.body.style.background = "white";
    document.body.style.color = "black";
    document.getElementById("day").style.display="inline";
    document.getElementById("night").style.display="none";

}

function da(){
    document.body.style.background = "black";
    document.body.style.color = "white";
    document.getElementById("da").style.display="none";
    document.getElementById("nig").style.display="inline";

}
function nig(){
   document.body.style.background = "white";
    document.body.style.color = "black";
    document.getElementById("da").style.display="inline";
    document.getElementById("nig").style.display="none";

}

function tab(){
     document.getElementById("form").style.display="block";


}
function cancel(){
    document.getElementById("form").style.display="none";
}

function navo(){
    document.getElementById("nav").style.display="inline";
    document.getElementById("navo").style.display="none";
    document.getElementById("navon").style.display="inline";
 document.querySelector(".container").style.display="none";



}
function navon(){
    document.getElementById("nav").style.display="none";
    document.getElementById("navon").style.display="none";
    document.getElementById("navo").style.display="inline";
    document.querySelector(".container").style.display="inline";
 document.querySelector(".navbar-inverse").style.display="inline";

}
const ok= window.location.href;
document.body.innerHTML = document.body.innerHTML.replace(ok, '#');





</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>

#grad {
  background-image: linear-gradient(to right, #f4505e,#f0536b,#e35b90,#dc61a6,#d466bd,#bf7dee,#8a8bec,#56a3eb,#ca85ef);
  margin-top:none !important;
}

.mob{
    display:none;
}
@media only screen and (max-width: 600px) {
     .comp{
        display:none;
     }
     .mob{
    display:block;
}


}
ul{
    list-style-type: none;
}
li{
    display:inline;
    color:white;
    margin-top:1ex;
    margin-bottom:1ex;
}
li a{
    color:white;
}


#nig{
    display:none;
}
#night{
    display:none;
}
#form{
    display:none;
}
#nav{
    display:none;
}
#navon{
    display:none;
}
.header{
 
  
}
</style>
<div class="header">
<div class="comp">

<nav class="navbar" id="grad" style="overflow: hidden;border: none; box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2);margin-top:-1.2ex;">
  <div class="container-fluid">
      <ul class="nav navbar-nav" style="font-family: Times New Roman;font-size:20px;">
       <li><a href="index" style="font-weight:bold;font-size:28px;" id="trending">T<img src="koi-fish (3).png" style="margin-top:-0.5ex;">P2TEN ASIA</a></li>
      <li><a href="index" style="font-weight:bold;margin-left:5ex;" id="trending">TRENDING</a></li>
        <li><a href="Top2Ten [Asia]-Quiz" style="font-weight:bold" id="kdrama">QUIZ</a></li>
        <li><a href="top-10-lists" style="font-weight:bold" id="popular">TOP 10 LIST</a></li>
        
        </ul>
        <ul class="nav navbar-nav navbar-right">
        <li id="day"><button type='button' class="fa fa-sun-o" aria-hidden="true" style="margin-top:0.8ex;margin-right:2ex;border:none;background:transparent;font-size:30px;" onclick="day()"  title="Night Mode"></button></li>
        <li id="night"><button type='button'class="fa fa-moon-o" aria-hidden="true" style="margin-top:0.8ex;border:none;margin-right:2ex;background:transparent;font-size:30px;color:white"  onclick="night()" title="Day Mode"></button></li>
      <!--
<button  style="margin-top:0.5ex;border:none;background:transparent;font-size:30px;color:black"  class="fa fa-user-circle" aria-hidden="true"  onclick="tab()" ></button>
-->
  </ul>        
        
        
     
    
</nav>
</div>

<div class="mob">
<div style=";background:#fd2870">
<center><li style="font-size:26px;color:white;font-family:Times new roman;background:#fd2870">T<img src="koi-fish (3).png" style="margin-top:-0.5ex;">P2TEN ASIA</li></center>
</div>
<div style="width:100%;height:10ex;" id="grad">
  <center style="text-align:left">
<div style="float:right;margin-right:2.5ex;">
<button id="da" type='button' class="fa fa-sun-o" aria-hidden="true" style="margin-top:1.2ex;border:none;background:transparent;font-size:28px;text-align:right;color:white" onclick="da()"  title="Night Mode"></button>

<button id="nig" type='button'class="fa fa-moon-o" aria-hidden="true" style="margin-top:1.3ex;border:none;background:transparent;font-size:28px;color:white;text-align:right;"  onclick="nig()" title="Day Mode"></button>
<!--
<button  style="margin-top:0.5ex;border:none;background:transparent;font-size:30px;color:black"  class="fa fa-user-circle" aria-hidden="true"  onclick="tab()" ></button>
-->
</div>

</center>
</ul>
      <ul style="padding-top:3ex;">
        <li><a href="index" style="font-size:18px;font-family:Times new roman;padding-left:1.5ex;">Trending</a></li>
        <li><a href="Top2Ten [Asia]-Quiz" style="font-size:18px;font-family:Times new roman;padding-left:1.5ex;">Quiz</a></li>
        <li><a href="top-10-lists" style="font-size:18px;font-family:Times new roman;padding-left:1.5ex;">Top 10 list</a></li>
        </ul>
        
    </div>
  </div>
  
<div id="form">
 <form method="post">
<center><input type="text" name="name" placeholder="Name" class="form-control" required style="width: 35ex;"><br><center>
<center><input type="email" name="email" placeholder="Email" class="form-control" required style="width: 35ex;"><br><center>
<center><button type="submit" name="submit" class="btn softo-solid-btn" id="btnContactUs" style="background-color: green ;color: white;margin-right:0.2ex;">
Subscribe
</button>
<button type="button" onclick="cancel()" class="btn softo-solid-btn" id="btnContactUs" style="background-color: red;color: white;margin-left:0.2ex;">
Cancel
</button></center>
</div>
</form>
</div>
</div>

 

