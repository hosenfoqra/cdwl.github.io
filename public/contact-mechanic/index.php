<?php
require_once '../../server/config/CONSTANTS.php';
$pageTitle = "Contact Mechanic | " . $CONSTANTS['APP_NAME'];
?>
<!doctype html>
<html>
    <?php
        require_once '../../includes/page-head.php';
    ?>
    <body class="template-index">
        <div class="page-loading"></div>

        <div class="main-wrapper cart-drawer-push">
            <div class="promotional-bar border-0 rounded-0 d-flex align-items-center alert alert-warning fade show" role="alert">
                <div class="container-fluid full-promotional-bar">
                </div>
            </div>

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
                        <div class="single-slide slider-height bg-style d-flex align-items-center" style="background-image:url(../../assets/images/slider/banner-6.jpg);">
                            <div class="container slideshow-details" style="top: 50%;">
                                <h3 class="text-dark">Contact Mechanic</h3>
                                <p class="text-dark">Contact a mechanic from our contacts book</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="video-information sections-spacing">
                    <div class="container">
                        <div class="row d-sm-flex flex-sm-row align-items-sm-center">
                            <div class="col-12 text-center">
                                <div class="section-header">
                                    <h2>Mechanics List</h2>
                                </div>
                                <div class="row row-sp row-eq-height d-flex justify-content-center" id="mechanics-cards"></div>
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

