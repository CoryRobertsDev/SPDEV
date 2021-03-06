import * as React from 'react';
import styles from './GetRecords.module.scss';
import { IGetRecordsProps } from './IGetRecordsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import {ServiceProvider} from '../../../ServiceProvider';

export interface IOverViewProps {
  context:WebPartContext;
}

export interface IOverViewState {
  data:any;
}

export default class OverViewStats extends React.Component<IOverViewProps, IOverViewState> {

  private serviceProvider: ServiceProvider;

  public constructor(props: IOverViewProps, state: IOverViewState) {
    super(props);
    this.serviceProvider = new ServiceProvider(this.props.context);

    this.state = {
      data:{}
    };

  }

  public render(): React.ReactElement<IOverViewProps> {
       return(
      <React.Fragment>
        <h1>Student Holds Overview:</h1>
        <h2>Holds : {this.state.data.get_holdsResult}</h2>
      </React.Fragment>
    );
  }

  public async  componentDidMount(){
    this.getData();
  }

  private getData(){
    this.serviceProvider.
    getTotals()
      .then(
        (result: any): void => {
           console.log(result);
           this.setState({data:result[0]});
        }
      )
      .catch(error => {
        console.log(error);
      });
  }
}
