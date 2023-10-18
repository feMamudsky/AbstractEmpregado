import { Assalariado } from "./model/Assalariado";
import { Comissionado } from "./model/Comissionado";

const al = new Assalariado(`Jubilea`, `666777123`, 1500);

al.setNome(`Wesley gonzaga`);
al.setCpf(`07707000707`);
al.setSalario(9807);
console.log(`Nome: ${al.getNome()}, CPF: ${al.getCpf()}`);
console.log(`Salário: ${al.getSalario()}`);
console.log(`Vencimento: ${al.vencimento()}`);

const c1 = new Comissionado (`Slikpnot`, `881888181`, 4000, 0.30);
c1.setNome(`Stratovarius`);
c1.setCpf(`7912883933`);
c1.settotalVendas(3409);
c1.setTaxaComissa(0.30);
console.log(`Nome: ${c1.getNome()},CPF: ${c1.getCpf()}`);
console.log(`Comissa: ${c1.getTaxaComissa()},Total de vendas: ${c1.gettotalVendas()}`);
console.log(`Vencimento: ${c1.vencimento()}`);