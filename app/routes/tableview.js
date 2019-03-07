import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      firstName: 'Quarkos',
      lastname: 'Water',
      address: 12,
      state:'Fire',
      country: 'india',
    },
    {
      firstName: 'Quarkos',
      lastname: 'Water',
      address: 12,
      state:'Fire',
      country: 'india',
    }, {
      firstName: 'Quarkos',
      lastname: 'Water',
      address: 12,
      state:'Fire',
      country: 'india',
    }];

	}
});
