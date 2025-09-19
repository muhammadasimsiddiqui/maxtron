<?php echo $this->render('partials/main'); ?>

<head>
  <?php echo $this->render('partials/title-meta', array('title' => 'Vector Map')); ?>

  <link href="assets/plugins/vectormap/jquery-jvectormap-2.0.2.css" rel="stylesheet">
  
  <?php echo $this->render('partials/head-css'); ?>

</head>

<body>

<?php echo $this->render('partials/menu'); ?>

  <!--start main wrapper-->
  <main class="main-wrapper">
    <div class="main-content">
    <!--breadcrumb-->
	  <?php echo $this->render('partials/page-title', array( 'title' => 'Maps', 'pagetitle' => 'Vector Map')); ?>
	<!--end breadcrumb-->

        <div class="row">
          <div class="col-12 col-xl-6">
            <h6 class="text-uppercase">World Map</h6>
						<hr>
						<div class="card">
							<div class="card-body">
								<div id="world-map-markers" style="height: 400px"></div>
							</div>
						</div>
          </div>
          <div class="col-12 col-xl-6">
            <h6 class="text-uppercase">India</h6>
						<hr>
						<div class="card">
							<div class="card-body">
								<div id="india" style="height: 400px"></div>
							</div>
						</div>
          </div>
          <div class="col-12 col-xl-6">
            <h6 class="text-uppercase">Usa</h6>
						<hr>
						<div class="card">
							<div class="card-body">
								<div id="usa" style="height: 400px"></div>
							</div>
						</div>
          </div>
          <div class="col-12 col-xl-6">
            <h6 class="text-uppercase">Australia Map</h6>
						<hr>
						<div class="card">
							<div class="card-body">
								<div id="australia" style="height: 400px"></div>
							</div>
						</div>
          </div>
          <div class="col-12 col-xl-12">
            <h6 class="text-uppercase">Uk Map</h6>
						<hr>
						<div class="card">
							<div class="card-body">
								<div id="uk" style="height: 400px"></div>
							</div>
						</div>
          </div>
        </div><!--end row-->
      
    </div>
  </main>
  <!--end main wrapper-->


    <!--start overlay-->
    <div class="overlay btn-toggle"></div>
    <!--end overlay-->
    

  <?php echo $this->render('partials/footer'); ?>

  <?php echo $this->render('partials/cart'); ?>

  <?php echo $this->render('partials/right-sidebar'); ?>

  <?php echo $this->render('partials/vendor-scripts'); ?>
  <!-- Vector map JavaScript -->
	<script src="assets/plugins/vectormap/jquery-jvectormap-2.0.2.min.js"></script>
	<script src="assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js"></script>
	<script src="assets/plugins/vectormap/jquery-jvectormap-in-mill.js"></script>
	<script src="assets/plugins/vectormap/jquery-jvectormap-us-aea-en.js"></script>
	<script src="assets/plugins/vectormap/jquery-jvectormap-uk-mill-en.js"></script>
	<script src="assets/plugins/vectormap/jquery-jvectormap-au-mill.js"></script>
	<script src="assets/plugins/vectormap/jvectormap.custom.js"></script>

</body>

</html>