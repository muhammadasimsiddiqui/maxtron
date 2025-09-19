<?php echo $this->render('partials/main'); ?>

<head>
  <?php echo $this->render('partials/title-meta', array('title' => 'Google Maps')); ?>

  <?php echo $this->render('partials/head-css'); ?>

</head>

<body>

<?php echo $this->render('partials/menu'); ?>

  <!--start main wrapper-->
  <main class="main-wrapper">
    <div class="main-content">
    <!--breadcrumb-->
	  <?php echo $this->render('partials/page-title', array( 'title' => 'Maps', 'pagetitle' => 'Google Maps')); ?>
	<!--end breadcrumb-->
      
        <div class="row">
			<div class="col-xl-12">
				<h6 class="text-uppercase">Simple Basic Map</h6>
				<hr>
				<div class="card">
					<div class="card-body">
						<div id="simple-map" class="gmaps"></div>
					</div>
				</div>
				<h6 class="text-uppercase">Map With Marker</h6>
				<hr>
				<div class="card">
					<div class="card-body">
						<div id="marker-map" class="gmaps"></div>
					</div>
				</div>
				<h6 class="text-uppercase">Over Layer Map</h6>
				<hr>
				<div class="card">
					<div class="card-body">
						<div id="overlay-map" class="gmaps"></div>
					</div>
				</div>
				<h6 class="text-uppercase">Polygonal Map</h6>
				<hr>
				<div class="card">
					<div class="card-body">
						<div id="polygons-map" class="gmaps"></div>
					</div>
				</div>
				<h6 class="text-uppercase">Styled Map</h6>
				<hr>
				<div class="card">
					<div class="card-body">
						<div id="style-map" class="gmaps"></div>
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


  <?php echo $this->render('partials/footer'); ?>

  <?php echo $this->render('partials/cart'); ?>

  <?php echo $this->render('partials/right-sidebar'); ?>

  <?php echo $this->render('partials/vendor-scripts'); ?>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDKXKdHQdtqgPVl2HI2RnUa_1bjCxRCQo4&callback=initMap" async defer></script>

	<script src="assets/plugins/gmaps/map-custom-script.js"></script>

</body>

</html>