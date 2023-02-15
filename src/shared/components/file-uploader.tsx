import { FileUplaoderProps } from 'apps/profile/types';

const FileUplaoder = (props: FileUplaoderProps) => {
  return (
    <>
      <form class="form" action="#" method="post">
        <div class="fv-row">
          <div class="dropzone">
            <div class="dz-message needsclick">
              <i class="bi bi-file-earmark-arrow-up text-primary fs-3x"></i>

              <div class="ms-4">
                <input
                  class="form-control"
                  id={props.id}
                  type="file"
                  accept="image/*"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default FileUplaoder;
