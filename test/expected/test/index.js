
var Test = require('segmentio-integration-tester');
var Integration = require('../');
var mapper = require('../mapper');

describe('Integration', function(){
  var integration;
  var settings;
  var test;

  beforeEach(function(){
    settings = { apiKey: 'key' };
    integration = new Integration(settings)
    test = Test(integration, __dirname);
    test.mapper(mapper);
  });

  it('should have the correct settings', function(){
    test
      .name('Integration')
      .channels(['server', 'mobile', 'client'])
      .ensure('settings.apiKey')
      .retries(2);
  });

  describe('.validate()', function() {
    it('should not be valid without an api key', function(){
      delete settings.apiKey;
      test.invalid({}, settings);
    });

    it('should be valid with complete settings', function(){
      test.valid({}, settings);
    });
  });

  describe('mapper', function(){
    describe('identify', function(){
      it('should map basic identify', function(){
        test.maps('identify-basic');
      });
    });

    describe('group', function(){
      it('should map basic group', function(){
        test.maps('group-basic');
      });
    });

    describe('track', function(){
      it('should map basic track', function(){
        test.maps('track-basic');
      });
    });

    describe('page', function(){
      it('should map basic page', function(){
        test.maps('page-basic');
      });
    });

    describe('screen', function(){
      it('should map basic screen', function(){
        test.maps('screen-basic');
      });
    });

    describe('alias', function(){
      it('should map basic alias', function(){
        test.maps('alias-basic');
      });
    });
  });

  describe('.identify()', function(){
    it('should send basic identify', function(done){
      var json = test.fixture('identify-basic');
      var output = json.output;
      output.timestamp = new Date(output.timestamp);
      test
        .identify(json.input)
        .sends(json.output)
        .expects(200)
        .end(done);
    });

    it('should error on invalid key', function(done){
      var json = test.fixture('identify-basic');
      test
        .set({ apiKey: 'x' })
        .identify(json.input)
        .error('error message', done);
    });
  });

  describe('.group()', function(){
    it('should send basic group', function(done){
      var json = test.fixture('group-basic');
      var output = json.output;
      output.timestamp = new Date(output.timestamp);
      test
        .group(json.input)
        .sends(json.output)
        .expects(200)
        .end(done);
    });

    it('should error on invalid key', function(done){
      var json = test.fixture('group-basic');
      test
        .set({ apiKey: 'x' })
        .group(json.input)
        .error('error message', done);
    });
  });

  describe('.track()', function(){
    it('should send basic track', function(done){
      var json = test.fixture('track-basic');
      var output = json.output;
      output.timestamp = new Date(output.timestamp);
      test
        .track(json.input)
        .sends(json.output)
        .expects(200)
        .end(done);
    });

    it('should error on invalid key', function(done){
      var json = test.fixture('track-basic');
      test
        .set({ apiKey: 'x' })
        .track(json.input)
        .error('error message', done);
    });
  });

  describe('.page()', function(){
    it('should send basic page', function(done){
      var json = test.fixture('page-basic');
      var output = json.output;
      output.timestamp = new Date(output.timestamp);
      test
        .page(json.input)
        .sends(json.output)
        .expects(200)
        .end(done);
    });

    it('should error on invalid key', function(done){
      var json = test.fixture('page-basic');
      test
        .set({ apiKey: 'x' })
        .page(json.input)
        .error('error message', done);
    });
  });

  describe('.screen()', function(){
    it('should send basic screen', function(done){
      var json = test.fixture('screen-basic');
      var output = json.output;
      output.timestamp = new Date(output.timestamp);
      test
        .screen(json.input)
        .sends(json.output)
        .expects(200)
        .end(done);
    });

    it('should error on invalid key', function(done){
      var json = test.fixture('screen-basic');
      test
        .set({ apiKey: 'x' })
        .screen(json.input)
        .error('error message', done);
    });
  });

  describe('.alias()', function(){
    it('should send basic alias', function(done){
      var json = test.fixture('alias-basic');
      var output = json.output;
      output.timestamp = new Date(output.timestamp);
      test
        .alias(json.input)
        .sends(json.output)
        .expects(200)
        .end(done);
    });

    it('should error on invalid key', function(done){
      var json = test.fixture('alias-basic');
      test
        .set({ apiKey: 'x' })
        .alias(json.input)
        .error('error message', done);
    });
  });
});
