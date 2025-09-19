<?= $this->include('partials/main') ?>

<head>
  <?php echo view('partials/title-meta', array('title' => 'Apex Chart')); ?>

  <?= $this->include('partials/head-css') ?>

</head>

<body>

<?= $this->include('partials/menu') ?>

  <!--start main wrapper-->
  <main class="main-wrapper">
    <div class="main-content">
    <!--breadcrumb-->
      <?php echo view('partials/page-title', array('title' => 'Charts', 'breadcrumb' => 'Apex Chart')); ?>
		<!--end breadcrumb-->
      
        <div class="row">
          <div class="col-12 col-xl-12">
            <div class="card rounded-4">
              <div class="card-header py-3">
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="mb-0">Area Chart</h5>
                  <div class="dropdown">
                    <a href="javascript:;" class="dropdown-toggle-nocaret options dropdown-toggle" data-bs-toggle="dropdown">
                      <span class="material-icons-outlined fs-5">more_vert</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:;">Action</a></li>
                      <li><a class="dropdown-item" href="javascript:;">Another action</a></li>
                      <li><a class="dropdown-item" href="javascript:;">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div id="chart1"></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-12">
            <div class="card rounded-4">
              <div class="card-header py-3">
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="mb-0">Line Chart</h5>
                  <div class="dropdown">
                    <a href="javascript:;" class="dropdown-toggle-nocaret options dropdown-toggle" data-bs-toggle="dropdown">
                      <span class="material-icons-outlined fs-5">more_vert</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:;">Action</a></li>
                      <li><a class="dropdown-item" href="javascript:;">Another action</a></li>
                      <li><a class="dropdown-item" href="javascript:;">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div id="chart2"></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-12">
            <div class="card rounded-4">
              <div class="card-header py-3">
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="mb-0">Bar Chart</h5>
                  <div class="dropdown">
                    <a href="javascript:;" class="dropdown-toggle-nocaret options dropdown-toggle" data-bs-toggle="dropdown">
                      <span class="material-icons-outlined fs-5">more_vert</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:;">Action</a></li>
                      <li><a class="dropdown-item" href="javascript:;">Another action</a></li>
                      <li><a class="dropdown-item" href="javascript:;">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div id="chart3"></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-6">
            <div class="card rounded-4">
              <div class="card-header py-3">
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="mb-0">Pie Chart</h5>
                  <div class="dropdown">
                    <a href="javascript:;" class="dropdown-toggle-nocaret options dropdown-toggle" data-bs-toggle="dropdown">
                      <span class="material-icons-outlined fs-5">more_vert</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:;">Action</a></li>
                      <li><a class="dropdown-item" href="javascript:;">Another action</a></li>
                      <li><a class="dropdown-item" href="javascript:;">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div id="chart4"></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-6">
            <div class="card rounded-4">
              <div class="card-header py-3">
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="mb-0">Donught Chart</h5>
                  <div class="dropdown">
                    <a href="javascript:;" class="dropdown-toggle-nocaret options dropdown-toggle" data-bs-toggle="dropdown">
                      <span class="material-icons-outlined fs-5">more_vert</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:;">Action</a></li>
                      <li><a class="dropdown-item" href="javascript:;">Another action</a></li>
                      <li><a class="dropdown-item" href="javascript:;">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div id="chart5"></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-6">
            <div class="card rounded-4">
              <div class="card-header py-3">
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="mb-0">Radial Chart</h5>
                  <div class="dropdown">
                    <a href="javascript:;" class="dropdown-toggle-nocaret options dropdown-toggle" data-bs-toggle="dropdown">
                      <span class="material-icons-outlined fs-5">more_vert</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:;">Action</a></li>
                      <li><a class="dropdown-item" href="javascript:;">Another action</a></li>
                      <li><a class="dropdown-item" href="javascript:;">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div id="chart6"></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-6">
            <div class="card rounded-4">
              <div class="card-header py-3">
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="mb-0">Radial Bar Chart</h5>
                  <div class="dropdown">
                    <a href="javascript:;" class="dropdown-toggle-nocaret options dropdown-toggle" data-bs-toggle="dropdown">
                      <span class="material-icons-outlined fs-5">more_vert</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:;">Action</a></li>
                      <li><a class="dropdown-item" href="javascript:;">Another action</a></li>
                      <li><a class="dropdown-item" href="javascript:;">Something else here</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div id="chart7"></div>
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
    
  <?= $this->include('partials/footer') ?>

  <?= $this->include('partials/cart') ?>

  <?= $this->include('partials/right-sidebar') ?>

  <?= $this->include('partials/vendor-scripts') ?>

  <script src="assets/plugins/apexchart/apex-custom-chart.js"></script>

</body>

</html>