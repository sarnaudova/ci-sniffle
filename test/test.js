'use strict';

var request = require("supertest");
var should = require("should");
var app = require('../app');

describe("SAMPLE unit test", function () {
    it("should return home page", function (done) {
        request(app).get("/").expect("Content-type", /text/).expect(200).end(function (err, res) {
            if (err) {
                throw err;
            }
            res.status.should.equal(200);
            done();
        });
    });
});