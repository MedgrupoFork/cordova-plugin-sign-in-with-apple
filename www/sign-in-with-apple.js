var exec = require('cordova/exec');

/**
 * Marcador do fork MEDGRUPO.
 *
 * Existe para responder de dentro do app, sem Xcode, uma pergunta que custou
 * varios ciclos de build: o binario tem o plugin corrigido ou o original?
 * O plugin original nao expoe este campo, entao "undefined" significa que o
 * fork nao entrou no build.
 */
exports.versao = 'medgrupo.2';

exports.signin = function(arg0, success, error) {
  exec(success, error, "SignInWithApple", "signin", [arg0]);
};
