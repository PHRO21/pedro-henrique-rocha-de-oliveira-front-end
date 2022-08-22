# PedroHenriqueRochaDeOliveiraFrontEnd

Projeto de front-end básico para consumo da api da :books: Biblioteca Acelera G&P localizada neste repositório [link](https://github.com/aceleragep/biblioteca)

## - Requisitos Básicos
 - NodeJs (Para instalação das dependências do Angular)
 - Angular CLI versão 13.2.6
 - Maven (Para rodar API back-end) 

## - Instruções Iniciais

- Back-end
  - Faça o clone da [API](https://github.com/aceleragep/biblioteca);
  - Em um prompt de comando qualquer, execute os seguintes passos;
  No diretório raiz, execute
    - `mvn install`
    - `cd target`
    - `java -jar biblioteca-0.0.1-SNAPSHOT.jar`
    
   A API será executada, por padrão, no endereço _http://localhost:8080_
   
- Front-End
  - Abra a pasta raíz do projeto e rode, em qulquer prompt de comando, o código para a instalação das de pendências do angular 
    - `npm i`

  - Com a API do back-end rodando, inicalize a aplicação com o comando:
    - `ng serve`

  A aplicação vai rodar, por padrão, no endereço _http://localhost:4200_

## :exclamation: Em caso de bloqueio pelo Cors da API
Caso o acesso a alguns endpoints da API seja bloqueado pelo cors, será necessário adcionar uma classe de configuração no pacote :file_folder:_biblioteca/src/main/java/com/example/demo/configs/_

```
package com.example.demo.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("*")
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT");
    }
}
```
