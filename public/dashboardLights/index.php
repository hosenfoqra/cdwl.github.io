


<?php
require_once '../../server/config/CONSTANTS.php';
$pageTitle = "Find A Garage | " . $CONSTANTS['APP_NAME'];
?>
<!doctype html>
<html>
    <?php
        require_once '../../includes/page-head.php';
    ?>
    <body class="template-index">
        <!-- Start Page Loader -->
        <div class="page-loading"></div>
        <!-- End Page Loader -->

        <!--  Start Main Wrapper -->
        <div class="main-wrapper cart-drawer-push">
            <!-- Start Promotional Bar Section -->
            <div class="promotional-bar border-0 rounded-0 d-flex align-items-center alert alert-warning fade show" role="alert">
                <div class="container-fluid full-promotional-bar">
<!--                    <span>Shop with discount 50%. Hurry Up! <a href="#">Shop Now</a></span>-->
<!--                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="ti-close"></i></button>-->
                </div>
            </div>
            <!-- End Promotional Bar Section -->

            <!-- Start Header Section -->
            <header class="header bg-white">
                <div class="container-fluid full-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <?php
                            require_once '../../includes/top-navbar.php';
                        ?>
                    </div>
                </div>
            </header>
            <!-- End Header Section -->

            <!-- Start Main Content -->
            <main class="main-content">
                <div class="ymm-slideshow position-relative sections-spacing">
                    <div class="slideshow slideshow-banner">
                        <div class="single-slide slider-height bg-style d-flex align-items-center" style="background-image:url(../../assets/images/slider/banner-8.png);">
                            <div class="container slideshow-details" style="top: 50%;">
                                <h3 class="text-light">Find A Warning</h3>
                                <p class="text-light">Car Dashboard Lights</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="video-information sections-spacing">
                    <div class="container">
                        <div class="row d-sm-flex flex-sm-row align-items-sm-center">
                            <div class="col-12 text-center">
                                <div class="section-header">
                                    <h2>Warning Lights List</h2>
                                </div>
                                <div class="row row-sp row-eq-height d-flex justify-content-center" id="warning-lights"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <!-- End Main Content -->

            <!-- Start Footer Section -->
            <?php
                require_once '../../includes/page-footer.php';
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

