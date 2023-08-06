document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('form');
    const tipoTecido = document.getElementById('tipoTecido');
    const inputFornecedorEntrada = document.getElementById('inputFornecedorEntrada');
    const inputCodigoProdutoEntrada = document.getElementById('inputCodigoProdutoEntrada');
    const inputNumeroNotaEntrada = document.getElementById('inputNumeroNotaEntrada');
    const inputQuantidadeEntrada = document.getElementById('inputQuantidadeEntrada');
    const inputValorProdutoEntrada = document.getElementById('inputValorProdutoEntrada');
    const inputMargemVenda = document.getElementById('inputMargemVenda');
    const inputCodigoCliente = document.getElementById('inputCodigoCliente');
    const inputCodigoProdutoSaida = document.getElementById('inputCodigoProdutoSaida');
    const inputNumeroPedido = document.getElementById('inputNumeroPedido');
    const inputNomeEmpresaCadCliente = document.getElementById('inputNomeEmpresaCadCliente');
    const inputCnpjCadCliente = document.getElementById('inputCnpjCadCliente');
    const inputEnderecoCadCliente = document.getElementById('inputEnderecoCadCliente');
    const inputTelefoneCadCliente = document.getElementById('inputTelefoneCadCliente');
    const inputEmailCadCliente = document.getElementById('inputEmailCadCliente');
    const inputNomeFuncionario = document.getElementById('inputNomeFuncionario');
    const inputCpf = document.getElementById('inputCpf');
    const inputEnderecoFuncionario = document.getElementById('inputEnderecoFuncionario');
    const inputTelefoneFuncionario = document.getElementById('inputTelefoneFuncionario');
    const inputEmailFuncionario = document.getElementById('inputEmailFuncionario');
    const inputNomeEmpresaFornecedor = document.getElementById('inputNomeEmpresaFornecedor');
    const inputCnpjFornecedor = document.getElementById('inputCnpjFornecedor');
    const inputEnderecoFornecedor = document.getElementById('inputEnderecoFornecedor');
    const inputTelefoneFornecedor = document.getElementById('inputTelefoneFornecedor');
    const inputEmailFornecedor = document.getElementById('inputEmailFornecedor');
    const inputNomeEmpresaAltFornecedor = document.getElementById('inputNomeEmpresaAltFornecedor');
    const inputCnpjAltFornecedor = document.getElementById('inputCnpjAltFornecedor');
    const inputEnderecoAltFornecedor = document.getElementById('inputEnderecoAltFornecedor');
    const inputTelefoneAltFornecedor = document.getElementById('inputTelefoneAltFornecedor');
    const inputEmailAltFornecedor = document.getElementById('inputEmailAltFornecedor');
    const inputNomeEmpresaResConsultaFornecedor = document.getElementById('inputNomeEmpresaResConsultaFornecedor');
    const inputCnpjResConsultaFornecedor = document.getElementById('inputCnpjResConsultaFornecedor');
    const inputEnderecoResConsultaFornecedor = document.getElementById('inputEnderecoResConsultaFornecedor');
    const inputTelefoneResConsultaFornecedor = document.getElementById('inputTelefoneResConsultaFornecedor');
    const inputEmailResConsultaFornecedor = document.getElementById('inputEmailResConsultaFornecedor');
    const inputNomeEmpresaAltCliente = document.getElementById('inputNomeEmpresaAltCliente');
    const inputCnpjAltCliente = document.getElementById('inputCnpjAltCliente');
    const inputEnderecoAltCliente = document.getElementById('inputEnderecoAltCliente');
    const inputTelefoneAltCliente = document.getElementById('inputTelefoneAltCliente');
    const inputEmailAltCliente = document.getElementById('inputEmailAltCliente');
    const inputNomeEmpresaResConsultaCliente = document.getElementById('inputNomeEmpresaResConsultaCliente');
    const inputCnpjResConsultaCliente = document.getElementById('inputCnpjResConsultaCliente');
    const inputEnderecoResConsultaCliente = document.getElementById('inputEnderecoResConsultaCliente');
    const inputTelefoneResConsultaCliente = document.getElementById('inputTelefoneResConsultaCliente');
    const inputEmailResConsultaCliente = document.getElementById('inputEmailResConsultaCliente');
    const inputNomeEmpresaAltFuncionario = document.getElementById('inputNomeEmpresaAltFuncionario');
    const inputCnpjAltFuncionario = document.getElementById('inputCnpjAltFuncionario');
    const inputEnderecoAltFuncionario = document.getElementById('inputEnderecoAltFuncionario');
    const inputTelefoneAltFuncionario = document.getElementById('inputTelefoneAltFuncionario');
    const inputEmailAltFuncionario = document.getElementById('inputEmailAltFuncionario');
    const inputNomeEmpresaResConsultaFuncionario = document.getElementById('inputNomeEmpresaResConsultaFuncionario');
    const inputCnpjResConsultaFuncionario = document.getElementById('inputCnpjResConsultaFuncionario');
    const inputEnderecoResConsultaFuncionario = document.getElementById('inputEnderecoResConsultaFuncionario');
    const inputTelefoneResConsultaFuncionario = document.getElementById('inputTelefoneResConsultaFuncionario');
    const inputEmailResConsultaFuncionario = document.getElementById('inputEmailResConsultaFuncionario');
    const inputTipoTecidoResConsultaProduto = document.getElementById('inputTipoTecidoResConsultaProduto');
    const inputDadosAdicionaisResConsultaProduto = document.getElementById('inputDadosAdicionaisResConsultaProduto');
    const inputQuantidadeResConsultaProduto = document.getElementById('inputQuantidadeResConsultaProduto');
    const inputValorResConsultaProduto = document.getElementById('inputValorResConsultaProduto');
    const inputTipoProdutoAltProduto = document.getElementById('inputTipoProdutoAltProduto');
    const inputDadosAdicionaisAltProduto = document.getElementById('inputDadosAdicionaisAltProduto');
    const btCadProdutoAlteracaoSalvar = document.getElementById('btCadProdutoAlteracaoSalvar');
    const btResConsultaProdutoExcluir = document.getElementById('btResConsultaProdutoExcluir');
    const btResConsultaClienteExcluir = document.getElementById('btResConsultaClienteExcluir');
    const btCadClienteAlteracaoSalvar = document.getElementById('btCadClienteAlteracaoSalvar');
    const btCadFornecedorAlteracaoSalvar = document.getElementById('btCadFornecedorAlteracaoSalvar');
    const btResConsultaFornecedorExcluir = document.getElementById('btResConsultaFornecedorExcluir');
    const btCadFuncionarioAlteracaoSalvar = document.getElementById('btCadFuncionarioAlteracaoSalvar');
    const btResConsultaFuncionarioExcluir = document.getElementById('btResConsultaFuncionarioExcluir');

    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        checkInputSaveCadProduto();
        inputClear();
    
    });
    
    form.addEventListener("reset", (e) => {
        e.preventDefault();
    
        checkInputResetCadProduto();
        inputClear();
 
    
    });
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        checkInputEntradaMercadoria();
        inputClear();
    
    });
    
    form.addEventListener("reset", (e) => {
        e.preventDefault();
    
        checkInputResetEntradaMercadoria();
        inputClear();
    
    });
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        checkInputSaidaMercadoria();
        inputClear();
    
    });
    
    form.addEventListener("reset", (e) => {
        e.preventDefault();
    
        checkInputResetSaidaMercadoria();
        inputClear();
    
    });
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        checkInputCadCliente();
        inputClear();
    
    });
    
    form.addEventListener("reset", (e) => {
        e.preventDefault();
    
        checkInputResetCadCliente();
        inputClear();
    
    });
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        checkInputCadFuncionario();
        inputClear();
    
    });
    
    form.addEventListener("reset", (e) => {
        e.preventDefault();
    
        checkInputResetCadFuncionario();
        inputClear();
    
    });
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        checkInputCadFornecedor();
        inputClear();
    
    });
    
    form.addEventListener("reset", (e) => {
        e.preventDefault();
    
        checkInputResetCadFornecedor();
        inputClear();
    
    });
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        checkInputConsultaFornecedorAlteracao();
        inputClear();   
    
    });

    form.addEventListener("reset", (e) => {
        e.preventDefault();
    
        checkInputResetConsultaFornecedor();
        inputClear();   
    
    }); 
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        checkInputConsultaClienteAlteracao();
        inputClear();   
    
    });

    form.addEventListener("reset", (e) => {
        e.preventDefault();
    
        checkInputResetConsultaCliente();
        inputClear();   
    
    }); 

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        checkInputConsultaFuncionarioAlteracao();
        inputClear();   
    
    });

    form.addEventListener("reset", (e) => {
        e.preventDefault();
    
        checkInputResetConsultaFuncionario();
        inputClear();   
    
    }); 

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        checkInputConsultaProdutoAlteracao();
        inputClear();   
    
    });

    form.addEventListener("reset", (e) => {
        e.preventDefault();
    
        checkInputResetConsultaProduto();
        inputClear();   
    
    }); 


  
    
    function checkInputSaveCadProduto() {
        const tipoTecidoValue = tipoTecido?.value
    
        if (tipoTecidoValue === "") {
            setErrorFor(tipoTecido, "Campo obrigatório!");
        } else {
            setSaveFor(btCadastro, 'Salvo com sucesso!');
            setSucessFor(tipoTecido);
        }
    
    }
    
    function checkInputResetCadProduto() {
        const tipoTecidoValue = tipoTecido?.value
    
        if (tipoTecidoValue === "") {
            setErrorFor(tipoTecido, "Campo obrigatório!");
        } else {
            setSucessFor(tipoTecido);
        }
    
        if(tipoTecidoValue !== "") {
            setDeletFor(btExcluirCadProduto, '');
        }
    
    }
    
    function checkInputEntradaMercadoria() {
        const inputFornecedorEntradaValue = inputFornecedorEntrada?.value
        const inputCodigoProdutoEntradaValue = inputCodigoProdutoEntrada?.value
        const inputNumeroNotaEntradaValue = inputNumeroNotaEntrada?.value
        const inputQuantidadeEntradaValue = inputQuantidadeEntrada?.value
        const inputValorProdutoEntradaValue = inputValorProdutoEntrada?.value
        const inputMargemVendaValue = inputMargemVenda?.value
        const inputClearValue = inputClear?.value;
    
        if (inputFornecedorEntradaValue === "") {
            setErrorFor(inputFornecedorEntrada, "Campo obrigatório!");
        } else {
            setSucessFor(inputFornecedorEntrada);
        }
    
        if (inputCodigoProdutoEntradaValue === "") {
            setErrorFor(inputCodigoProdutoEntrada, "Campo obrigatório!");
        } else {
            setSucessFor(inputCodigoProdutoEntrada);
        }
    
        if (inputNumeroNotaEntradaValue === "") {
            setErrorFor(inputNumeroNotaEntrada, "Campo obrigatório!");
        } else {
            setSucessFor(inputNumeroNotaEntrada);
        }
    
        if (inputQuantidadeEntradaValue === "") {
            setErrorFor(inputQuantidadeEntrada, "Campo obrigatório!");
        } else {
            setSucessFor(inputQuantidadeEntrada);
        }
    
        if (inputValorProdutoEntradaValue === "") {
            setErrorFor(inputValorProdutoEntrada, "Campo obrigatório!");
        } else {
            setSucessFor(inputValorProdutoEntrada);
        }

        if (inputMargemVendaValue === "") {
            setErrorFor(inputMargemVenda, "Campo obrigatório!");
        } else {
            setSucessFor(inputMargemVenda);
        }
    
            if (inputFornecedorEntradaValue != "" 
            && inputCodigoProdutoEntradaValue != "" 
            && inputNumeroNotaEntradaValue != "" 
            && inputQuantidadeEntradaValue != "" 
            && inputValorProdutoEntradaValue != ""
            && inputMargemVendaValue != "") {
            setSaveFor(btCadEntradaMercSalvar, '');
    
        }
        

    
    }
    
    function checkInputResetEntradaMercadoria() {
        const inputFornecedorEntradaValue = inputFornecedorEntrada?.value
        const inputCodigoProdutoEntradaValue = inputCodigoProdutoEntrada?.value
        const inputNumeroNotaEntradaValue = inputNumeroNotaEntrada?.value
        const inputQuantidadeEntradaValue = inputQuantidadeEntrada?.value
        const inputValorProdutoEntradaValue = inputValorProdutoEntrada?.value
        const inputMargemVendaValue = inputMargemVenda?.value
    
        if (inputFornecedorEntradaValue === "") {
            setErrorFor(inputFornecedorEntrada, "Campo obrigatório!");
        } else {
            setSucessFor(inputFornecedorEntrada);
        }
    
        if (inputCodigoProdutoEntradaValue === "") {
            setErrorFor(inputCodigoProdutoEntrada, "Campo obrigatório!");
        } else {
            setSucessFor(inputCodigoProdutoEntrada);
        }
    
        if (inputNumeroNotaEntradaValue === "") {
            setErrorFor(inputNumeroNotaEntrada, "Campo obrigatório!");
        } else {
            setSucessFor(inputNumeroNotaEntrada);
        }
    
        if (inputQuantidadeEntradaValue === "") {
            setErrorFor(inputQuantidadeEntrada, "Campo obrigatório!");
        } else {
            setSucessFor(inputQuantidadeEntrada);
        }
    
        if (inputValorProdutoEntradaValue === "") {
            setErrorFor(inputValorProdutoEntrada, "Campo obrigatório!");
        } else {
            setSucessFor(inputValorProdutoEntrada);
        }

        if (inputMargemVendaValue === "") {
            setErrorFor(inputMargemVenda, "Campo obrigatório!");
        } else {
            setSucessFor(inputMargemVenda);
        }
    
            if (inputFornecedorEntradaValue != "" 
            && inputCodigoProdutoEntradaValue != "" 
            && inputNumeroNotaEntradaValue != "" 
            && inputQuantidadeEntradaValue != "" 
            && inputValorProdutoEntradaValue != "" 
            && inputMargemVendaValue != "") {
            setDeletFor(btExcluirEntradaMerc, '');
    
        }
    
    }
    
    
    function checkInputSaidaMercadoria() {
        const inputCodigoClienteValue = inputCodigoCliente?.value
        const inputCodigoProdutoSaidaValue = inputCodigoProdutoSaida?.value
        const inputNumeroPedidoValue = inputNumeroPedido?.value
    
        if (inputCodigoClienteValue === "") {
            setErrorFor(inputCodigoCliente, "Campo obrigatório!");
        } else {
            setSucessFor(inputCodigoCliente);
        }
    
        if (inputCodigoProdutoSaidaValue === "") {
            setErrorFor(inputCodigoProdutoSaida, "Campo obrigatório!");
        } else {
            setSucessFor(inputCodigoProdutoSaida);
        }
    
        if (inputNumeroPedidoValue === "") {
            setErrorFor(inputNumeroPedido, "Campo obrigatório!");
        } else {
            setSucessFor(inputNumeroPedido);
        }
    
        if (inputCodigoClienteValue != "" && inputCodigoProdutoSaidaValue != "" && inputNumeroPedidoValue != "") {
            setSaveFor(btCadSaidaMercSalvar, '');
    
        }
    
    }
    
    function checkInputResetSaidaMercadoria() {
        const inputCodigoClienteValue = inputCodigoCliente?.value
        const inputCodigoProdutoSaidaValue = inputCodigoProdutoSaida?.value
        const inputNumeroPedidoValue = inputNumeroPedido?.value
    
        if (inputCodigoClienteValue === "") {
            setErrorFor(inputCodigoCliente, "Campo obrigatório!");
        } else {
            setSucessFor(inputCodigoCliente);
        }
    
        if (inputCodigoProdutoSaidaValue === "") {
            setErrorFor(inputCodigoProdutoSaida, "Campo obrigatório!");
        } else {
            setSucessFor(inputCodigoProdutoSaida);
        }
    
        if (inputNumeroPedidoValue === "") {
            setErrorFor(inputNumeroPedido, "Campo obrigatório!");
        } else {
            setSucessFor(inputNumeroPedido);
        }
    
        if (inputCodigoClienteValue != "" && inputCodigoProdutoSaidaValue != "" && inputNumeroPedidoValue != "") {
            setDeletFor(btExcluirSaidaMerc, '');
    
        }
    
    }
    
    function checkInputCadCliente() {
    
        const inputNomeEmpresaCadClienteValue = inputNomeEmpresaCadCliente?.value
        const inputCnpjCadClienteValue = inputCnpjCadCliente?.value
        const inputEnderecoCadClienteValue = inputEnderecoCadCliente?.value
        const inputTelefoneCadClienteValue = inputTelefoneCadCliente?.value
        const inputEmailCadClienteValue = inputEmailCadCliente?.value
    
        if (inputNomeEmpresaCadClienteValue === "") {
            setErrorFor(inputNomeEmpresaCadCliente, "Campo obrigatório!");
        } else {
            setSucessFor(inputNomeEmpresaCadCliente);
        }
    
        if (inputCnpjCadClienteValue === "") {
            setErrorFor(inputCnpjCadCliente, "Campo obrigatório!");
        } else {
            setSucessFor(inputCnpjCadCliente);
        }
    
        if (inputEnderecoCadClienteValue === "") {
            setErrorFor(inputEnderecoCadCliente, "Campo obrigatório!");
        } else {
            setSucessFor(inputEnderecoCadCliente);
        }
    
        if (inputTelefoneCadClienteValue === "") {
            setErrorFor(inputTelefoneCadCliente, "Campo obrigatório!");
        } else {
            setSucessFor(inputTelefoneCadCliente);
        }
    
        if (inputEmailCadClienteValue === "") {
            setErrorFor(inputEmailCadCliente, "Campo obrigatório!");
        } else {
            setSucessFor(inputEmailCadCliente);
        }
    
        if (inputEmailCadClienteValue != "" && inputTelefoneCadClienteValue != "" && inputEnderecoCadClienteValue != "" && inputCnpjCadClienteValue != "" && inputNomeEmpresaCadClienteValue) {
            setSaveFor(btCadClienteSalvar, '');
    
        }
    }
    
    function checkInputResetCadCliente() {
    
        const inputNomeEmpresaCadClienteValue = inputNomeEmpresaCadCliente?.value
        const inputCnpjCadClienteValue = inputCnpjCadCliente?.value
        const inputEnderecoCadClienteValue = inputEnderecoCadCliente?.value
        const inputTelefoneCadClienteValue = inputTelefoneCadCliente?.value
        const inputEmailCadClienteValue = inputEmailCadCliente?.value
    
        if (inputNomeEmpresaCadClienteValue === "") {
            setErrorFor(inputNomeEmpresaCadCliente, "Campo obrigatório!");
        } else {
            setSucessFor(inputNomeEmpresaCadCliente);
        }
    
        if (inputCnpjCadClienteValue === "") {
            setErrorFor(inputCnpjCadCliente, "Campo obrigatório!");
        } else {
            setSucessFor(inputCnpjCadCliente);
        }
    
        if (inputEnderecoCadClienteValue === "") {
            setErrorFor(inputEnderecoCadCliente, "Campo obrigatório!");
        } else {
            setSucessFor(inputEnderecoCadCliente);
        }
    
        if (inputTelefoneCadClienteValue === "") {
            setErrorFor(inputTelefoneCadCliente, "Campo obrigatório!");
        } else {
            setSucessFor(inputTelefoneCadCliente);
        }
    
        if (inputEmailCadClienteValue === "") {
            setErrorFor(inputEmailCadCliente, "Campo obrigatório!");
        } else {
            setSucessFor(inputEmailCadCliente);
        }
    
        if (inputEmailCadClienteValue != "" && inputTelefoneCadClienteValue != "" && inputEnderecoCadClienteValue != "" && inputCnpjCadClienteValue != "" && inputNomeEmpresaCadClienteValue) {
            setDeletFor(btExcluirCadCliente, '');
    
        }
    
    }
    
        function checkInputCadFuncionario() {
            const inputNomeFuncionarioValue = inputNomeFuncionario?.value
            const inputCpfValue = inputCpf?.value
            const inputEnderecoFuncionarioValue = inputEnderecoFuncionario?.value
            const inputTelefoneFuncionarioValue = inputTelefoneFuncionario?.value
            const inputEmailFuncionarioValue = inputEmailFuncionario?.value
    
            if (inputNomeFuncionarioValue === "") {
                setErrorFor(inputNomeFuncionario, "Campo obrigatório!");
            } else {
                setSucessFor(inputNomeFuncionario);
            }
    
            if (inputCpfValue === "") {
                setErrorFor(inputCpf, "Campo obrigatório!");
            } else {
                setSucessFor(inputCpf);
            }
    
            if (inputEnderecoFuncionarioValue === "") {
                setErrorFor(inputEnderecoFuncionario, "Campo obrigatório!");
            } else {
                setSucessFor(inputEnderecoFuncionario);
            }
    
            if (inputTelefoneFuncionarioValue === "") {
                setErrorFor(inputTelefoneFuncionario, "Campo obrigatório!");
            } else {
                setSucessFor(inputTelefoneFuncionario);
            }
    
            if (inputEmailFuncionarioValue === "") {
                setErrorFor(inputEmailFuncionario, "Campo obrigatório!");
            } else {
                setSucessFor(inputEmailFuncionario);
            }
    
            if (inputNomeFuncionarioValue != "" && inputCpfValue != "" && inputEnderecoFuncionarioValue != "" && inputTelefoneFuncionarioValue != "" && inputEmailFuncionarioValue) {
                setSaveFor(btCadFuncionarioSalvar, '');
        
            }
    
        }
    
        function checkInputResetCadFuncionario() {
            const inputNomeFuncionarioValue = inputNomeFuncionario?.value
            const inputCpfValue = inputCpf?.value
            const inputEnderecoFuncionarioValue = inputEnderecoFuncionario?.value
            const inputTelefoneFuncionarioValue = inputTelefoneFuncionario?.value
            const inputEmailFuncionarioValue = inputEmailFuncionario?.value
    
            if (inputNomeFuncionarioValue === "") {
                setErrorFor(inputNomeFuncionario, "Campo obrigatório!");
            } else {
                setSucessFor(inputNomeFuncionario);
            }
    
            if (inputCpfValue === "") {
                setErrorFor(inputCpf, "Campo obrigatório!");
            } else {
                setSucessFor(inputCpf);
            }
    
            if (inputEnderecoFuncionarioValue === "") {
                setErrorFor(inputEnderecoFuncionario, "Campo obrigatório!");
            } else {
                setSucessFor(inputEnderecoFuncionario);
            }
    
            if (inputTelefoneFuncionarioValue === "") {
                setErrorFor(inputTelefoneFuncionario, "Campo obrigatório!");
            } else {
                setSucessFor(inputTelefoneFuncionario);
            }
    
            if (inputEmailFuncionarioValue === "") {
                setErrorFor(inputEmailFuncionario, "Campo obrigatório!");
            } else {
                setSucessFor(inputEmailFuncionario);
            }
    
            if (inputNomeFuncionarioValue != "" && inputCpfValue != "" && inputEnderecoFuncionarioValue != "" && inputTelefoneFuncionarioValue != "" && inputEmailFuncionarioValue) {
                setDeletFor(btExcluirCadFuncionario, '');
        
            }
    
        }
    
        function checkInputCadFornecedor() {
            const inputNomeEmpresaFornecedorValue = inputNomeEmpresaFornecedor?.value
            const inputCnpjFornecedorValue = inputCnpjFornecedor?.value
            const inputEnderecoFornecedorValue = inputEnderecoFornecedor?.value
            const inputTelefoneFornecedorValue = inputTelefoneFornecedor?.value
            const inputEmailFornecedorValue = inputEmailFornecedor?.value
        
            if (inputNomeEmpresaFornecedorValue === "") {
                setErrorFor(inputNomeEmpresaFornecedor, "Campo obrigatório!");
            } else {
                setSucessFor(inputNomeEmpresaFornecedor);
            }
        
            if (inputCnpjFornecedorValue === "") {
                setErrorFor(inputCnpjFornecedor, "Campo obrigatório!");
            } else {
                setSucessFor(inputCnpjFornecedor);
            }
        
            if (inputEnderecoFornecedorValue === "") {
                setErrorFor(inputEnderecoFornecedor, "Campo obrigatório!");
            } else {
                setSucessFor(inputEnderecoFornecedor);
            }
        
            if (inputTelefoneFornecedorValue === "") {
                setErrorFor(inputTelefoneFornecedor, "Campo obrigatório!");
            } else {
                setSucessFor(inputTelefoneFornecedor);
            }
        
            if (inputEmailFornecedorValue === "") {
                setErrorFor(inputEmailFornecedor, "Campo obrigatório!");
            } else {
                setSucessFor(inputEmailFornecedor);
            }
    
            if (inputNomeEmpresaFornecedorValue != "" && inputCnpjFornecedorValue != "" && inputEnderecoFornecedorValue != "" && inputTelefoneFornecedorValue != "" && inputEmailFornecedorValue != "") {
                setSaveFor(btSalvarFornecedor, '');
        
            }
        
        }
    
        function checkInputResetCadFornecedor() {
            const inputNomeEmpresaFornecedorValue = inputNomeEmpresaFornecedor?.value
            const inputCnpjFornecedorValue = inputCnpjFornecedor?.value
            const inputEnderecoFornecedorValue = inputEnderecoFornecedor?.value
            const inputTelefoneFornecedorValue = inputTelefoneFornecedor?.value
            const inputEmailFornecedorValue = inputEmailFornecedor?.value
        
            if (inputNomeEmpresaFornecedorValue === "") {
                setErrorFor(inputNomeEmpresaFornecedor, "Campo obrigatório!");
            } else {
                setSucessFor(inputNomeEmpresaFornecedor);
            }
        
            if (inputCnpjFornecedorValue === "") {
                setErrorFor(inputCnpjFornecedor, "Campo obrigatório!");
            } else {
                setSucessFor(inputCnpjFornecedor);
            }
        
            if (inputEnderecoFornecedorValue === "") {
                setErrorFor(inputEnderecoFornecedor, "Campo obrigatório!");
            } else {
                setSucessFor(inputEnderecoFornecedor);
            }
        
            if (inputTelefoneFornecedorValue === "") {
                setErrorFor(inputTelefoneFornecedor, "Campo obrigatório!");
            } else {
                setSucessFor(inputTelefoneFornecedor);
            }
        
            if (inputEmailFornecedorValue === "") {
                setErrorFor(inputEmailFornecedor, "Campo obrigatório!");
            } else {
                setSucessFor(inputEmailFornecedor);
            }
    
            if (inputNomeEmpresaFornecedorValue != ""
            && inputCnpjFornecedorValue != ""
            && inputEnderecoFornecedorValue != ""
            && inputTelefoneFornecedorValue != ""
            && inputEmailFornecedorValue  != "") {
                setDeletFor(btExcluirFornecedor, '');
            }
        
        }
    
        function checkInputConsultaFornecedorAlteracao() {
            const inputNomeEmpresaAltFornecedorValue = inputNomeEmpresaAltFornecedor?.value
            const inputCnpjAltFornecedorValue = inputCnpjAltFornecedor?.value
            const inputEnderecoAltFornecedorValue = inputEnderecoAltFornecedor?.value
            const inputTelefoneAltFornecedorValue = inputTelefoneAltFornecedor?.value
            const inputEmailAltFornecedorValue = inputEmailAltFornecedor?.value
            const btCadFornecedorAlteracaoSalvarValue = btCadFornecedorAlteracaoSalvar?.value
        
            if (inputNomeEmpresaAltFornecedorValue != ""
            && inputCnpjAltFornecedorValue != ""
            && inputEnderecoAltFornecedorValue != ""
            && inputTelefoneAltFornecedorValue != ""
            && inputEmailAltFornecedorValue  != "") {
                setSaveFor(btCadFornecedorAlteracaoSalvar, '');
            }
        
        }

        function checkInputResetConsultaFornecedor() {
            const inputNomeEmpresaResConsultaFornecedorValue = inputNomeEmpresaResConsultaFornecedor?.value
            const inputCnpjResConsultaFornecedorValue = inputCnpjResConsultaFornecedor?.value
            const inputEnderecoResConsultaFornecedorValue = inputEnderecoResConsultaFornecedor?.value
            const inputTelefoneResConsultaFornecedorValue = inputTelefoneResConsultaFornecedor?.value
            const inputEmailResConsultaFornecedorValue = inputEmailResConsultaFornecedor?.value
            const btResConsultaFornecedorExcluirValue = btResConsultaFornecedorExcluir?.value
        
            if (inputNomeEmpresaResConsultaFornecedorValue != ""
            && inputCnpjResConsultaFornecedorValue != ""
            && inputEnderecoResConsultaFornecedorValue != ""
            && inputTelefoneResConsultaFornecedorValue != ""
            && inputEmailResConsultaFornecedorValue  != "") {
                setDeletFor(btResConsultaFornecedorExcluir, '');
            }
        
        }

        function checkInputConsultaClienteAlteracao() {
            const inputNomeEmpresaAltClienteValue = inputNomeEmpresaAltCliente?.value
            const inputCnpjAltClienteValue = inputCnpjAltCliente?.value
            const inputEnderecoAltClienteValue = inputEnderecoAltCliente?.value
            const inputTelefoneAltClienteValue = inputTelefoneAltCliente?.value
            const inputEmailAltClienteValue = inputEmailAltCliente?.value
            const btCadClienteAlteracaoSalvarValue = btCadClienteAlteracaoSalvar?.value
        
            if (inputNomeEmpresaAltClienteValue != ""
            && inputCnpjAltClienteValue != ""
            && inputEnderecoAltClienteValue != ""
            && inputTelefoneAltClienteValue != ""
            && inputEmailAltClienteValue  != "") {
                setSaveFor(btCadClienteAlteracaoSalvar, '');
            }
        
        }

        function checkInputResetConsultaCliente() {
            const inputNomeEmpresaResConsultaClienteValue = inputNomeEmpresaResConsultaCliente?.value
            const inputCnpjResConsultaClienteValue = inputCnpjResConsultaCliente?.value
            const inputEnderecoResConsultaClienteValue = inputEnderecoResConsultaCliente?.value
            const inputTelefoneResConsultaClienteValue = inputTelefoneResConsultaCliente?.value
            const inputEmailResConsultaClienteValue = inputEmailResConsultaCliente?.value
            const btResConsultaClienteExcluirValue = btResConsultaClienteExcluir?.value
        
            if (inputNomeEmpresaResConsultaClienteValue != ""
            && inputCnpjResConsultaClienteValue != ""
            && inputEnderecoResConsultaClienteValue != ""
            && inputTelefoneResConsultaClienteValue != ""
            && inputEmailResConsultaClienteValue  != "") {
                setDeletFor(btResConsultaClienteExcluir, '');
            }
        
        }

        function checkInputConsultaFuncionarioAlteracao() {
            const inputNomeEmpresaAltFuncionarioValue = inputNomeEmpresaAltFuncionario?.value
            const inputCnpjAltFuncionarioValue = inputCnpjAltFuncionario?.value
            const inputEnderecoAltFuncionarioValue = inputEnderecoAltFuncionario?.value
            const inputTelefoneAltFuncionarioValue = inputTelefoneAltFuncionario?.value
            const inputEmailAltFuncionarioValue = inputEmailAltFuncionario?.value
            const btCadFuncionarioAlteracaoSalvarValue = btCadFuncionarioAlteracaoSalvar?.value
        
            if (inputNomeEmpresaAltFuncionarioValue != ""
            && inputCnpjAltFuncionarioValue != ""
            && inputEnderecoAltFuncionarioValue != ""
            && inputTelefoneAltFuncionarioValue != ""
            && inputEmailAltFuncionarioValue  != "") {
                setSaveFor(btCadFuncionarioAlteracaoSalvar, '');
            }
        
        }

        function checkInputResetConsultaFuncionario() {
            const inputNomeEmpresaResConsultaFuncionarioValue = inputNomeEmpresaResConsultaFuncionario?.value
            const inputCnpjResConsultaFuncionarioValue = inputCnpjResConsultaFuncionario?.value
            const inputEnderecoResConsultaFuncionarioValue = inputEnderecoResConsultaFuncionario?.value
            const inputTelefoneResConsultaFuncionarioValue = inputTelefoneResConsultaFuncionario?.value
            const inputEmailResConsultaFuncionarioValue = inputEmailResConsultaFuncionario?.value
            const btResConsultaClienteExcluirValue = btResConsultaClienteExcluir?.value
        
            if (inputNomeEmpresaResConsultaFuncionarioValue != ""
            && inputCnpjResConsultaFuncionarioValue != ""
            && inputEnderecoResConsultaFuncionarioValue != ""
            && inputTelefoneResConsultaFuncionarioValue != ""
            && inputEmailResConsultaFuncionarioValue  != "") {
                setDeletFor(btResConsultaFuncionarioExcluir, '');
            }
        
        }

        
        function checkInputConsultaProdutoAlteracao() {
            const inputTipoProdutoAltProdutoValue = inputTipoProdutoAltProduto?.value
            const inputDadosAdicionaisAltProdutoValue = inputDadosAdicionaisAltProduto?.value
            const btCadProdutoAlteracaoSalvarValue = btCadProdutoAlteracaoSalvar?.value
        
            if (inputTipoProdutoAltProdutoValue != "" && inputDadosAdicionaisAltProduto != "") {
                setSaveFor(btCadProdutoAlteracaoSalvar, '');
            }
        
        }

        function checkInputResetConsultaProduto() {
            const inputTipoTecidoResConsultaProdutoValue = inputTipoTecidoResConsultaProduto?.value
            const inputDadosAdicionaisResConsultaProdutoValue = inputDadosAdicionaisResConsultaProduto?.value
            const inputQuantidadeResConsultaProdutoValue = inputQuantidadeResConsultaProduto?.value
            const inputValorResConsultaProdutoValue = inputValorResConsultaProduto?.value
            const btResConsultaProdutoExcluirValue = btResConsultaProdutoExcluir?.value
        
            if (inputTipoTecidoResConsultaProdutoValue != ""
            && inputDadosAdicionaisResConsultaProdutoValue != ""
            && inputQuantidadeResConsultaProdutoValue != ""
            && inputValorResConsultaProdutoValue != "") {
                setDeletFor(btResConsultaProdutoExcluir, '');
            }
        
        }
      
        function setErrorFor(input, message) {
            const formControl = input.parentElement;
            const small = formControl.querySelector('small')
    
            //Adicionar a mensagem de erro
            small.innerText = message;
            //Adicionar a classe de erro
            formControl.className = "form-control error";
    
        }
    
        function setSucessFor(input, message) {
            const formControl = input.parentElement;
    
            //Adicionar a classe de sucesso
            formControl.className = "form-control sucess";
    
        }
    
        function setSaveFor(input, message) {
            const formSave = input.parentElement;
    
            const msg = document.getElementById("txt-msg");
            msg.innerText = "Salvo com sucesso!";
    
            //Adicionar a classe de sucesso
            formSave.className = "form-save save";
    
        }
    
        function setDeletFor(input, message) {
            const formDelet = input.parentElement;
    
            const msg = document.getElementById("txt-msg");
            msg.innerText = "Excluído com sucesso!";
    
            //Adicionar a classe de sucesso
            formDelet.className = "form-delet delet";
    
        }

        function inputClear(input){
            const inputs = document.querySelectorAll("input");
            const todosInputs = Array.from(inputs).every(input => input.value !== "");
            
            if (todosInputs) {
              Array.from(inputs).forEach(input => {
                input.value = '';
              });
            }
        }
    
  });
