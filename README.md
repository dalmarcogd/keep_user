# keep_user
Aplicação que permite manter um cadastro de usuários.

# Arquitetura Backend
Na camada de modelagem de entidades e relacionamento foi utilizado o hibernate, para o gerenciamento injeção de dependencia foi utilizado spring e spring-mvc para disponibilizar os recursos.
# Arquitetura Frontend
No frontend foi utilizado angularjs, os frameworks ui-router, ui-bootstrap, smart-table, para o compilação do projeto foi utilizado o gulp e o bower para gerenciamento das dependencias.

# Como utilizar?
1 - Instalar servidor mysql.<br>
2 - Executar script = CREATE SCHEMA 'keep_user';<br>
3 - Clonar o repositório.<br>
4 - Instalar wildfly9<br>
5 - Importar o projeto do backend no eclipse.<br>
6 - Instalar pluggin gradle, executar o comando = clean build jar war, no pluggin do gradle<br>
7 - Lozalizar a pasta dentro do projeto backend build/libs e fazer deploy do keep-user.war no servidor.<br>
8 - Exercutar os scripts = <br>
    INSERT INTO funcao_usuario_externo(co_funcao, no_funcao) VALUES (1, 'Gestor');<br>
    INSERT INTO funcao_usuario_externo(co_funcao, no_funcao) VALUES (2, 'Administrador');<br>
    INSERT INTO funcao_usuario_externo(co_funcao, no_funcao) VALUES (3, 'Frente de Caixa');<br>
    INSERT INTO usuario_externo(id_usuario, co_usuario, nu_cpf, no_usuario, de_email, ic_situacao, ic_perfil_acesso, co_funcao) <br>
                        VALUES (1, 1, '22188488130', 'João da Silva', 'joao@gmail.com', 0, 0, 1);<br>
    INSERT INTO usuario_externo(id_usuario, co_usuario, nu_cpf, no_usuario, de_email, ic_situacao, ic_perfil_acesso, co_funcao) <br>
				                VALUES (2, 2, '49121662193', 'Dona tina', 'tina@gmail.com', 0, 1, 0);<br>
9 - Instalar nodejs, localizar o diretorio do frontend e executar o comando = gulp watch-dev<br>
11 - Acessar a url localhost:3000
