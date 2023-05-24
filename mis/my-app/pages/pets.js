import Image from 'next/image';

import img from '../public/1.jpg';

function PetsPage() {
  return (
    <div>
      <Image src={img} placeholder="blur" alt="pet" width="100" height="200" />;
      {['1', '2', '3', '4', '5'].map((path) => {
      return (<div Key = {path}><Image src = {`/${path}.jpg`} alt =
                                     "pet" width = "100" height = "200" />
              </div>
        );
      })}
    </div>);
}

export default PetsPage;
