<?php require_once __DIR__ . '/includes/config.php'; ?>
<script type="text/javascript">
(function(){
    var KEY='night-read';
    function setTheme(dark){
        if(dark){document.body.classList.add('night-read');}else{document.body.classList.remove('night-read');}
        try{localStorage.setItem(KEY,dark?'1':'0');}catch(e){}
    }
    try{if(localStorage.getItem(KEY)==='1')document.body.classList.add('night-read');}catch(e){}
    function init(){
        var btn=document.getElementById('theme-toggle-root'),mob=document.getElementById('theme-toggle-root-mob');
        function toggle(){var dark=document.body.classList.toggle('night-read');setTheme(dark);}
        if(btn)btn.onclick=toggle;
        if(mob)mob.onclick=toggle;
    }
    if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}
    else{setTimeout(init,0);}
})();

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

</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="<?php echo base_path(); ?>/includes/css/shared-nav.css">
<div class="header">
<div class="comp">

<nav class="navbar" id="grad" style="overflow: hidden;border: none; box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2);margin-top:-1.2ex;">
  <div class="container-fluid">
      <ul class="nav navbar-nav" style="font-family: Times New Roman;font-size:20px;">
       <li><a href="<?php echo base_path(); ?>/" style="font-weight:bold;font-size:28px;" id="trending">T<img src="<?php echo base_path(); ?>/assets/koi-fish.png" style="margin-top:-0.5ex;">P2TEN ASIA</a></li>
      <li><a href="<?php echo base_path(); ?>/" style="font-weight:bold;margin-left:5ex;" id="trending">TRENDING</a></li>
        <li><a href="<?php echo base_path(); ?>/Top2Ten [Asia]-Quiz" style="font-weight:bold" id="kdrama">QUIZ</a></li>
        <li><a href="<?php echo base_path(); ?>/top-10-lists" style="font-weight:bold" id="popular">TOP 10 LIST</a></li>
        
        </ul>
        <ul class="nav navbar-nav navbar-right">
        <li class="theme-toggle-root-wrap">
            <button type="button" class="theme-toggle-root-btn" id="theme-toggle-root" aria-label="Toggle theme" title="Toggle theme">
                <i class="fa fa-sun-o theme-sun"></i>
                <i class="fa fa-moon-o theme-moon"></i>
            </button>
        </li>
      <!--
<button  style="margin-top:0.5ex;border:none;background:transparent;font-size:30px;color:black"  class="fa fa-user-circle" aria-hidden="true"  onclick="tab()" ></button>
-->
  </ul>        
        
        
     
    
</nav>
</div>

<div class="mob">
<div style=";background:#fd2870">
<center><li style="font-size:26px;color:white;font-family:Times new roman;background:#fd2870">T<img src="<?php echo base_path(); ?>/assets/koi-fish.png" style="margin-top:-0.5ex;">P2TEN ASIA</li></center>
</div>
<div style="width:100%;height:10ex;" id="grad">
  <center style="text-align:left">
<button type="button" class="theme-toggle-root-btn theme-toggle-root-mob" id="theme-toggle-root-mob" aria-label="Toggle theme" title="Toggle theme" style="float:right;margin-right:2.5ex;">
<i class="fa fa-sun-o theme-sun"></i><i class="fa fa-moon-o theme-moon"></i>
</button>
<!--
<button  style="margin-top:0.5ex;border:none;background:transparent;font-size:30px;color:black"  class="fa fa-user-circle" aria-hidden="true"  onclick="tab()" ></button>
-->
</div>

</center>
</ul>
      <ul style="padding-top:3ex;">
        <li><a href="<?php echo base_path(); ?>/" style="font-size:18px;font-family:Times new roman;padding-left:1.5ex;">Trending</a></li>
        <li><a href="<?php echo base_path(); ?>/Top2Ten [Asia]-Quiz" style="font-size:18px;font-family:Times new roman;padding-left:1.5ex;">Quiz</a></li>
        <li><a href="<?php echo base_path(); ?>/top-10-lists" style="font-size:18px;font-family:Times new roman;padding-left:1.5ex;">Top 10 list</a></li>
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

 

