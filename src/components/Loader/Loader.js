import DotLoader from 'react-spinners/ClipLoader';

import { LoaderContainer } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderContainer>
      <DotLoader size={250} color={'#461646'} className="loader" />
    </LoaderContainer>
  );
}
