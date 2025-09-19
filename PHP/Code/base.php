<!-- base.php -->
<!doctype html>
<html lang="en" data-bs-theme="blue-theme">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Maxton | Bootstrap 5 Admin Dashboard Template</title>
    <link rel="icon" href="assets/images/favicon-32x32.png" type="image/png">

    <!-- inject:css-->

    <link href="assets/css/pace.min.css" rel="stylesheet">
    <script src="assets/js/pace.min.js"></script>


    <!--plugins-->
    <link href="assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css" rel="stylesheet">
    <link href="assets/plugins/fullcalendar/css/main.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="assets/plugins/metismenu/metisMenu.min.css">
    <link rel="stylesheet" type="text/css" href="assets/plugins/metismenu/mm-vertical.css">
    <link rel="stylesheet" type="text/css" href="assets/plugins/simplebar/css/simplebar.css">
    <!--bootstrap css-->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/plugins/datatable/css/dataTables.bootstrap5.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined" rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" rel="stylesheet">

    <!--main css-->
    <link href="assets/plugins/fancy-file-uploader/fancy_fileupload.css" rel="stylesheet">
    <link href="assets/plugins/Drag-And-Drop/dist/imageuploadify.min.css" rel="stylesheet">
    <link href="assets/plugins/notifications/css/lobibox.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css">
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/select2-bootstrap-5-theme@1.3.0/dist/select2-bootstrap-5-theme.min.css">
    <link href="assets/css/extra-icons.css" rel="stylesheet">
    <link href="assets/plugins/bs-stepper/css/bs-stepper.css" rel="stylesheet">
    <link href="assets/plugins/input-tags/css/tagsinput.css" rel="stylesheet">
    <link href="assets/css/bootstrap-extended.css" rel="stylesheet">
    <link href="assets/plugins/vectormap/jquery-jvectormap-2.0.2.css" rel="stylesheet">
    <link href="assets/sass/main.css" rel="stylesheet">
    <link href="assets/sass/dark-theme.css" rel="stylesheet">
    <link href="assets/sass/blue-theme.css" rel="stylesheet">
    <link href="assets/sass/semi-dark.css" rel="stylesheet">
    <link href="assets/sass/bordered-theme.css" rel="stylesheet">
    <link href="assets/sass/responsive.css" rel="stylesheet">
    <?php
    if (!empty($extra_css)) {
        foreach ($extra_css as $css) {
            echo '<link href="' . $css . '" rel="stylesheet">';
        }
    }
    ?>
</head>

<body>
    <?php if ($include_layout): ?>
    <?php include 'includes/header.php'; ?>
    <?php include 'includes/sidebar.php'; ?>
    <?php endif; ?>

    <?php if ($include_layout): ?>
    <!--================= Wrapper Start Here =================-->
    <main class="main-wrapper">
        <div class="main-content">
            <?php endif; ?>
            <?php
        // Include the content of the current page
        if (isset($content) && file_exists($content)) {
            include $content;
        } else {
            echo "<h1>Page Not Found</h1>";
            echo "<p>The page you are looking for does not exist.</p>";
        }
        ?>
            <?php if ($include_layout): ?>
        </div>
    </main>

    <!--start overlay-->
    <div class="overlay btn-toggle"></div>
    <!--end overlay-->

    <?php include 'includes/footer.php'; ?>
    <?php include 'includes/cart.php'; ?>
    <?php include 'includes/switcher.php'; ?>
    <?php endif; ?>
    <script src="assets/js/bootstrap.bundle.min.js"></script>

    <!--plugins-->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js"></script>
    <script src="assets/plugins/metismenu/metisMenu.min.js"></script>

    <?php
// Include additional JS files if defined
if (isset($extra_js) && is_array($extra_js)) {
    foreach ($extra_js as $js_file) {
        echo "<script src=\"$js_file\"></script>";
    }
}
if (isset($inline_js)) {
    echo $inline_js;
}
?>

    <script src="assets/plugins/simplebar/js/simplebar.min.js"></script>

    <script src="assets/js/main.js"></script>

</body>

</html>