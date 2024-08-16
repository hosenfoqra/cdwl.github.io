<?php
require_once '../../server/config/CONSTANTS.php';
require_once '../../server/classes/Session.php';
$pageTitle = "Dashboard | " . $CONSTANTS['APP_NAME'];
require_once '../includes/prevent-non-logged.php';
?>

<!doctype html>
<html lang="en">
<?php
    require_once '../../includes/page-head.php';
?>
<body class="template-index">
<!-- Start Page Loader -->
<div class="page-loading"></div>
<!-- End Page Loader -->

<!--  Start Main Wrapper -->
<div class="main-wrapper cart-drawer-push">
    <div class="promotional-bar border-0 rounded-0 d-flex align-items-center alert alert-warning fade show" role="alert">
        <div class="container-fluid full-promotional-bar">
        </div>
    </div>

    <!-- Start Header Section -->
    <header class="header bg-white">
        <div class="container-fluid full-header">
            <div class="d-flex justify-content-between align-items-center">
                <?php
                    require_once '../includes/top-navbar.php';
                ?>
            </div>
        </div>
    </header>
    <!-- End Header Section -->

    <hr />

    <!-- Start Main Content -->
    <main class="main-content">
        <!-- Start Banner Slidershow Section -->
        <div class="ymm-slideshow position-relative sections-spacing">
            <!-- Start Slidershow Banner -->
            <div class="slideshow slideshow-banner">
                <div class="single-slide slider-height bg-style d-flex align-items-center" style="background-image:url(../../assets/images/slider/banner-3.jpg);">
                    <div class="container slideshow-details" style="top: 50%;">
                        <h3>Welcome To Admin Dashboard</h3>
                        <p>Manage your whole website with ease</p>
                    </div>
                </div>
            </div>
            <!-- End Slidershow Banner -->
        </div>
        <!-- End Banner Slidershow Section -->

        <!-- What We Offer Section -->
        <div class="video-information sections-spacing">
            <div class="container">
                <div class="row d-sm-flex flex-sm-row align-items-sm-center">
                    <div class="col-12 text-center video-info">
                        <div class="section-header">
                            <h2>Stats</h2>
                            <p>Your website stats</p>
                        </div>
                        <div class="row storeFeatures">
                            <div class="col-12 col-sm-4 feature-item text-center">
                                <img class="img-fluid blur-up lazyload" src="../../assets/images/icons/car.png" data-src="../../assets/images/icons/car.png" alt="image" title="image" style="width: 48px;" />
                                <h5>Cars</h5>
                                <span id="count-cars">0</span>
                            </div>
                            <div class="col-12 col-sm-4 feature-item text-center">
                                <img class="img-fluid blur-up lazyload" src="../../assets/images/icons/car-service.png" data-src="../../assets/images/icons/car-service.png" alt="image" title="image" style="width: 48px;" />
                                <h5>Garages</h5>
                                <span id="count-garages">0</span>
                            </div>
                            <div class="col-12 col-sm-4 feature-item text-center">
                                <img class="img-fluid blur-up lazyload" src="../../assets/images/icons/phonebook.png" data-src="../../assets/images/icons/phonebook.png" alt="image" title="image" style="width: 48px;" />
                                <h5>Mechanics</h5>
                                <span id="count-mechanics">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!-- End Main Content -->

    <!-- Start Footer Section -->
    <?php
    require_once '../../includes/page-scripts.php';
    ?>
    <!-- End Footer Section -->

    <!-- Start Scroll Top -->
    <div id="scrollTop"><i class="ti-arrow-up"></i></div>
    <!-- End Scroll Top -->

    <!-- Overlay -->
    <div class="overlay"></div>

</div>
<!--  End Main Wrapper -->

<script src="./js/init.js" type="module"></script>

</body>
</html>
