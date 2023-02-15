const LoaderComponent = () => {
  return (
    <>
      <div class="page-loader opacity-50 flex-column">
        <span class="spinner-border text-primary" role="status"></span>
        <span class="text-muted fs-6 fw-semibold mt-5">Loading...</span>
      </div>
    </>
  );
};
export default LoaderComponent;
