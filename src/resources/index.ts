import { IonApp } from "./ion-app"
import { IonContent } from "./ion-content"
import { IonHeader } from "./ion-header"
import { IonFooter } from "./ion-footer"
import { IonIcon } from "./ion-icon"
import { IonInput } from "./ion-input"
import { IonItem } from "./ion-item"
import { IonLabel } from "./ion-label"
import { IonList } from "./ion-list"
import { IonSpinner } from "./ion-spinner"
import { IonTitle } from "./ion-title"
import { IonToolbar } from "./ion-toolbar"
import { ToolbarContent } from "./toolbar-content"
import { IonButtonCustomAttribute } from './attributes/ion-button-attribute';

export function configure(config: any) {

    config.globalResources(

        "../ion-app",
        "../ion-content",
        "../ion-header",
        "../ion-footer",
        "../ion-icon",
        "../ion-input",
        "../ion-item",
        "../ion-label",
        "../ion-list",
        "../ion-spinner",
        "../ion-title",
        "../ion-toolbar",
        "../toolbar-content",
        "../attributes/ion-button-attribute"
    );
}

export {

    IonApp,
    IonContent,
    IonHeader,
    IonFooter,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonSpinner,
    IonTitle,
    IonToolbar,
    ToolbarContent,
    IonButtonCustomAttribute
}