<script>
</script>

<style>
  section {
    display: grid;
    font-size: 18px;
    padding: 3rem;
    grid-template-columns: 1fr 1fr;
    gap: 3rem 5rem;
    grid-template-areas:
      'heading heading'
      'info-text form'
      'image form'
      'address form';
  }
  p {
    font-size: inherit;
    margin: 0;
    margin-bottom: 2rem;
    color: #333;
  }
  h1 {
    grid-area: 'heading';
    margin-top: 3rem;
    margin-bottom: 0;
  }
  .info-text {
    grid-area: info-text;
  }
  img {
    grid-area: image;
    justify-self: center;
    max-width: 450px;
  }
  form {
    grid-area: form;
  }
  label {
    display: block;
    margin-bottom: 1.5rem;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    margin-bottom: 4rem;
    padding-bottom: 1rem;
  }
  textarea {
    resize: none;
    min-height: 5em;
    transition: min-height 0.2s;
  }
  textarea:focus {
    min-height: 10em;
  }

  @media (max-width: 800px) {
    section {
      grid-template-columns: 1fr;
      grid-template-areas:
        'image'
        'heading'
        'info-text'
        'form'
        'address';
    }
  }
</style>

<section>
  <img class="placeholder" src="/favicon.png" alt="place_holder"/>
  <h1>Contact Us</h1>
  <p class="info-text">
  This is placeholder text.
  </p>
  <form
    method="POST"
    name="contact"
    data-netlify="true"
    action="/contact-submitted">
    <input type="hidden" name="form-name" value="contact" />
    <label for="name">Name</label>
    <input
      type="text"
      class="form-control"
      id="name"
      name="name"
      placeholder="Johnny Dogooder"
      required />
    <label for="email">Email</label>
    <input
      type="email"
      class="form-control"
      id="email"
      name="email"
      placeholder="hello@nonprofit.org"
      required />
    <label for="message">Message</label>
    <textarea
      id="message"
      class="form-control"
      name="message"
      placeholder="I had a question about..."
      required />
    <button type="submit" class="btn btn-primary">Message Us!</button>
    <!--Ignore this element. Included so the /contact-submitted page is generated when crawling the website.-->
    <a style="display: none" href="/contact-submitted">_</a>
  </form>
</section>

<svelte:head>
  <title>Contact Us</title>
</svelte:head>