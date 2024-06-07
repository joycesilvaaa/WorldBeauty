import { Button } from "react-bootstrap";
import './style.css'
import Seletor from "../Seletor/seletor";
import { useState } from "react";

interface FormCadastroProps {
  tipo: string;
}

function FormularioCadastro({ tipo }: FormCadastroProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  function handleGeneroChange(selectedOption: string) {
      setSelectedOption(selectedOption);
  };

  // Opções de gênero
  const opcoesGenero = [
    { value: 'Masculino', label: 'Masculino' },
    { value: 'Feminino', label: 'Feminino' },
    { value: 'Outros', label: 'Outros' }
  ]
  let content

  switch (tipo) {
    case "cliente":
      content = (
        <>
          <div className="column">
            <div className="input-field col s6">
              <input id="nome" type="text" className="validate" name="nome" />
              <label htmlFor="nome">Nome</label>
            </div>
            <div className="input-field col s6">
              <input
                id="nome_social"
                type="text"
                className="validate"
                name="nome_social"
              />
              <label htmlFor="nome_social">Nome Social </label>
              <div className="">
              <label htmlFor="genero" >Gênero</label>
              <Seletor opcoes={opcoesGenero} onChange={handleGeneroChange} />
            </div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
              required
                id="rg_valor"
                type="text"
                className="validate"
                name="valor"
              />
              <label htmlFor="rg_valor">RG Valor</label>
            </div>
            <div className="input-field col s6">
              <input
              required
                id="rg_dataEmissao"
                type="date"
                className="validate"
                name="dataEmissao"
              />
              <label htmlFor="rg_dataEmissao">RG Data de Emissão</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
              required
                id="cpf"
                type="text"
                className="validate"
                name="valor"
              />
              <label htmlFor="cpf">CPF Valor</label>
            </div>
            <div className="input-field col s6">
              <input
              required
                id="cpf_dataEmissao"
                type="date"
                className="validate"
                name="dataEmissao"
              />
              <label htmlFor="cpf_dataEmissao">CPF Data de Emissão</label>
            </div>
          </div>
            <div className="row">
            <div className="input-field col s6">
              <input
              required
                id="telefone_ddd"
                type="text"
                className="validate"
                name="ddd"
              />
              <label htmlFor="telefone_ddd">Telefone DDD</label>
            </div>
            <div className="input-field col s6">
              <input
              required
                id="telefone_numero"
                type="text"
                className="validate"
                name="numero"
              />
              <label htmlFor="telefone_numero">Telefone Número</label>
            </div>
          </div>
        </>
      );
      break;
    
    case "produto":
      content = (
        <div className="column">
          <div className="input-field col s6">
            <input 
              required
              id="nome" 
              type="text" 
              className="validate" 
              name="nome" />
            <label htmlFor="nome">Nome do Produto</label>
          </div>
          <div className="input-field col s6">
            <input
            required
              id="valor_prod"
              type="number"
              step="0.01" 
              className="validate"
              name="valor"
            />
            <label htmlFor="valor_prod">Valor do Produto</label>
          </div>
          <div className="input-field col s6">
            <input
            required
              id="estoque"
              type="number"
              className="validate"
              name="estoque"
            />
            <label htmlFor="estoque">Estoque</label>
          </div>
        </div>
      );
      break

    case "servico":
      content = (
        <>
          <div className="row">
            <div className="input-field col s6">
              <input 
              required
              id="nome" 
              type="text" 
              className="validate" 
              name="nome" 
              />
              <label htmlFor="nome">Nome do Serviço</label>
            </div>
            <div className="input-field col s6">
              <input
              required
                id="valor_serv"
                type="number"
                className="validate"
                name="valor" 
                step="0.01" 
              />
              <label htmlFor="valor">Valor do Serviço</label>
            </div>
          </div>
        </>
      );
      break;
    
    default:
      content = null;
      break;
  }
  return (
    <form className="col s12">
      {content}
      <div className="row">
        <div className="col s12">
          <Button type="submit" variant="danger" name="action">
            Cadastrar
          </Button>
        </div>
      </div>
    </form>
  );
}
export default FormularioCadastro