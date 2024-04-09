import { useState } from 'react';
import './App.css';
import ProductData from './assets/mocks/product-data';
import { MlcHeader } from './components/molecules/mlc-header/MlcHeader';
import { OrganismControl } from './components/organisms/OrganismControl/OrganismControl';
import { OrganismWatchViewer } from './components/organisms/OrganismWatchViewer/OrganismWatchViewer';

function App() {

  const [imageSelected, setImageSelected] = useState('');
  const [selectAction, setSelectAction] = useState('');
  
  return (
    <>
      <MlcHeader />
      <div className='app__container'>
        <div className='app__control'>
          <OrganismWatchViewer
            src={imageSelected}
            alt={imageSelected}
            radio={selectAction}/>
        </div>
        <div className='app__control'>
          <OrganismControl 
            textTemplate={{
              title: ProductData.title,
              paragraph: ProductData.description,
              selectColor: 'Select Color',
              features: 'Features',
              time: 'Time',
              heartRate: 'Heart Rate',
              buyNow: 'Buy Now'
            }}
            watches={ProductData.colorOptions}
            onSelectWatch={setImageSelected}
            onActionRadio={setSelectAction}/>
        </div>
      </div>
    </>
  );
}

export default App;
