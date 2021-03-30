<script>
</script>

<style>
  section {
    text-align: center;
    font-size: 18px;
    padding: 3rem;
    grid-template-columns: 1fr 1fr;
    padding-top: 6rem;
    gap: 3rem 5rem;
    grid-template-areas:
      'heading heading'
      'info-text form'
      'image form'
      'address form';
  }
  h1 {
    text-align: center;
    grid-area: 'heading';
    font-family: 'Avenir';
    font-weight: 700;
    font-size: 2rem;
    margin-top: 0rem;
    margin-bottom: 1.4rem;
    margin-left: -11.1rem;
  }
  form {
    display: inline-block;
    text-align: left;
    grid-area: form;
    font-family: 'Avenir';
    margin-right: 8.6rem;
  }
  label {
    display: inline-block;
    margin-bottom: .5rem;
    font-family: 'Avenir';
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;    
  }
  input,
  textarea {
    display: block;
    width: 170%;
    margin-bottom: 1rem;
  }
  textarea {
    resize: none;
    min-height: 5rem;
    transition: min-height 0.2s;
  }
  textarea:focus {
    min-height: 10rem;
  }
  button {
    width: 170%;
  }
  fieldset {
  display: inline;
	border-radius:8px;
	box-shadow:0 0 10px rgba(3,215,252,.2);
  background-color: #ffffff;
  padding: 2rem;
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
  <fieldset>
  <h1>Contact Us</h1>
  
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
</fieldset>
</section>

<svelte:head>
  <title>Contact Us</title>
</svelte:head>