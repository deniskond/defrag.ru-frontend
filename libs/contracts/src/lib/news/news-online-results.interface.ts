import { NewsTypes } from './news-types.enum';
import { NewsInterface } from './news.interface';
import { CupInterface } from '@dfcomps/contracts';
import { OnlineCupResultInterface } from './online-cup-result.interface';

export interface NewsOnlineResultsInterface extends NewsInterface {
  type: NewsTypes.ONLINE_RESULTS;
  cup: CupInterface;
  results: OnlineCupResultInterface[];
}
