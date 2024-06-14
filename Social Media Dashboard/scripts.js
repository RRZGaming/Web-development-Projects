
var sidebaropen=false;
var sidebar=document.getElementById("sidebar");

function openSidebar(){
    if (sidebaropen){
        sidebar.classList.add("sidebar-responsive");
        sidebaropen=true;
    }
}


function closeSidebar(){
    if (sidebaropen){
        sidebar.classList.remove("sidebar-responsive");
        sidebaropen=false;
    }
}