<!DOCTYPE html>
<html>

<head>
  <title>Laravel 8 Form Example Tutorial</title>
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>

<body>
  <div class="container mt-4">
    @if(session('status'))
    <div class="alert alert-success">
      {{ session(key: 'status') }}
    </div>
  <!-- @endif
    @if(session('message'))
    <div class="alert alert-success">
      {{ session('message') }}
    </div>
    <ul>
      @foreach (session('successFiles', []) as $file)
      <li>{{ $file }} processed successfully.</li>
    @endforeach
    </ul>
  @endif -->
    <div class="card">
      <div class="card-header text-center font-weight-bold">
        Tool copy data bing.com
      </div>
      <div class="card-body">
        <!-- <form name="download-assets-form" id="download-assets-form" method="POST"
          action="{{ route('download-assets') }}">
          @csrf
          <div class="form-group">
            <label for="website_url">Website URL</label>
            <input type="text" id="website_url" name="website_url" class="form-control" required />
          </div>

          <button type="submit" class="btn btn-primary">Download Assets</button>

        </form> -->

        <form name="add-blog-post-form" id="add-blog-post-form" method="post" action="{{url('get-content-page')}}">
          @csrf
          <div class="form-group">
            <label for="linkweb">Linkweb</label>
            <input type="text" id="linkweb" name="linkweb" class="form-control" >
          </div>
          <div class="form-group">
            <label for="header_html">Header Html</label>
            <input type="text" id="header_html" name="header_html" class="form-control" >
          </div>
          <div class="form-group">
            <label for="footer_html">Footer Html</label>
            <input type="text" id="footer_html" name="footer_html" class="form-control" >
          </div>
          <div class="form-group">
            <label for="index_html">Index</label>
            <textarea id="index_html" name="index_html" class="form-control">{{ session('indexHtmlContent', '') }}</textarea>
          </div>
          <div class="form-group">
            <label for="list_html">List html</label>
            <input type="text" id="list_html" name="list_html" class="form-control" >
          </div>
          <div class="form-group">
            <label for="detail_html">Detail html</label>
            <input type="text" id="detail_html" name="detail_html" class="form-control" >
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Description</label>
            <textarea name="description" class="form-control" ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

      </div>
    </div>
  </div>
</body>

</html>