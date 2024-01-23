import { DataSource, DataSourceOptions } from 'typeorm';
import { databaseConfig } from './configuration';

export default new DataSource(databaseConfig as DataSourceOptions);
