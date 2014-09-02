
var equal = require('assert-dir-equal');
var khaos = require('khaos');

it('should create an integration', function(done){
  setTimeout(answer, 20);
  khaos('template', 'test/some-integration').run(function(err){
    if (err) return done(err);
    equal('test/expected', 'test/some-integration');
    done();
  });
});

var answers = [
  'y',
  'y',
  'y',
  'y',
  'y',
  'y',
  'y',
  'http://some-integration.com/docs',
  'http://api.some-integration.com/v1',
];

function answer(){
  answers.forEach(function(answer){
    answer.split('').forEach(press);
    press('', { name: 'enter' });
  });
}

function press(c, k){
  process.stdin.emit('keypress', c, k);
}
