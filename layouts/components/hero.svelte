<script>
  export let title, body, link, image;
</script>
<section class="banner">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 mx-auto text-center">
        <h1 class="mb-3">{title}</h1>
        <p class="mb-4">{body}</p>
        <div><a href="{link.url}" class="btn btn-primary">{link.title}</a></div>

      </div>
    </div>
  </div>
</section>

<style>
  .banner {
    padding: 90px 0 50px;
  }
</style>
