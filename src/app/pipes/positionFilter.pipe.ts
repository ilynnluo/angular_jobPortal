import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positionFilter'
})
export class PositionFilterPipe implements PipeTransform {

  transform(jobs: any[], selectedPosition: string): any[] {
    if(selectedPosition === 'all'){
      return jobs;
    }
    return jobs.filter(job => job.position === selectedPosition);
  }

}
