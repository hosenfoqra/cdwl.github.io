<?phprequire_once '../../server/config/CONSTANTS.php';$pageTitle = "Suggest | " . $CONSTANTS['APP_NAME'];?><!doctype html><html>    <?php        require_once '../../includes/page-head.php';    ?>    <body class="template-index">        <div class="page-loading"></div>        <div class="main-wrapper cart-drawer-push">            <div class="promotional-bar border-0 rounded-0 d-flex align-items-center alert alert-warning fade show" role="alert">                <div class="container-fluid full-promotional-bar">                </div>            </div>            <header class="header bg-white">                <div class="container-fluid full-header">                    <div class="d-flex justify-content-between align-items-center">                        <?php                            require_once '../../includes/top-navbar.php';                        ?>                    </div>                </div>            </header>            <!-- End Header Section -->            <!-- Start Main Content -->            <main class="main-content" id="main">                <div class="ymm-slideshow position-relative sections-spacing">                    <div class="slideshow slideshow-banner">                        <div class="single-slide slider-height bg-style d-flex align-items-center" style="background-image:url(../../assets/images/slider/banner-7.png);">                            <div class="container slideshow-details" style="top: 50%;">                                <h3>Suggest</h3>                                <p class="text-muted">Do you have an idea? Suggest it to us</p>                            </div>                        </div>                    </div>                </div>                <div class="video-information sections-spacing">                    <div class="container">                        <div class="row d-sm-flex flex-sm-row align-items-sm-center">                            <div class="col-12 text-center">                                <div class="section-header">                                    <h2>New Suggestion</h2>                                </div>                                <div class="col-12">                                    <div class="row">                                        <div class="col-12">                                            <div class="mb-3 row">                                                <label for="select-category" class="col-sm-2 col-form-label">Category <code>*</code></label>                                                <div class="col-sm-10">                                                    <select class="form-control" id="select-category"></select>                                                </div>                                            </div>                                        </div>                                        <div class="col-12">                                            <div class="mb-3 row">                                                <label for="input-description" class="col-sm-2 col-form-label">Description <code>*</code></label>                                                <div class="col-sm-10">                                                    <textarea class="form-control" id="input-description" cols="30" rows="10" placeholder="Write your suggestion here..."></textarea>                                                </div>                                            </div>                                        </div>                                        <div class="col-12">                                            <button class="btn btn-primary" id="btn-submit">Submit</button>                                        </div>                                    </div>                                </div>                            </div>                        </div>                    </div>                </div>            </main>            <!-- End Main Content -->            <!-- Start Footer Section -->            <?php                require_once '../../includes/page-footer.php';                require_once '../../includes/page-scripts.php';            ?>            <!-- End Footer Section -->            <!-- Start Scroll Top -->            <div id="scrollTop"><i class="ti-arrow-up"></i></div>            <!-- End Scroll Top -->            <!-- Overlay -->            <div class="overlay"></div>        </div>        <!--  End Main Wrapper -->        <script src="./js/init.js" type="module"></script>    </body></html>