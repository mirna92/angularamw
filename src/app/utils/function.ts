import * as moment from 'moment';
export const objectify = (payload: any) => {
    return JSON.parse(JSON.stringify(payload));
  };
  
export function getCorrectDateFormat(dateInput:any){
  return moment(dateInput).format('YYYY-MM-DD');
}
