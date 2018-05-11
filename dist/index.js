define(["require", "exports", "./ion-app", "./ion-content", "./ion-header", "./ion-footer", "./ion-icon", "./ion-input", "./ion-item", "./ion-label", "./ion-list", "./ion-spinner", "./ion-title", "./ion-toolbar", "./toolbar-content", "./attributes/ion-button-attribute"], function (require, exports, ion_app_1, ion_content_1, ion_header_1, ion_footer_1, ion_icon_1, ion_input_1, ion_item_1, ion_label_1, ion_list_1, ion_spinner_1, ion_title_1, ion_toolbar_1, toolbar_content_1, ion_button_attribute_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IonApp = ion_app_1.IonApp;
    exports.IonContent = ion_content_1.IonContent;
    exports.IonHeader = ion_header_1.IonHeader;
    exports.IonFooter = ion_footer_1.IonFooter;
    exports.IonIcon = ion_icon_1.IonIcon;
    exports.IonInput = ion_input_1.IonInput;
    exports.IonItem = ion_item_1.IonItem;
    exports.IonLabel = ion_label_1.IonLabel;
    exports.IonList = ion_list_1.IonList;
    exports.IonSpinner = ion_spinner_1.IonSpinner;
    exports.IonTitle = ion_title_1.IonTitle;
    exports.IonToolbar = ion_toolbar_1.IonToolbar;
    exports.ToolbarContent = toolbar_content_1.ToolbarContent;
    exports.IonButtonCustomAttribute = ion_button_attribute_1.IonButtonCustomAttribute;
    function configure(config) {
        config.globalResources("../ion-app", "../ion-content", "../ion-header", "../ion-footer", "../ion-icon", "../ion-input", "../ion-item", "../ion-label", "../ion-list", "../ion-spinner", "../ion-title", "../ion-toolbar", "../toolbar-content", "../attributes/ion-button-attribute");
    }
    exports.configure = configure;
});
