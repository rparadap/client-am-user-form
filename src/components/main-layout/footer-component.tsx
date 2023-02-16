const FooterComponent = () => {
  const year = new Date().getFullYear();

  return (
    <footer class="footer">
      <div class="d-sm-flex justify-content-center justify-content-sm-between">
        <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">
          Copyright © {year}
          <a href="https://www.arcelormittalca.com/" target="_blank">
            ArcelorMittal
          </a>
        </span>
      </div>
    </footer>
  );
};
export default FooterComponent;
