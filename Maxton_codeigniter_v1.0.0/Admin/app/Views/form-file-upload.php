<?= $this->include('partials/main') ?>

<head>
  <?php echo view('partials/title-meta', array('title' => 'File Upload')); ?>
  
  <link href="assets/plugins/fancy-file-uploader/fancy_fileupload.css" rel="stylesheet">
	<link href="assets/plugins/Drag-And-Drop/dist/imageuploadify.min.css" rel="stylesheet">
  
  <?= $this->include('partials/head-css') ?>

</head>

<body>

<?= $this->include('partials/menu') ?>

  <!--start main wrapper-->
  <main class="main-wrapper">
    <div class="main-content">
    <!--breadcrumb-->
	  <?php echo view('partials/page-title', array('title' => 'Forms', 'breadcrumb' => 'File Upload')); ?>
	<!--end breadcrumb-->
      

        <div class="row">
			<div class="col-xl-9 mx-auto">
				<h6 class="mb-0 text-uppercase">Fancy File Upload</h6>
				<hr>
				<div class="card">
					<div class="card-body">
						<input id="fancy-file-upload" type="file" name="files" accept=".jpg, .png, image/jpeg, image/png" multiple>
					</div>
				</div>
			</div>
		</div>
		<!--end row-->
		<div class="row">
			<div class="col-xl-9 mx-auto">
				<h6 class="mb-0 text-uppercase">Image Uploadify</h6>
				<hr>
				<div class="card">
					<div class="card-body">
						<form>
							<input id="image-uploadify" type="file" accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" multiple>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!--end row-->
    </div>
  </main>
  <!--end main wrapper-->

    <!--start overlay-->
    <div class="overlay btn-toggle"></div>
    <!--end overlay-->

  <?= $this->include('partials/footer') ?>

  <?= $this->include('partials/cart') ?>

  <?= $this->include('partials/right-sidebar') ?>

  <?= $this->include('partials/vendor-scripts') ?>

  <script src="assets/plugins/fancy-file-uploader/jquery.ui.widget.js"></script>
	<script src="assets/plugins/fancy-file-uploader/jquery.fileupload.js"></script>
	<script src="assets/plugins/fancy-file-uploader/jquery.iframe-transport.js"></script>
	<script src="assets/plugins/fancy-file-uploader/jquery.fancy-fileupload.js"></script>
	<script src="assets/plugins/Drag-And-Drop/dist/imageuploadify.min.js"></script>
	<script>
		$('#fancy-file-upload').FancyFileUpload({
			params: {
				action: 'fileuploader'
			},
			maxfilesize: 1000000
		});
	</script>
	<script>
		$(document).ready(function () {
			$('#image-uploadify').imageuploadify();
		})
	</script>

</body>

</html>