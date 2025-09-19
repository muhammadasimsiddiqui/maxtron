<?php echo $this->render('partials/main'); ?>

<head>
  <?php echo $this->render('partials/title-meta', array('title' => 'Calendar')); ?>
  <link href="assets/plugins/fullcalendar/css/main.min.css" rel="stylesheet">
  <?php echo $this->render('partials/head-css'); ?>

</head>

<body>

<?php echo $this->render('partials/menu'); ?>

  <!--start main wrapper-->
  <main class="main-wrapper">
    <div class="main-content">
    <!--breadcrumb-->
	  <?php echo $this->render('partials/page-title', array( 'title' => 'Applications', 'pagetitle' => 'Calendar')); ?>
	<!--end breadcrumb-->

        <div class="card">
			<div class="card-body">
				<div class="table-responsive">
					<div id='calendar'></div>
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
  <script src="assets/plugins/fullcalendar/js/main.min.js"></script>

   <script>
		document.addEventListener('DOMContentLoaded', function () {
			var calendarEl = document.getElementById('calendar');
			var calendar = new FullCalendar.Calendar(calendarEl, {
				headerToolbar: {
					left: 'prev,next today',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
				},
				initialView: 'dayGridMonth',
				initialDate: '2020-09-12',
				navLinks: true, // can click day/week names to navigate views
				selectable: true,
				nowIndicator: true,
				dayMaxEvents: true, // allow "more" link when too many events
				editable: true,
				selectable: true,
				businessHours: true,
				dayMaxEvents: true, // allow "more" link when too many events
				events: [{
					title: 'All Day Event',
					start: '2020-09-01',
				}, {
					title: 'Long Event',
					start: '2020-09-07',
					end: '2020-09-10'
				}, {
					groupId: 999,
					title: 'Repeating Event',
					start: '2020-09-09T16:00:00'
				}, {
					groupId: 999,
					title: 'Repeating Event',
					start: '2020-09-16T16:00:00'
				}, {
					title: 'Conference',
					start: '2020-09-11',
					end: '2020-09-13'
				}, {
					title: 'Meeting',
					start: '2020-09-12T10:30:00',
					end: '2020-09-12T12:30:00'
				}, {
					title: 'Lunch',
					start: '2020-09-12T12:00:00'
				}, {
					title: 'Meeting',
					start: '2020-09-12T14:30:00'
				}, {
					title: 'Happy Hour',
					start: '2020-09-12T17:30:00'
				}, {
					title: 'Dinner',
					start: '2020-09-12T20:00:00'
				}, {
					title: 'Birthday Party',
					start: '2020-09-13T07:00:00'
				}, {
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2020-09-28'
				}]
			});
			calendar.render();
		});
	</script>

</body>

</html>