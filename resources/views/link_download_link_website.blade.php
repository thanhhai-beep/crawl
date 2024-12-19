
<!DOCTYPE html>
<html>
<head>
    <title>Laravel 8 Form Example Tutorial</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
  <div class="container mt-4">


  @if (session('success'))
    <div class="alert alert-success" role="alert">
      <button type="button" class="close" data-dismiss="alert">×</button>
      {{ session('success') }}
    </div>
  @elseif(session('error'))
    <div class="alert alert-danger" role="alert">
      <button type="button" class="close" data-dismiss="alert">×</button>
      {{ session('error') }}
    </div>
  @endif
  <div class="card">
    <div class="card-header text-center font-weight-bold">
        Tool copy link website (url) .
    </div>
    <div class="card-body">
      <form name="add-blog-post-form" class="form-row" id="add-blog-post-form" method="post" action="{{url('crawl-data')}}">
          {{ csrf_field() }}
          <div class="form-group col col-md-6">
            <label for="exampleInputEmail1">Domain</label>
            <input type="text" id="title" name="domain_website" class="form-control" value="{{ old('domain_website') }}">
          </div>
          <div class="form-group col col-md-6">
            <label for="exampleInputEmail1">Sub Category</label>
            <input type="text" id="title" name="sub_cate" class="form-control" value="{{ old('sub_cate') }}">
          </div>
          <div class="form-group col col-md-3 ">
            <label for="exampleInputEmail1">list html class or id</label>
            <input name="content_body_list_html" class="form-control" required="" value="{{ old('content_body_list_html') }}"/>
          </div>
          <div class="form-group col col-md-3">
            <label for="exampleInputEmail1">List Title html class or id</label>
            <input name="content_list_title_html" class="form-control"  value="{{ old('content_list_title_html') }}"/>
          </div>
          <div class="form-group col col-md-3">
            <label for="exampleInputEmail1">List link detail (href)</label>
            <input name="content_list_link_detail_href" class="form-control"  value="{{ old('content_list_link_detail_href') }}"/>
          </div>
          <div class="form-group col col-md-3">
            <label for="exampleInputEmail1">List Description html class or id</label>
            <input name="content_list_description_html" class="form-control"  value="{{ old('content_list_description_html') }}"/>
          </div>
          <div class="form-group col col-md-3">
            <label for="exampleInputEmail1">List Image html class or id</label>
            <input name="content_list_image_html" class="form-control"  value="{{ old('content_list_image_html') }}"/>
          </div>
          <div class="form-group col col-md-6">
            <label for="exampleInputEmail1">Content detail</label>
            <input name="content_detail_class_html" class="form-control" required="" value="{{ old('content_detail_class_html') }}"/>
          </div>
        <!-- <form class="row g-3">
          <div class="col-md-6">form-control
            <label for="inputName" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputName">
          </div>
          <div class="col-md-6">
            <label for="inputEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail">
          </div>
          <div class="col-12">
            <label for="inputMessage" class="form-label">Message</label>
            <textarea class="form-control" id="inputMessage"></textarea>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form> -->
          <div class="clear-fix"></div>
          <div class="form-group col col-md-3">
          <button type="submit" class="btn btn-primary">Submit</button>
          </div>
          
      </form>
    </div>
  </div>
</div>  
</body>
</html>
