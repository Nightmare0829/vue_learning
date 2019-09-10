const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../js/index.js');
const conn = require('../../../js/db/db.js');

describe('POST /notes', () => {
    before((done) => {
        conn.connect()
            .then(() => done())
            .catch((err) => done(err));
    });

    after((done) => {
        conn.connect()
            .then(() => done())
            .catch((err) => done(err));
    });

    it('OK, creting a new note works', (done) => {
        request(app).pos('/notes')
            .send({
                name: 'NOTE NAME',
                name: 'AAA',
            }).then((req) => {
                const body = res.body;
                expect(body).to.contain.property('_id');
                expect(body).to.contain.property('name');
                expect(body).to.contain.property('text');
            })        
    })
});

function close() {
    return mongoose.disconnect();
}