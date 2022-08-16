function createSecretHolder(secret) {
  class secretObject {
    constructor() {
      this.x = secret;
      this.setSecret = function (secret) {
        this.x = secret;
      };
      this.getSecret = function () {
        return this.x;
      };
    }
  }
  return new secretObject();
}
