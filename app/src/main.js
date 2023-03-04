import '@ionic/vue/css/core.css';

import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

import './theme/variables.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { IonicVue } from '@ionic/vue';

/* ionic components */
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonRouterOutlet,
  IonCol,
  IonRow,
  IonGrid,
  IonItem,
  IonSelectOption,
  IonSelect
} from '@ionic/vue';

import ExploreContainer from '@/components/ExploreContainer.vue';

const app = createApp(App);

app.use(IonicVue);
app.use(router);

app.component('ExploreContainer', ExploreContainer);
app.component('IonPage', IonPage);
app.component('IonHeader', IonHeader);
app.component('IonToolbar', IonToolbar);
app.component('IonTitle', IonTitle);
app.component('IonContent', IonContent);
app.component('IonTabBar', IonTabBar);
app.component('IonTabButton', IonTabButton);
app.component('IonTabs', IonTabs);
app.component('IonLabel', IonLabel);
app.component('IonIcon', IonIcon);
app.component('IonRouterOutlet', IonRouterOutlet);
app.component('IonCol', IonCol);
app.component('IonRow', IonRow);
app.component('IonGrid', IonGrid);
app.component('IonItem', IonItem);
app.component('IonSelectOption', IonSelectOption);
app.component('IonSelect', IonSelect);

router.isReady().then(() => {
  app.mount('#app');
});
