import { useState } from 'react'
import './Form.module.css'

function Form() {
    let [imc, setImc] = useState('');
    let [firstRun, setFirstRun] = useState(true);
    let [selectedRow, setSelectedRow] = useState('');
    let altura = '';
    let peso = '';

    const calculo = () => { // function q calcula o imc
        imc = Math.round(peso / (altura * altura) * 100) / 100;
    }

    function coletaValores() {
        altura = document.getElementById('firstInput').value;
        peso = document.getElementById('lastInput').value;
    }

    function validaValores() {
        coletaValores();
        console.log(peso);

        if (altura != ('') && peso != ('')) {
            calculo();
        }
        console.log(imc)
    }

    function indicaNaTabela() {
        if (imc >= 40) {
            selectedRow = document.getElementById("linha-5");
            selectedRow.classList.add('highlited');
        } else if (imc >= 30 && imc < 40) {
            selectedRow = document.getElementById("linha-4");
            selectedRow.classList.add('highlited');
        } else if (imc >= 25 && imc < 30) {
            selectedRow = document.getElementById("linha-3");
            selectedRow.classList.add('highlited');
        } else if (imc >= 18.5 && imc < 25) {
            selectedRow = document.getElementById("linha-2");
            selectedRow.classList.add('highlited');
        } else if (imc != 0 && imc < 18.5) {
            selectedRow = document.getElementById("linha-1");
            selectedRow.classList.add('highlited');
        }
        setSelectedRow(selectedRow);
    }

    function removeDaTabela() {
        if (firstRun == false) {
            selectedRow.classList.remove('highlited');
        }
        firstRun = false;
        setFirstRun(firstRun);
    }

    function printImc() {
        return (
            <h3 id="imcText" className="text-center mb-4 border border-dark rounded bg-success text-white hidden">Seu IMC é: {imc}</h3>
        )
    }

    function buttonClick() {
        validaValores();

        removeDaTabela();

        indicaNaTabela();

        setImc(imc);
        let imcShowed = document.getElementById("imcText");
        imcShowed.classList.remove('hidden');
    }

    return (
        <div class="container">
            <h1 className="text-center main-title">Calculadora de IMC</h1>
            <div className="form-div">
                <form class="row d-flex justify-content-center">
                    <input id="firstInput" type="number" placeholder="Digite aqui sua altura" />
                    <input id="lastInput" type="number" placeholder="Digite aqui seu peso" />
                    <button type="button" className="calculate btn btn-success border border-dark mt-2" onClick={event => buttonClick()}>
                        Calcular
                    </button>
                </form>
            </div>
            {printImc()}
            <div className="border rounded border-dark tabela"> {/* tabela */}
                <div className="row m-3 text-center border-bottom border-dark"> {/* titulo da tabela */}
                    <h2>Tabela de interpretação do IMC</h2>
                </div>
                <div className="ms-5 me-5"> {/* colunas */}
                    <div className="row" id="categorias"> {/* subtitulos da tabela */}
                        <div className="col-md-4">
                            <h4>IMC</h4>
                        </div>
                        <div className="col-md-4">
                            <h4>Classificação</h4>
                        </div>
                        <div className="col-md-4">
                            <h4>Grau de obesidade</h4>
                        </div>
                    </div>
                    <hr />
                    <div className="row" id="linha-1"> {/* abaixo de 18,5 */}
                        <div className="col-md-4">
                            <h5>Menor que 18,5</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>Magreza</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>0</h5>
                        </div>
                    </div>
                    <div className="row" id="linha-2"> {/* entre 18,5 até 24,9 */}
                        <div className="col-md-4">
                            <h5>Entre 18,5 e 24,9</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>Normal</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>0</h5>
                        </div>
                    </div>
                    <div className="row" id="linha-3"> {/* entre 25,0 até 29,9 */}
                        <div className="col-md-4">
                            <h5>Entre 25,0 e 29,9</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>Sobrepeso</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>I</h5>
                        </div>
                    </div>
                    <div className="row" id="linha-4"> {/* entre 30,0 até 39,9 */}
                        <div className="col-md-4">
                            <h5>Entre 30,0 e 39,9</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>Obesidade</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>II</h5>
                        </div>
                    </div>
                    <div className="row" id="linha-5"> {/* > 40,0 */}
                        <div className="col-md-4">
                            <h5>Maior que 40,0</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>Obesidade Grave</h5>
                        </div>
                        <div className="col-md-4">
                            <h5>III</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form