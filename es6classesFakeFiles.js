/* eslint-disable */
class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this._contents = contents;
    this._filename = fullName.replace(/\.[a-zA-Z0-9]+$/, '');
    this._extension = fullName.substr(fullName.lastIndexOf('.') + 1);
    this._lineCounter = 0;
    this._charCounter = 0;
  }

  get fullName() {
    return this._fullName;
  }

  get filename() {
    return this._filename;
  }

  get extension() {
    return this._extension;
  }

  getContents() {
    return this._contents;
  }

  write(str) {
    if (this._contents === '') {
      this._contents = str;
    } else {
      this._contents += '\n' + str;
    }
  }

  gets() {
    let contArr = this._contents.split('\n');
    let res = contArr[this._lineCounter];
    this._lineCounter++;
    return res;
  }

  getc() {
    let res = this._contents[this._charCounter];
    this._charCounter++;
    return res;
  }
}
