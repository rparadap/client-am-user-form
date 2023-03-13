import RegisterRequestDataView from './register-request-data-view';
import { RegisterRequestDataContainerProps } from '../types';
import { Home } from '../main';

const RegisterRequestDataContainer = (
  props: RegisterRequestDataContainerProps<Home>
) => {
  return (
    <>
      <RegisterRequestDataView onEdit={props.onEdit} />
    </>
  );
};
export default RegisterRequestDataContainer;
