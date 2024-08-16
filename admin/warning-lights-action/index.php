<?php
require_once '../../server/config/CONSTANTS.php';
require_once '../../server/classes/Session.php';
$pageTitle = "Warning Light Action | " . $CONSTANTS['APP_NAME'];
require_once '../includes/prevent-non-logged.php';

// Check mode
$allowedActions = ['add', 'edit'];
if (!isset($_GET['mode']) || !in_array($_GET['mode'], $allowedActions)) {
    // Redirect back to cars list
    header('Location: ../warning-lights/index.php');
    die;
}
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
                    <div class="col-12 text-center">
                        <div class="section-header">
                            <h2>Car Model <?php echo $_GET['mode']; ?></h2>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-right">
                                <button type="button" class="btn btn-primary" id="btn-warning-lights-list"><i class="fa fa-list"></i> Warning Lights List</button>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-sm-12 mt-3">
                                <div class="text-left">
                                    <label for="select-manufacturer">Car <code>*</code></label>
                                    <select class="form-control" id="select-manufacturer"></select>
                                </div>
                            </div>
                            <div class="col-sm-12 mt-3">
                                <div class="text-left">
                                    <label for="input-model-name">Model <code>*</code></label>
                                    <select class="form-control" id="select-model"></select>
                                </div>
                            </div>
                            <div class="col-sm-12 mt-3">
                                <div class="text-left">
                                    <label for="input-name">Name <code>*</code></label>
                                    <input type="text" class="form-control" id="input-name" placeholder="Warning light name">
                                </div>
                            </div>
                            <div class="col-sm-12 mt-3">
                                <div class="text-left">
                                    <label for="input-image">Image <code>*</code></label>
                                    <input type="text" class="form-control" id="input-image" placeholder="Image link">
                                </div>
                            </div>
                            <div class="col-sm-12 mt-3">
                                <div class="text-left">
                                    <label for="editor-description">Description</label>
                                    <textarea id="editor-description"></textarea>
                                </div>
                            </div>
                            <div class="col-sm-12 mt-3">
                                <button class="btn btn-danger" id="btn-delete-record" style="display: none;"><i class="fa fa-trash"></i> Delete</button>
                                <button class="btn btn-primary" id="btn-save-record"><i class="fa fa-save"></i> Save</button>
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

<script>
    // Setup TinyMCE editor - Always set before your scripts
    tinymce.init({
        selector:'textarea#editor-description',
        menubar: 'edit view insert format tools table help',
    })
</script>
<script src="./js/init.js" type="module"></script>

</body>
</html>
