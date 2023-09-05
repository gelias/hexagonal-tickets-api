import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';

import { AppModule } from '../../src/loan.module';

let app: INestApplication;

beforeAll(async () => {
  const moduleRef = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  app = moduleRef.createNestApplication();
  await app.init();
});

describe('On Wednesdays', () => {
  it(`should buy two adults ticket for $55.00 `, async () => {
    const response = await request(app.getHttpServer())
      .post('/api/v1/ticket/theater')
      .set('Accept', 'application/json')
      .send({
        adults: 2,
        kids: 0,
        students: 0,
        seniors: 0,
        weekday: 'WEDNESDAY',
      })
      .expect(200);

    expect(response.body.adultsPrice).toEqual(55.00);
  });

});
