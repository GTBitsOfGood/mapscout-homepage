<script>
</script>

<style>
  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Adjust to control the height */
  }

  form {
    text-align: center;
    padding: 20px;
    /* border: 2px solid #ccc;
    border-radius: 8px; */
    max-width: 400px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
  }
</style>

<section>
  <div class="centered">
  
  <form
    method="POST"
    name="contact"
    data-netlify="true"
    action="/contact-submitted">
    
    <h1>Launching MapScout<br>Slack Group
    </h1>
    <p>
      Input general instructions on how to <br>
      join and explaining ways of addressing <br>
      errors (like not having desktop app)
    </p>
 
    <!--Ignore this element. Included so the /contact-submitted page is generated when crawling the website.-->
    <a style="display: none" href="/contact-submitted">_</a>
  </form>
</div>

</section>

<svelte:head>
  <title>Contact Us</title>
</svelte:head>