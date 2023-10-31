import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as CSSCascadesBlockRouterMetaData } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as blockRouterMetaDataTextFundaments } from './TextFundaments/router-data';
import { blockRouterMetaData as blockRouterMetaDataStandardTags } from './StandardTags/router-data';
import { blockRouterMetaData as blockRouterMetaDataGoogleFonts } from './GoogleFonts/router-data';
import { blockRouterMetaData as blockRouterMetaDataCssAnimation } from './CssAnimation/router-data';
import { blockRouterMetaData as blockRouterMetaDataColor } from './Color/router-data';
import { blockRouterMetaData as blockRouterMetaDataImagesFiles } from './ImagesFiles/router-data';
import { blockRouterMetaData as blockRouterMetaDataBackground } from './Background/router-data';
import { blockRouterMetaData as blockRouterMetaDataCssFilter } from './CssFilter/router-data';
import { blockRouterMetaData as blockRouterMetaDataMediaFiles } from './MediaFiles/router-data';
import { blockRouterMetaData as blockRouterMetaDataBoxModel } from './BoxModel/router-data';
import { blockRouterMetaData as blockRouterMetaDataHTMLTables } from './HTMLTables/router-data';
import { blockRouterMetaData as blockROuterMetaDataTableTennis } from './TableTennis/router-data';
import { blockRouterMetaData as blockRouterMetaDataArrayRendering } from './ArrayRendering/router-data';
import { blockRouterMetaData as blockRouterMetaDataArrayRenderToTable } from './ArrayRenderToTable/router-data';
import { blockRouterMetaData as blockRouterMetaDataFloatsAndPositioning } from './FloatsAndPositioningExercise/router-data';
import { blockRouterMetaData as blockRouterMetaDataFloatsAndPositioningExercise } from './FloatsAndPositioningExercise/router-data';
import { blockRouterMetaData as blockRouterMetaDataResponsiveWebDesign } from './RWD/router-data';

export const blockRouterMetaData = [
  CSSCascadesBlockRouterMetaData,
  blockRouterMetaDataTextFundaments,
  blockRouterMetaDataStandardTags,
  blockRouterMetaDataGoogleFonts,
  blockRouterMetaDataCssAnimation,
  blockRouterMetaDataColor,
  blockRouterMetaDataImagesFiles,
  blockRouterMetaDataBackground,
  blockRouterMetaDataCssFilter,
  blockRouterMetaDataMediaFiles,
  blockRouterMetaDataBoxModel,
  blockRouterMetaDataHTMLTables,
  blockROuterMetaDataTableTennis,
  blockRouterMetaDataArrayRendering,
  blockRouterMetaDataArrayRenderToTable,
  blockRouterMetaDataFloatsAndPositioning,
  blockRouterMetaDataFloatsAndPositioningExercise,
  blockRouterMetaDataResponsiveWebDesign,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
