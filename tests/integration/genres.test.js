const request = require('supertest'); // gives a function
const { Geners } = require('../../models/gener');
let server;
describe('/api/geners', () => {
    //we need to start and close the server after each integration test so we need to start and close before and after as well.
    // there is a function which is proovided by Jest
    beforeEach( () => {server = require('../../index')} );
    // to close
    afterEach( async () => {
        server.close();
        await Geners.remove({}); // cleanup our database
    });

    describe('GET /', () => {
        it('should returns all genres', async () => {
            await Geners.collection.insertMany([
                { name: 'geners1' },
                { name: 'geners2' },
            ]);
            const res = await request(server).get('/api/geners');

            expect(res.status).toBe(200);
            expect(res.body.length).toBe(2);

            expect(res.body.some( g => g.name === 'geners1' )).toBeTruthy();
            expect(res.body.some( g => g.name === 'geners2' )).toBeTruthy();
        });
    });
});