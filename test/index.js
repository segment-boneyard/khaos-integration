
var equal = require('assert-dir-equal');
var khaos = require('khaos');

it('should create an integration', function(done){
  setTimeout(answer, 20);
  khaos('template', 'test/integration').run(function(err){
    if (err) return done(err);
    equal('test/expected', 'test/integration');
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
  'https://example.com/docs',
  'https://api.example.com/v1',
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
