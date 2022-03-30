const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

chai.use(chaiHttp);
chai.should();

describe("GET /",()=>{
    it("should get project title",(done)=>{
        chai.request(app)
        .get('/')
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        })
    })
})

describe("GET /name",()=>{
    it("should get student's name",(done)=>{
        chai.request(app)
        .get('/name')
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        })
    })
})
