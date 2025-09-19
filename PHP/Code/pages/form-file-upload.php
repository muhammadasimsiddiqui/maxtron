
<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
  <div class="breadcrumb-title pe-3">Components</div>
  <div class="ps-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0 p-0">
        <li class="breadcrumb-item"><a href="javascript:;"></a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">File Upload</li>
      </ol>
    </nav>
  </div>
  <div class="ms-auto">
    <div class="btn-group">
      <button type="button" class="btn btn-primary">Settings</button>
      <button type="button" class="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"> <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end"> <a class="dropdown-item"
          href="javascript:;">Action</a>
        <a class="dropdown-item" href="javascript:;">Another action</a>
        <a class="dropdown-item" href="javascript:;">Something else here</a>
        <div class="dropdown-divider"></div> <a class="dropdown-item" href="javascript:;">Separated link</a>
      </div>
    </div>
  </div>
</div>
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
          <input id="image-uploadify" type="file"
            accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf" multiple>
        </form>
      </div>
    </div>
  </div>
</div>
<!--end row-->

<?php
$extra_js = [
'assets/plugins/fancy-file-uploader/jquery.ui.widget.js',
'assets/plugins/fancy-file-uploader/jquery.fileupload.js',
'assets/plugins/fancy-file-uploader/jquery.iframe-transport.js',
'assets/plugins/fancy-file-uploader/jquery.fancy-fileupload.js',
'assets/plugins/Drag-And-Drop/dist/imageuploadify.min.js',
];
$inline_js = <<<EOD
<script>
  $('#fancy-file-upload').FancyFileUpload({
    params: {
      action: 'fileuploader'
    },
    maxfilesize: 1000000
  });
</script>
EOD;
$inline_js = <<<EOD
<script>
  $(document).ready(function () {
    $('#image-uploadify').imageuploadify();
  })
</script>
EOD;