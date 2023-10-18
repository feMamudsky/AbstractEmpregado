import { Empregado } from "./Empregado";

export class Comissionado extends Empregado {

    private TaxaComissa: number;
    private totalVendas: number;

    public constructor(_nome: string, _cpf: string, _TaxaComissa: number, _totalVendas: number) {
        super(_nome, _cpf)
        this.TaxaComissa = _TaxaComissa;
        this.totalVendas = _totalVendas;
    }

    public setTaxaComissa(_TaxaComissa: number): void {
        this.TaxaComissa = _TaxaComissa;
    }

    public getTaxaComissa(): number {
        return this.TaxaComissa;
    }

    public settotalVendas(_totalVendas: number): void {
        this.totalVendas = _totalVendas;
    }

    public gettotalVendas(): number {
        return this.totalVendas;
    }

    public vencimento(): number {
        return this.totalVendas
    }
}
