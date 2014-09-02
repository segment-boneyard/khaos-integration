
var Test = require('segmentio-integration-tester');
var {{pascalcase basename}} = require('../');
var mapper = require('../mapper');

describe('{{capitalcase basename}}', function(){
  var {{camelcase basename}};
  var settings;
  var test;

  beforeEach(function(){
    settings = { apiKey: 'key' };
    {{camelcase basename}} = new {{pascalcase basename}}(settings)
    test = Test({{camelcase basename}}, __dirname);
    test.mapper(mapper);
  });

  it('should have the correct settings', function(){
    test
      .name({{basename}})
      .channels(['server', 'mobile', 'client'])
      .ensure('settings.apiKey')
      .retries(2);
  });

  describe('.validate()', function() {
    it('should not be valid without an api key', function(){
      test.invalid({}, {});
    });

    it('should be valid with an api key', function(){
      test.valid({}, { apiKey: 'apiKey' });
    });
  });

  {{#mapper}}describe('mapper', function(){
    {{#identify}}describe('identify', function(){
      it('should map basic identify', function(){
        test.maps('identify-basic');
      });
    });{{/identify}}

    {{#group}}describe('group', function(){
      it('should map basic group', function(){
        test.maps('group-basic');
      });
    });{{/group}}

    {{#track}}describe('track', function(){
      it('should map basic track', function(){
        test.maps('track-basic');
      });
    });{{/track}}

    {{#page}}describe('page', function(){
      it('should map basic page', function(){
        test.maps('page-basic');
      });
    });{{/page}}

    {{#screen}}describe('screen', function(){
      it('should map basic screen', function(){
        test.maps('screen-basic');
      });
    });{{/screen}}

    {{#alias}}describe('alias', function(){
      it('should map basic alias', function(){
        test.maps('alias-basic');
      });
    });{{/alias}}
  });{{/mapper}}

  {{#identify}}describe('.identify()', function(){
    it('should send basic identify', function(done){
      var json = test.fixture('identify-basic');
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
  });{{/identify}}

  {{#group}}describe('.group()', function(){
    it('should send basic group', function(done){
      var json = test.fixture('group-basic');
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
  });{{/group}}

  {{#track}}describe('.track()', function(){
    it('should send basic track', function(done){
      var json = test.fixture('track-basic');
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
  });{{/track}}

  {{#page}}describe('.page()', function(){
    it('should send basic page', function(done){
      var json = test.fixture('page-basic');
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
  });{{/page}}

  {{#screen}}describe('.screen()', function(){
    it('should send basic screen', function(done){
      var json = test.fixture('screen-basic');
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
  });{{/screen}}

  {{#alias}}describe('.alias()', function(){
    it('should send basic alias', function(done){
      var json = test.fixture('alias-basic');
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
  });{{/alias}}
});
