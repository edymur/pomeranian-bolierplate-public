import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';

import { blockRouterMetaData as blockRouterMetaDataComplexTypesInJS  } from './Exercise-js-complex-types-js/router-data';

import { blockRouterMetaData as blockRouterMetaDataJsFunctionBasic } from './JsFunctionBasic/router-data';

import { blockRouterMetaData as blockRouterMetaDataBlok22Warmup } from './Blok22Warmup/router-data';

import { blockRouterMetaData as blockRouterMetaDataSetTimeout } from './SetTimeout/router-data';

import { blockRouterMetaData as blockRouterMetaDataVanishString } from './VanishString/router-data';

import { blockRouterMetaData as blockRouterMetaDataHitTheMoleGame } from './HitTheMoleGame/router-data';

import { blockRouterMetaData as blockRouterMetaDataMemoGame } from './MemoGame/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataComplexTypesInJS,
  blockRouterMetaDataJsFunctionBasic,
  blockRouterMetaDataBlok22Warmup,
  blockRouterMetaDataSetTimeout,
  blockRouterMetaDataVanishString,
  blockRouterMetaDataHitTheMoleGame,
  blockRouterMetaDataMemoGame,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
