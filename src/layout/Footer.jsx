function Footer() {
  return (
    <footer class="page-footer teal darken-4">
      <div class="footer-copyright">
        <div class="container">
          © {new Date().getFullYear()} Copyright Text
          <a class="grey-text text-lighten-4 right" href="#!">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
