let modalsTemplates = {
    'questionário':`
        <div class="modal-header">
            <h2>Questionário da 1ª Fase do Processo Seletivo de Avaliadores Prêmio STAC</h2>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="container">
                <div class="form">
                    <div id="sendmessage">Questionário enviado com sucesso!</div> 
                    <div id="errormessage"></div>
                    <form action="https://stac-prd.us-east-1.elasticbeanstalk.com/perguntas/1" method="post" role="form" onsubmit="confirmForm(event)" data-validation="1">
                    <div class="form-row">
                        <div class="form-group">
                        <h5>
                            <p>
                            <b>1)</b> Um projeto de pesquisa nada mais é do que um trabalho acadêmico desenvolvido dentro de um conglomerado de metodologias usadas por cientistas, pesquisadores e estudiosos na busca do conhecimento. O projeto de pesquisa possui um conjunto de regras básicas para desenvolver uma pesquisa a fim de produzir novos conceitos, bem como corrigir e integrar conhecimentos pré-existentes.
                            </p>
                            <p>
                            Dada a definição de projeto de pesquisa, cite e explique sucintamente os principais passos para a realização de um projeto de pesquisa.
                            </p>
                        </h5>
                        <textarea class="form-control" name="message" rows="5" data-msg="Please write something for us" placeholder="Resposta" required></textarea>
                        </div>
                        <div class="form-group">
                        <h5>
                            <p>
                            <b>2)</b> Dentro do fantástico e controverso mundo da ciência existem dois métodos diferentes que podem ser utilizados para a realização de projetos de pesquisa: o método científico e o método de engenharia. Ambos possuem suas características e especificidades que os diferenciam.
                            </p>
                            <p>
                            Em se tratando das características de cada método, defina método científico e método de engenharia e aponte as principais diferenças entre os métodos em questão.
                            </p>
                        </h5>
                        <textarea class="form-control" name="message" rows="5" data-msg="Please write something for us" placeholder="Resposta" required></textarea>
                        </div>
                        <div class="form-group">
                        <h5>
                            <p>
                            <b>3)</b> Uma pesquisa só existe através do levantamento de hipóteses e dúvidas referentes a algum tema, e as suas respostas buscam meios que levam o pesquisador a algum lugar com o seu trabalho científico. O tipo de pesquisa depende do caminho escolhido para se chegar a um fim proposto pelo estudo em questão. É a escolha que o pesquisador realiza para abordar o objeto de estudo.
                            </p>
                            <p>
                            Levando em conta os tipos de pesquisa existentes e suas aplicações, elenque e descreva brevemente os tipos de pesquisa que podem ser adotados em um estudo técnico-científico inserido em um ambiente acadêmico.
                            </p>
                        </h5>
                        <textarea class="form-control" name="message" rows="5" data-msg="Please write something for us" placeholder="Resposta" required></textarea>        
                        </div>
                        <div class="form-group">
                        <h5>
                            Leia o texto abaixo para responder à questão 4:
                            <br><br>
                        </h5>
                        <center><img src="img/q4.png" alt=""></center>
                        <br><br>
                        <h5>
                            <p>
                            <b>4)</b> Após a leitura do excerto acima, aponte e descreva brevemente quais são os objetivos do projeto de pesquisa, a metodologia utilizada, os resultados obtidos e as conclusões apresentadas.
                            </p>
                        </h5>
                        <textarea class="form-control" name="message" rows="5" data-msg="Please write something for us" placeholder="Resposta" required></textarea>
                        </div>
                        <div class="form-group">
                        <h5>
                            <p>
                            <b>5)</b> Ao dar início a um novo projeto de pesquisa, nos deparamos com o Plano de Pesquisa, um primeiro passo importante para a realização e o bom andamento de uma pesquisa. Sabendo que para um estudo ser bem estruturado e conciso, devemos dar grande atenção ao desenvolvimento do nosso Plano de Pesquisa, porque é ele que define e resume todos os passos que serão adotados.
                            </p>
                            <p>
                            Sendo assim, qual a importância desse Plano de Pesquisa para uma boa conduta científica?
                            </p>
                        </h5>
                        <textarea class="form-control" name="message" rows="5" data-msg="Please write something for us" placeholder="Resposta" required></textarea>
                        </div>
                        <div class="form-group">
                        <h5>Texto para a questão 6:</h5>
                        <center><img src="img/q6.png" alt=""></center>
                        <br><br>
                        <h5>
                            <p>
                            <b>6)</b> Dada a obra acima, escreve a referência bibliográfica de acordo com as normas da ABNT.
                            </p>
                        </h5>
                        <textarea class="form-control" name="message" rows="5" data-msg="Please write something for us" placeholder="Resposta" required></textarea>
                        </div>
                        <div class="form-group">
                        <h5>
                            <p>
                            <b>7)</b> Durante a realização de um projeto de pesquisa é feito o levantamento de bibliografia e o estado da arte, que consiste na pesquisa de produções acadêmicas sobre o tema do estudo. Durante esse processo nos deparamos com diversos textos e autores variados. Muitos desses textos utilizamos em nosso projeto escrito.
                            </p>
                            <p>
                            Diante disso, qual é a importância das referências bibliográficas em um projeto de pesquisa? Cite, no mínimo, duas fontes consolidadas e confiáveis para realizar uma busca bibliográfica na internet.
                            </p>
                        </h5>
                        <textarea class="form-control" name="message" rows="5" data-msg="Please write something for us" placeholder="Resposta" required></textarea>
                        </div>
                        <div class="form-group">
                        <h5>
                            Textos para a questão 8:
                            <br><br>
                            <b>O que é Ciência? - Mockaitis</b>
                            <br><br>
                            <p>
                            A ciência como um mero conjunto de conhecimentos estabelecidos, que é o significado mais comum e difundido da palavra, tem gerado muitas confusões. Nas escolas e universidades, não é ensinada a ciência, pois o que se ensina são conhecimentos consolidados. Sem dúvida que quanto maior o grau de educação, mais profundos serão estes conhecimentos, mas isso não faz com que se deixe a universidade um formando conhecedor de ciência (ao menos não necessariamente). Foi neste sentido que o astrônomo Carl Sagan afirmou que ciência é muito mais uma forma de pensar do que um corpo de conhecimentos. O conhecimento é o grande conjunto dessas leis. O que aprendemos é meramente um corpo de conhecimentos. Para discernir criticamente, precisamos conhecer a ciência como método, e não somente seus fatos consolidados. Outra coisa que se deve salientar é a importância da educação como um processo de transmissão de todo esse conhecimento, de forma a combater a ignorância individual.
                            </p>
                            <p>
                            Desta maneira e de uma forma bem geral, a ciência é o conjunto de processos que leva ao descobrimento das leis que regem a natureza. Acima de tudo, o que alimenta a ciência é a nossa curiosidade. É nosso instinto de desbravar o desconhecido. Somos compelidos a combater a ignorância. Porque, talvez instintivamente, sabemos que tornando o desconhecido cada vez mais conhecido, cada vez mais sentimos menos razões para termos medo, uma vez que tememos tudo o que desconhecemos.
                            </p>
                            <p>
                            Fonte: MOCKAITIS. O que é ciência? In: Blogs de ciência da Universidade Estadual de Campinas. Disponível em: &lt;<a href="https://www.blogs.unicamp.br/blog/o-que-e-ciencia/" target="_blank">https://www.blogs.unicamp.br/blog/o-que-e-ciencia/</a>&gt;. Acesso em: 22. mar 2019.
                            </p>
                        </h5>
                        <h5>
                            <b>No início – Uma breve história da ciência.</b>
                            <br><br>
                            <center><img src="img/q8.png" alt=""></center>
                            <br><br>
                            <p>
                            A CIÊNCIA É ESPECIAL. É a melhor forma que temos de descobrir coisas sobre o mundo e tudo o que faz parte dele — e isso nos inclui.
                            <br>
                            </p>
                            <p>
                            As pessoas fazem perguntas sobre o que veem ao redor há milhares de anos. As respostas sugeridas sofreram muitas mudanças. Assim como a própria ciência. A ciência é dinâmica, desenvolvendo-se sobre ideias e descobertas que uma geração passa para a próxima, bem como avançando a passos largos quando são feitas novas descobertas. O que não mudou é a curiosidade, a imaginação e a inteligência daqueles que fazem ciência. Talvez saibamos mais hoje, porém as pessoas que refletiram a fundo sobre o mundo três mil anos atrás eram tão inteligentes quanto nós.
                            </p>
                
                            <p>
                            Fonte: BYNUM, William. Uma breve história da ciência. [tradução: Iuri Abreu]. Porto Alegre, RS: L&PM, 2014.
                            </p>
                            <p>
                            <b>8)</b> A ciência não é apenas sobre microscópios e tubos de ensaio em laboratórios, embora isso seja o que a maioria das pessoas imagina quando pensa em ciência. Durante grande parte da história humana a ciência foi (e ainda é) utilizada para tentar entender e controlar o mundo em que vivemos. Após a leitura dos excertos acima, explique, levando em conta os pontos abordados, qual é a importância da ciência como bem intelectual da humanidade e porque é vital que exista um diálogo íntimo entre a produção de conhecimento científico e a educação.
                            </p>
                        <textarea class="form-control" name="message" rows="5" data-msg="Please write something for us" placeholder="Resposta" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" style="margin-right: auto; margin-left: auto;">Enviar</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
        </div>
    `,
    'entrevista': `
    
    `,
    'textual': `
    
    `,
    'cadastrais': `
        <div class="modal-header">
            <h2>Atualize seus dados cadastrais</h2>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </div>
        <div class="modal-body">
            <div class="form">
                <div id="sendmessage"></div> 
                <div id="errormessage"></div>
                <form action="https://stac-prd.us-east-1.elasticbeanstalk.com/user/action/atualiza" method="post" onsubmit="confirmForm(event)" enctype="multipart/form-data" role="form">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input type="text" name="nomeCompleto" class="form-control" id="name" placeholder="Nome completo" data-rule="minlen:2" data-msg="Insira seu nome completo" />
                            <div class="validation"></div>
                        </div>
                        <div class="form-group col-md-6">
                            <input type="number" class="form-control" name="celular" id="phone" placeholder="Telefone para contato" data-rule="required" min="10000000000" max="99999999999" data-msg="Insira telefone para contato" />
                            <div class="validation"></div>
                        </div>
                        <div class="form-group col-md-6">
                            <input type="email" class="form-control" name="email" id="email" placeholder="E-mail" data-rule="email" data-msg="Insira seu email" />
                            <div class="validation"></div>
                        </div>
                        <div class="form-group col-md-6">
                            <input type="date" class="form-control" name="dataDeNascimento" id="date" placeholder="Data de nascimento" data-rule="required" data-msg="Insira sua data de nascimento" />
                            <div class="validation"></div>
                        </div>
                        <div class="form-group col-md-6">
                            <input type="number" class="form-control" name="rg" id="rg" placeholder="RG" data-rule="required" min="99999999" max="999999999" data-msg="Insira seu RG" />
                            <div class="validation"></div>
                        </div>
                        <div class="form-group col-md-6">
                            <input type="number" class="form-control" name="cep" id="cep" placeholder="CEP" data-rule="required" max="99999999" data-msg="Insira seu CEP" />
                            <div class="validation"></div>
                        </div>
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" name="nomeSocial" id="nsocial" placeholder="Nome social"/>
                        </div>
                        <!-- <div class="form-group col-md-6">
                            <label for="doc">
                            <input type="file" class="form-control" name="docConclusao" id="doc" accept="image/*" required/>
                            Documento de comprovação da conclusão do Ensino Médio
                            </label>
                            <div class="validation"></div>
                        </div> -->
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary">Atualizar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
        </div>
    `
}