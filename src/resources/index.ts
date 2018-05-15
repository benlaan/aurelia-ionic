import { IonApp } from "./ion-app"
import { IonButtonCustomAttribute } from './attributes/ion-button-attribute';
import { IonCard } from './ion-card';
import { IonCardContent } from './ion-card-content';
import { IonCardFooter } from './ion-card-footer';
import { IonCardHeader } from './ion-card-header';
import { IonColumn } from './ion-column';
import { IonContent } from "./ion-content"
import { IonFooter } from "./ion-footer"
import { IonHeader } from "./ion-header"
import { IonIcon } from "./ion-icon"
import { IonInput } from "./ion-input"
import { IonItem } from "./ion-item"
import { IonLabel } from "./ion-label"
import { IonList } from "./ion-list"
import { IonRow } from './ion-row';
import { IonSpinner } from "./ion-spinner"
import { IonTitle } from "./ion-title"
import { IonToolbar } from "./ion-toolbar"
import { ToolbarButton } from "./toolbar-button"
import { ToolbarContent } from "./toolbar-content"
import { DateFormatValueConverter } from './utilities/dateFormatValueConverter';
import { DisabledAttribute } from './utilities/disabledAttribute';
import { NumberFormatValueConverter } from './utilities/numberFormatValueConverter';

export function configure(config: any) {

    config.globalResources(

        "ionic/attributes/ion-button-attribute",
        "ionic/utilities/dateFormatValueConverter",
        "ionic/utilities/disabledAttribute",
        "ionic/utilities/numberFormatValueConverter",
        "ionic/ion-app",
        "ionic/ion-buttons",
        "ionic/ion-card-content",
        "ionic/ion-card-footer",
        "ionic/ion-card-header",
        "ionic/ion-card",
        "ionic/ion-column",
        "ionic/ion-content",
        "ionic/ion-footer",
        "ionic/ion-header",
        "ionic/ion-icon",
        "ionic/ion-input",
        "ionic/ion-item",
        "ionic/ion-label",
        "ionic/ion-list",
        "ionic/ion-row",
        "ionic/ion-spinner",
        "ionic/ion-title",
        "ionic/ion-toolbar",
        "ionic/toolbar-button",
        "ionic/toolbar-content"
    );
}

export {

    IonApp,
    IonButtonCustomAttribute,
    IonCard,
    IonCardContent,
    IonCardFooter,
    IonCardHeader,
    IonColumn,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonRow,
    IonSpinner,
    IonTitle,
    IonToolbar,
    ToolbarButton,
    ToolbarContent,
    DateFormatValueConverter,
    DisabledAttribute,
    NumberFormatValueConverter
}
