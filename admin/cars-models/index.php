<?php
require_once '../../server/config/CONSTANTS.php';
require_once '../../server/classes/Session.php';
$pageTitle = "Cars Models | " . $CONSTANTS['APP_NAME'];
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

    <!-- Start Promotional Bar Section -->
    <div class="promotional-bar border-0 rounded-0 d-flex align-items-center alert alert-warning fade show" role="alert">
        <div class="container-fluid full-promotional-bar">
        </div>
    </div>
    <!-- End Promotional Bar Section -->

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
    <main class="main-content mt-5" id="main">
        <!-- What We Offer Section -->
        <div class="video-information sections-spacing">
            <div class="container">
                <div class="row d-sm-flex flex-sm-row align-items-sm-center">
                    <div class="col-12 text-center video-info">
                        <div class="section-header">
                            <h2>Cars Models List</h2>
                            <p>Manage cars models</p>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-right">
                                <button type="button" class="btn btn-primary" id="btn-add-new-car-model"><i class="fa fa-plus"></i> Add New Model</button>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="table-responsive">
                                <table class="table table-striped table-hover table-bordered" id="cars-models-table">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Manufacturer</th>
                                        <th scope="col">Model</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Years</th>
                                        <th scope="col">Options</th>
                                    </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End What We Offer Section -->
    </main>
    <!-- End Main Content -->

    <!-- Start Footer Section -->
    <?php
    require_once '../includes/page-footer.php';
    require_once '../includes/page-scripts.php';
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
