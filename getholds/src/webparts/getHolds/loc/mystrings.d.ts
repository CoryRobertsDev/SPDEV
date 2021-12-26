declare interface IGetHoldsWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'GetHoldsWebPartStrings' {
  const strings: IGetHoldsWebPartStrings;
  export = strings;
}
