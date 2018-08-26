import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: Date;  // date object for piping

  constructor() {
    this.date = new Date();     /* create an instance of date, when the AppComponent object
                                   is being instantiated.
                                */
  }

  /* Note: a and be are operands in this calculator program
       - iniitialized to not particular values
       - the operands, when being used in divison are as follows:
           a - will always be the dividen
           b - will always the the division
  */
  a = 500;
  b = 5;
  result = 0;
  operator = '+';
  ErrorMsg = '';

  resetOperator()
  {
    //document.getElementById('operatorNg').innerText = "";
    this.operator="";
  }
  resetDividend()
  {
    //document.getElementById('operatorNg').innerText = "";
    this.ErrorMsg="";
  }
  calculateUpdate(newOperator,newA,newB) {


     var NanA = +newA;  /* using the Unary + to convert the incoming strings to numbers*/
     var NanB = +newB;
     if((NanA != NanA )|| (NanB != NanB)) /* Nan can only be compared to Nam */
      {
        document.getElementById('divideByZero').className="CenterError";
        this.ErrorMsg = 'You must Enter two valid Numbers';
        return;
      }
     var maybeANumberA = +newA;
     var maybeANumberB = +newB;

    document.getElementById('operatorNg').className="Center";

        this.a = parseFloat(newA.replace(/,/g, ''));newA;
        this.b = parseFloat(newB.replace(/,/g, ''));newB;

        switch (newOperator) {
          case '+':
            this.result = this.a + this.b;
            break;
          case '-':
            this.result = this.a - this.b;
            break;
          case '*':
            this.result = this.a * this.b;
            break;
          case '/':
            if(this.b <= 0)
            {
              document.getElementById('divideByZero').className="CenterError";
              this.ErrorMsg = 'Dividend must be > 0 ';

              break;
            }
            else{
              this.result = this.a / this.b;
              break;
            }
          default:
            this.operator="Sorry, only +,-,*,/ operators allowed";
            document.getElementById('operatorNg').className="CenterError";

        }
    }
  }
