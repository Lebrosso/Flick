function NoNetworkException(message) {
  this.name = 'NoNetworkException';
  this.message= message;
}
MyException.prototype = new Error();
MyException.prototype.constructor = MyException;