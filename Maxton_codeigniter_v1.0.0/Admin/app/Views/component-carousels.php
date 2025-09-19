<?= $this->include('partials/main') ?>

<head>
  <?php echo view('partials/title-meta', array('title' => 'Carousels')); ?>
 
  <?= $this->include('partials/head-css') ?>

</head>

<body>

<?= $this->include('partials/menu') ?>

  <!--start main wrapper-->
  <main class="main-wrapper">
    <div class="main-content">
    <!--breadcrumb-->
	  <?php echo view('partials/page-title', array('title' => 'Components', 'breadcrumb' => 'Carousels')); ?>
	<!--end breadcrumb-->
      
        <div class="row row-cols-1 row-cols-lg-12 row-cols-xl-12">
			<div class="col">
				<h6 class="mb-0 text-uppercase">Slides only</h6>
				<hr>
				<div class="card">
					<div class="card-body">
						<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img src="https://placehold.co/1920x768/png" class="d-block w-100" alt="...">
								</div>
								<div class="carousel-item">
									<img src="https://placehold.co/1920x768/png" class="d-block w-100" alt="...">
								</div>
								<div class="carousel-item">
									<img src="https://placehold.co/1920x768/png" class="d-block w-100" alt="...">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col">
				<h6 class="mb-0 text-uppercase">With controls</h6>
				<hr>
				<div class="card">
					<div class="card-body">
						<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img src="https://placehold.co/1920x768/png" class="d-block w-100" alt="...">
								</div>
								<div class="carousel-item">
									<img src="https://placehold.co/1920x768/png" class="d-block w-100" alt="...">
								</div>
								<div class="carousel-item">
									<img src="https://placehold.co/1920x768/png" class="d-block w-100" alt="...">
								</div>
							</div>
							<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Previous</span>
							</a>
							<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">	<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Next</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col">
				<h6 class="mb-0 text-uppercase">With controls</h6>
				<hr>
				<div class="card">
					<div class="card-body">
						<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
							<ol class="carousel-indicators">
								<li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
								<li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
								<li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
							</ol>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img src="https://placehold.co/1920x768/png" class="d-block w-100" alt="...">
								</div>
								<div class="carousel-item">
									<img src="https://placehold.co/1920x768/png" class="d-block w-100" alt="...">
								</div>
								<div class="carousel-item">
									<img src="https://placehold.co/1920x768/png" class="d-block w-100" alt="...">
								</div>
							</div>
							<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Previous</span>
							</a>
							<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">	<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Next</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col">
				<h6 class="mb-0 text-uppercase">With captions</h6>
				<hr>
				<div class="card">
					<div class="card-body">
						<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
							<ol class="carousel-indicators">
								<li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
								<li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
								<li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
							</ol>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img src="https://placehold.co/1920x768/png" class="d-block w-100" alt="...">
									<div class="carousel-caption d-none d-md-block">
										<h5>First slide label</h5>
										<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
									</div>
								</div>
								<div class="carousel-item">
									<img src="https://placehold.co/1920x768/png" class="d-block w-100" alt="...">
									<div class="carousel-caption d-none d-md-block">
										<h5>Second slide label</h5>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</div>
								</div>
								<div class="carousel-item">
									<img src="https://placehold.co/1920x768/png" class="d-block w-100" alt="...">
									<div class="carousel-caption d-none d-md-block">
										<h5>Third slide label</h5>
										<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
									</div>
								</div>
							</div>
							<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Previous</span>
							</a>
							<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">	<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Next</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col">
				<h6 class="mb-0 text-uppercase">With Crossfade</h6>
				<hr>
				<div class="card">
					<div class="card-body">
						<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img src="https://placehold.co/1920x768/png" class="d-block w-100" alt="...">
								</div>
								<div class="carousel-item">
									<img src="https://placehold.co/1920x768/png" class="d-block w-100" alt="...">
								</div>
								<div class="carousel-item">
									<img src="https://placehold.co/1920x768/png" class="d-block w-100" alt="...">
								</div>
							</div>
							<a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Previous</span>
							</a>
							<a class="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">	<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Next</span>
							</a>
						</div>
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

</body>

</html>