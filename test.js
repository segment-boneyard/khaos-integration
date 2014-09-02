
var khaos = require('khaos');

khaos('template', 'some-integration').run(function(err){
  if (err) return done(err);
  equal('test/expected', 'test/some-integration');
  done();
});
