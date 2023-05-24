
//CLASSE

class Lavoratore {
    public codredd: number;
    public redditoAnnuoLordo: number;
    public tasseInps: number = 26.23;
    public tasseIrpef: number = 15;
  
    constructor(codredd: number, redditoAnnuoLordo: number) {
      this.codredd = codredd;
      this.redditoAnnuoLordo = redditoAnnuoLordo;
    }
  
    getUtileTasse(): number {
      return (this.redditoAnnuoLordo * this.codredd) / 100;
    }
  
    getTasseINPS(): number {
      return (this.getUtileTasse() * this.tasseInps) / 100;
    }
  
    getTasseIRPEF(): number {
      return (this.getUtileTasse() * this.tasseIrpef) / 100;
    }
  
    getRedditoAnnuoNetto(): number {
      return this.redditoAnnuoLordo - (this.getTasseINPS() + this.getTasseIRPEF());
    }
  }


  //ISTANZE LAVORATORI

  const lavoratore1 = new Lavoratore(46, 500000);
  const lavoratore2 = new Lavoratore(50, 605000);
  const lavoratore3 = new Lavoratore(75, 71000);
  const lavoratore4 = new Lavoratore(12, 900000);



//RISULTATI IN CONSOLE.LOG 


  console.log("----------");
  console.log("LAVORATORE 1");
  console.log("----------");
  console.log("Utile tasse lavoratore 1:", lavoratore1.getUtileTasse());
  console.log("Tasse INPS lavoratore 1:", lavoratore1.getTasseINPS());
  console.log("Tasse IRPEF lavoratore 1:", lavoratore1.getTasseIRPEF());
  console.log("Reddito annuo netto lavoratore 1:", lavoratore1.getRedditoAnnuoNetto());
  console.log("----------");
  console.log("LAVORATORE 2");
  console.log("----------");
  console.log("Utile tasse lavoratore 2:", lavoratore2.getUtileTasse());
  console.log("Tasse INPS lavoratore 2:", lavoratore2.getTasseINPS());
  console.log("Tasse IRPEF lavoratore 2:", lavoratore2.getTasseIRPEF());
  console.log("Reddito annuo netto lavoratore 2:", lavoratore2.getRedditoAnnuoNetto());
  console.log("----------");
  console.log("LAVORATORE 3");
  console.log("----------");
  console.log("Utile tasse lavoratore 3:", lavoratore3.getUtileTasse());
  console.log("Tasse INPS lavoratore 3:", lavoratore3.getTasseINPS());
  console.log("Tasse IRPEF lavoratore 3:", lavoratore3.getTasseIRPEF());
  console.log("Reddito annuo netto lavoratore 3:", lavoratore3.getRedditoAnnuoNetto());
  console.log("----------");
  console.log("LAVORATORE 4");
  console.log("----------");
  console.log("Utile tasse lavoratore 4:", lavoratore4.getUtileTasse());
  console.log("Tasse INPS lavoratore 4:", lavoratore4.getTasseINPS());
  console.log("Tasse IRPEF lavoratore 4:", lavoratore4.getTasseIRPEF());
  console.log("Reddito annuo netto lavoratore 4:", lavoratore4.getRedditoAnnuoNetto());
  

///INTERFACCIA METODO

  interface Lavoratore {
    codredd: number;
    redditoAnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;

    //metodi
    getUtileTasse(): number;
    getTasseINPS(): number;
    getTasseIRPEF(): number;
    getRedditoAnnuoNetto(): number;
  }
  
  class LavoratoreImpl implements Lavoratore {
    codredd: number;
    redditoAnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;
  
    constructor(_codredd: number, _redditoAnnuoLordo: number, _tasseInps: number, _tasseIrpef: number) {
      this.codredd = _codredd;
      this.redditoAnnuoLordo = _redditoAnnuoLordo;
      this.tasseInps = _tasseInps;
      this.tasseIrpef = _tasseIrpef;
    }
  
    getUtileTasse(): number {
      return (this.redditoAnnuoLordo * this.codredd) / 100;
    }
  
    getTasseINPS(): number {
      return (this.getUtileTasse() * this.tasseInps) / 100;
    }
  
    getTasseIRPEF(): number {
      return (this.getUtileTasse() * this.tasseIrpef) / 100;
    }
  
    getRedditoAnnuoNetto(): number {
      return this.redditoAnnuoLordo - (this.getTasseINPS() + this.getTasseIRPEF());
    }
  }
  
//ISTANZE

  const lavoratore1impl = new LavoratoreImpl(36, 50000, 26.23, 15);
  const lavoratore2impl = new LavoratoreImpl(59, 35000, 26.23, 15);


  console.log("----------");
  console.log("LAVORATORE 1 METODO INTERFACCIA");
  console.log("----------");
  console.log("Utile tasse lavoratore 1:", lavoratore1impl.getUtileTasse());
  console.log("Tasse INPS lavoratore 1:", lavoratore1impl.getTasseINPS());
  console.log("Tasse IRPEF lavoratore 1:", lavoratore1impl.getTasseIRPEF());
  console.log("Reddito annuo netto lavoratore 1:", lavoratore1impl.getRedditoAnnuoNetto());
  console.log("----------");
  console.log("LAVORATORE 2 METODO INTERFACCIA");
  console.log("----------");
  console.log("Utile tasse lavoratore 2:", lavoratore2impl.getUtileTasse());
  console.log("Tasse INPS lavoratore 2:", lavoratore2impl.getTasseINPS());
  console.log("Tasse IRPEF lavoratore 2:", lavoratore2impl.getTasseIRPEF());
  console.log("Reddito annuo netto lavoratore 2:", lavoratore2impl.getRedditoAnnuoNetto());