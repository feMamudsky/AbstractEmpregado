import { Empregado } from "./Empregado";

export class Comissionado extends Empregado {
    private valorHora: number;
    private horasTrabalhadas: number;

    constructor(nome: string, cpf: string, valorHora: number, horasTrabalhadas: number) {
        super(nome, cpf);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }

    public setValorHora(valorHora: number): void {
        this.valorHora = valorHora;
    }

    public GetValorHora(): number {
        return this.valorHora;
    }

    public setHorasTrabalhadas(horasTrabalhadas: number): void {
        this.horasTrabalhadas = horasTrabalhadas;
    }

    public getHorasTrabalhadas(): number {
        return this.horasTrabalhadas;
    }

    public vencimento(): number {
        return this.horasTrabalhadas * this.valorHora;
    }
}