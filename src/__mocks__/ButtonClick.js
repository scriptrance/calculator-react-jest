class ButtonClick{
  static clickEvent(value){
    if(value == "C"){
      return 0;
    }
    return Number(value);
  }
}

export default ButtonClick
