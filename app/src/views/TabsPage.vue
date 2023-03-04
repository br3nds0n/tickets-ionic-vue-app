<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/ficha">
          <ion-icon :icon="addCircle"></ion-icon>
          <ion-label>Ficha</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="listCircle"></ion-icon>
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="alertCircle"></ion-icon>
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { addCircle, listCircle, alertCircle } from 'ionicons/icons';
export default {
  setup() {
    return {
      addCircle,
      listCircle,
      alertCircle
    }
  },
}
</script>