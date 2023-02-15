// INJECT HEADER
document.write(`
<nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
   <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"> 
   <a class="navbar-brand brand-logo" href="#"><img src="../../images/logo-full.png" alt="logo"/></a> 
   <a class="navbar-brand brand-logo-mini" href="../../index.html">
   <img src="../../images/arcelormittal-mini-logo.jpeg" alt="logo"/></a> </div>
   <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
   <ul class="navbar-nav navbar-nav-right"> <li class="nav-item nav-profile dropdown"> 
    <a class="nav-link" href="../#" data-toggle="dropdown" id="profileDropdown"> 
        <img class="profile_img" alt="profile" id="imgProfile" src="../../images/icon/cuenta.png"/> 
    </a> 
   <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown"> 
    <a class="dropdown-item" href="#" onclick="cerrarSesion()"> 
    <i class="mdi mdi-logout text-primary"></i> Cerrar Sesión </a> </div></li></ul> 
   </div>
</nav>
`);
