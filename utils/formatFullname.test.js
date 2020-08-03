const  formatFullname = require('./formatFullname.js');

const expect = require('chai').expect;

describe('FormatFullname', () => {

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname()).to.equal('Error');
    expect(formatFullname(5)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if "fullName" is not in <firstName> <lastName> format', () => {
    expect(formatFullname('amandaDoe')).to.equal('Error');
    expect(formatFullname('Amanda Doe Test')).to.equal('Error');
  });

  it('should return "fullName" without changes if proper arg', () => {
    expect(formatFullname('Lorem Ipsum')).to.equal('Lorem Ipsum');
    expect(formatFullname('Amanda Doe')).to.equal('Amanda Doe');
  });

  it('should make fullName of proper format', () => {
    expect(formatFullname('lorem ipsum')).to.equal('Lorem Ipsum');
    expect(formatFullname('aMANDA dOe')).to.equal('Amanda Doe');
  });

});