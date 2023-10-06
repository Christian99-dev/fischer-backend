import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAuswahlButton extends Schema.Component {
  collectionName: 'components_components_auswahl_buttons';
  info: {
    displayName: 'AuswahlButton';
  };
  attributes: {
    Text: Attribute.String & Attribute.Required;
    Hintergrund: Attribute.Media & Attribute.Required;
  };
}

export interface ComponentsLeistung extends Schema.Component {
  collectionName: 'components_components_leistungs';
  info: {
    displayName: 'Leistung';
  };
  attributes: {
    Beschreibung: Attribute.Text & Attribute.Required;
    Ueberschrift: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsProjekt extends Schema.Component {
  collectionName: 'components_components_projekts';
  info: {
    displayName: 'Projekt';
  };
  attributes: {
    Titel: Attribute.String & Attribute.Required;
    Beschreibung: Attribute.Text & Attribute.Required;
    Bild: Attribute.Media & Attribute.Required;
  };
}

export interface ComponentsProjektkategorie extends Schema.Component {
  collectionName: 'components_components_projektkategories';
  info: {
    displayName: 'Projektkategorie';
  };
  attributes: {
    KategorieName: Attribute.String & Attribute.Required;
    KategorieBild: Attribute.Media & Attribute.Required;
    Projekte: Attribute.Component<'components.projekt', true> &
      Attribute.SetMinMax<{
        min: 1;
      }>;
  };
}

export interface ComponentsReihe extends Schema.Component {
  collectionName: 'components_components_reihes';
  info: {
    displayName: 'reihe';
  };
  attributes: {
    Text: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsSeoPageInfo extends Schema.Component {
  collectionName: 'components_components_seo_page_infos';
  info: {
    displayName: 'SeoPageInfo';
  };
  attributes: {
    SeitenTitel: Attribute.String & Attribute.Required;
    SeitenBeschreibung: Attribute.Text & Attribute.Required;
  };
}

export interface ComponentsSpalte extends Schema.Component {
  collectionName: 'components_components_spaltes';
  info: {
    displayName: 'spalte';
    description: '';
  };
  attributes: {
    Ueberschrift: Attribute.String & Attribute.Required;
    Reihen: Attribute.Component<'components.reihe', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.auswahl-button': ComponentsAuswahlButton;
      'components.leistung': ComponentsLeistung;
      'components.projekt': ComponentsProjekt;
      'components.projektkategorie': ComponentsProjektkategorie;
      'components.reihe': ComponentsReihe;
      'components.seo-page-info': ComponentsSeoPageInfo;
      'components.spalte': ComponentsSpalte;
    }
  }
}
