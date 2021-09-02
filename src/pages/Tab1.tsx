import './Tab1.css';

import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonNav, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, {useState} from 'react';

import ExploreContainer from '../components/ExploreContainer';

const Tab1: React.FC = () => {

  const [value, setValue] = useState('Nothing');

  const list = [
    { title: 'Titi', href: '/tab2'},
    { title: 'Tata', href: '/tab3'},
    { title: 'Toto', href: '/tab4'},
    { title: 'Tutu', href: '/tab5'},
  ]

  const handleClick = (title: string) => {
    setValue(title);

  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        
          <IonList>
            {
              list.length > 0 && list.map((item: any, id: number) => (
                <IonItem button onClick={() => handleClick(item.title)} href={item.href}>
                  <IonLabel>{item.title}</IonLabel>
                </IonItem>
              ))
            }
          </IonList>

          <IonTitle>{ value }</IonTitle>
        
        {/* <ExploreContainer name="Tab 1 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
