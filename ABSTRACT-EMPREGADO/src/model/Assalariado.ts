import { Empregado } from "./Empregado";

export class Assalariado extends Empregado{
    private salario: number;

    public constructor(_nome:string, _cpf:string, _salario:number){
        super (_nome, _cpf)
        this.salario = _salario;
    }

    public setSalario (_salario:number): void{
        this.salario = _salario;
    }

    public getSalario(): number{
        return this.salario;
    }

    public vencimento(): number {
        return this.salario;
    }
}

