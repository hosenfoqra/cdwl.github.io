<nav class="navigation navbar position-static navbar-expand-lg p-0 w-100">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse"><span class="icon ti-menu"></span></button>
    <div id="navbar-collapse" class="navbar-collapse collapse dual-nav">
        <ul class="navbar-nav">
            <li class="nav-item dropdown">
                <a class="nav-link" href="../../public/home/index.php"><i class="fa fa-home"></i> Website</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link" href="../dashboard/index.php"><i class="fa fa-dashboard"></i> Dashboard</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../cars/index.php"><i class="fa fa-car"></i> Cars</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link" href="../cars-models/index.php"><i class="fa fa-car"></i> Models</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link" href="../warning-lights/index.php"><i class="fa fa-warning"></i> Warning Lights</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link" href="../garages/index.php"><i class="fa fa-wrench"></i> Garages</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link" href="../mechanics/index.php"><i class="fa fa-wrench"></i> Mechanics</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link" href="../suggestions/index.php"><i class="fa fa-lightbulb-o"></i> suggestions</a>
            </li>
        </ul>
    </div>
</nav>

<?php

if ($Session->isLogged()) {
    echo '
        <div class="w-50 right-side">
            <!-- Start Setting Menu -->
            <div class="setting-menu float-right">
                <a href="../logout.php" title="My Account">
                    Logout
                </a>
            </div>
        </div>
    ';
}

?>
