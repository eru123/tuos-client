import Auth from './Auth';

class Tuos {
  constructor(opts) {
    this.host = String(opts.host || '/api/v1');
    this.auth = new Auth({ host: this.host });
  }
}

export default Tuos;