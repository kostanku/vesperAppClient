import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryWebApiModule implements InMemoryDbService {
  createDb() {
    const appointments = [
      { id: '1', host_id: '1', host_name: 'Steffen', guest_name: 'Andreas', guest_id: '2', date_offered: '23.08.2018 / 19.00' },
      { id: '2', host_id: '2', host_name: 'Andreas', guest_name: 'Steffen', guest_id: '1' },
    ];

    const profiles =  [
      {id: '1', email: 'steffen.kocher@gmail.com', name: 'Steffen'},
      {id: '2', email: 'andreas.kuttler@gmail.com', name: 'Andreas'}
    ];
    return {'appointments': appointments, 'profiles': profiles};
  }
}
