import * as React from 'react';
import styles from './GetRecords.module.scss';
import { IGetRecordsProps } from './IGetRecordsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Overview from '../components/Overview';

export default class GetRecords extends React.Component<IGetRecordsProps, {}> {
  public render(): React.ReactElement<IGetRecordsProps> {
    return(
      <React.Fragment>
        <Overview context={this.props.context}>
        </Overview>
      </React.Fragment>
    );
  }
}
