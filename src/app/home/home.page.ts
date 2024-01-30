import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public precoAcool: string =''
  public precoGasolina: string = '';
  public resultado: string = 'resultado';
  constructor() {}

  calcular(){
    if(this.precoAcool && this.precoGasolina){
      let pAlcool = parseFloat(this.precoAcool.replace(',','.'));
      let pGasolina = parseFloat(this.precoGasolina.replace(',','.'));
      this.resultado = (pAlcool/pGasolina) >= 0.7 ? 'Gasolina é mais vantajoso': 'Álcool é mais vantajoso';

    }else{
      this.resultado = 'Preencha corretamente os campos!';
    }
  }

}
