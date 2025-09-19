<?php echo $this->render('partials/main'); ?>

<head>
  <?php echo $this->render('partials/title-meta', array('title' => 'Avtars Chips')); ?>

  <?php echo $this->render('partials/head-css'); ?>

</head>

<body>

<?php echo $this->render('partials/menu'); ?>

  <!--start main wrapper-->
  <main class="main-wrapper">
    <div class="main-content">
      <!--breadcrumb-->
	  <?php echo $this->render('partials/page-title', array( 'title' => 'Components', 'pagetitle' => 'Avtars Chips')); ?>
				
        <div class="card">
			<div class="card-body">
				<div class="card-title">
					<h4 class="mb-0">Chips</h4>
				</div>
				<hr>
				<div class="chip">
					<img src="https://placehold.co/110x110/png" alt="Contact Person">John Doe</div>
				<div class="chip">
					<img src="https://placehold.co/110x110/png" alt="Contact Person">Jessica Doe</div>
				<div class="chip">
					<img src="https://placehold.co/110x110/png" alt="Contact Person">Michele Powa</div>
				<div class="chip">
					<img src="https://placehold.co/110x110/png" alt="Contact Person">Clark Natela</div>
				<div class="chip">
					<img src="https://placehold.co/110x110/png" alt="Contact Person">Anantu Painda <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<div class="chip">
					<img src="https://placehold.co/110x110/png" alt="Contact Person">Tiger Xink <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<div class="chip">
					<img src="https://placehold.co/110x110/png" alt="Contact Person">Salena Chain <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<hr>
				<div class="chip">John Doe <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<div class="chip">Jessica Doe <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<div class="chip">Michele Powa <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<div class="chip">Clark Natela <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<div class="chip">Anantu Painda <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<div class="chip">Tiger Xink <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<div class="chip">Salena Chain <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="card-body">
				<div class="card-title">
					<h4 class="mb-0">Sizing and Colors</h4>
				</div>
				<hr>
				<div class="chip chip-md">
					<img src="https://placehold.co/110x110/png" alt="Contact Person">John Doe</div>
				<div class="chip chip-md bg-light text-dark">
					<img src="https://placehold.co/110x110/png" alt="Contact Person">Jessica Doe</div>
				<div class="chip chip-md bg-dark text-white">
					<img src="https://placehold.co/110x110/png" alt="Contact Person">Michele Powa <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<div class="chip chip-md bg-danger text-white">
					<img src="https://placehold.co/110x110/png" alt="Contact Person">Clark Natela <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<hr>
				<div class="chip chip-lg">
					<img src="https://placehold.co/110x110/png" alt="Contact Person">Anantu Painda <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<div class="chip chip-lg bg-primary text-white">
					<img src="https://placehold.co/110x110/png" alt="Contact Person">Tiger Xink <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<div class="chip chip-lg bg-warning text-white">
					<img src="https://placehold.co/110x110/png" alt="Contact Person">Salena Chain <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<hr>
				<div class="chip chip-md">John Doe <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<div class="chip chip-md">Jessica Doe <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<div class="chip chip-md bg-info text-white">Michele Powa <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<div class="chip chip-md bg-success text-white">Clark Natela <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<hr>
				<div class="chip chip-lg">Anantu Painda <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<div class="chip chip-lg bg-secondary text-white">Tiger Xink <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
				<div class="chip chip-lg bg-dark text-white">Salena Chain <span class="closebtn" onclick="this.parentElement.style.display='none'">×</span>
				</div>
			</div>
		</div>
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


</body>

</html>