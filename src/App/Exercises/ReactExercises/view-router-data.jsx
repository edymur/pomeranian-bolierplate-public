import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { ReactEventsUseStateMetaData } from './ReactEventsUseState/router-data';

import { ReactIfStatementsMetaData } from './ReactIfStatements/router-data';

import { ReactIfStatementsMoreOrLessMetaData } from './ReactIfStatementsMoreOrLess/router-data';

import { ToDoWithServerMetaData } from './ToDoWithServer/router-data';

import { FormsMetaData } from './Forms/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactEventsUseStateMetaData,
  ReactIfStatementsMetaData,
  ReactIfStatementsMoreOrLessMetaData,
  ToDoWithServerMetaData,
  FormsMetaData,
];

export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
